from openai import OpenAI
import json
from google import genai
from cryptography.fernet import Fernet
from xml.dom.minidom import parseString as StringToXml


class Encrypted:
    def __init__(self,key):
        self.key = key
    def encrypt(self,text):
        cipher = Fernet(self.key)
        return cipher.encrypt(text.encode())
    def decrypt(self,text):
        cipher = Fernet(self.key)
        return cipher.decrypt(text).decode()



data = json.load(open("data.json"))

class DeepSeek():
    def __init__(self,apiKey = data["deepseek"]["key"],model = data["deepseek"]["modelName"],role = "You are a helpful assistant"):
        self.role = role
        self.model = model
        self.apikey = apiKey
        self.__client = OpenAI(api_key=self.apikey, base_url="https://api.deepseek.com")

    def generate(self,prompt):
        response = self.__client.chat.completions.create(
        model=self.model,
        messages=[
            {"role": "system", "content": self.role},
            {"role": "user", "content":prompt},
        ],
        stream=False
        )
        return response.choices[0].message.content
    

class Gemini():
    def __init__(self,apiKey = data["google"]["key"],model = "gemini-2.0-flash",role = ""):
        self.role = role
        self.model = model
        self.apikey = apiKey
        self.__client = genai.Client(api_key=self.apikey)

    def generate(self,prompt):
        response = self.__client.models.generate_content(
            model=self.model, contents=prompt
        )
        return response.text
    
    
    


ai = Gemini()
specXml = StringToXml(open("CVRequirements.xml","r").read()).documentElement


def GenerateQuestions(jobDescription:str):
    prompt = f"""
        <prompt> generate all questions for a professional CV based on the `jobDescription` and `{specXml.tagName}`</prompt>
        <context> a question</context>
        <jobDescription>
            {jobDescription}
        </jobDescription>
        {specXml.toprettyxml()}
        <roles>
            <role>List the questions in a JSON format.  
                Use this JSON schema:
                question = {"{'context':str, 'answerType':Literal['str','int','float','bool','list'], 'question':str}"}
                Return: list[question]
            </role>
        </roles>
    """
    aiResponse = ai.generate(prompt=prompt).removeprefix("```").removeprefix("json").removesuffix("```")
    print(aiResponse)
    aiResJson = json.loads(aiResponse)
    print(aiResJson)
    return {"questions":aiResJson}


def GenerateCV(questions:list[dict]):
    prompt = f"""
        <prompt> generate a professional CV based on the `questions` and `{specXml.tagName}`</prompt>
        <questions>
            {questions}
        </questions>
        {specXml.toprettyxml()}
        <roles>
            <role> reply strictly with only the cv. and nothing else. </role>
            <role> return a text document </role>
        </roles>
    """
    aiResponse = ai.generate(prompt=prompt).removeprefix("```").removesuffix("```")
    return aiResponse