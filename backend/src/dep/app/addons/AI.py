
from openai import OpenAI
from .OBJConvert import Encrypted
import json
from google import genai

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