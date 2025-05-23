from app.addons.AI import Gemini
from app.model import CV
from pydantic_core import from_json
from pprint import pprint
from app.airoute import GenerateQuestions
ai =  Gemini()


print(GenerateQuestions("software developer at google, that specifies his skills in python"))

def ConvertTextToCV(Text:str):
        prompt = f"""
            <prompt> convert this `text` to Json CV based on the `jsonSchema`</prompt>
            <text>
                {Text}
            </text>
            <jsonSchema>
                {CV.model_json_schema()}
            </jsonSchema>
            <roles>
            <role>return `NONE` for unknown fields </role>
            <role>return only a json document</role>
            </roles>
            
        """
        print(" generating AI response")
        aiResponse = ai.generate(prompt=prompt)
        aiResponse = (aiResponse.removeprefix("```")
                      .removeprefix("json")
                      .removesuffix("```"))
        print("converting ai response to json")
        aiResponseToJson = from_json(aiResponse,allow_partial=True)
        print("converting ai response to CV model")
        aiResponseToCV = CV(**aiResponseToJson)
        print()
        return aiResponseToCV

# pprint(
# ConvertTextToCV("""
# Personal Profile
#  Having been sufficiently equipped with the theoretical and practical knowledge of Electronic Engineering
# principles at UNN, my burning desire is to undertake post graduate studies in Telecommunications and Signals
# Processing in an academic environment that offers world-class exposure to the current developments in this field.
# Thereby, I shall be fully poised to realise my career dream.
# Professional Experiences
# Solina Health - Intern, Management Consultant Analyst May 2019 – Present
#  Worked with a team in Kano state to restructure the technical working groups at four MDAs (SMOH,
# SPHCMB,DMCSA and HMB) to accommodate four newly inaugurated technical working
# groups(Reproductive health and family planning, Nutrition technical working group, Malaria technical
# working group and Maternal new-born and child health)
#  I presented a power point document containing results from analysis carried out on the effect of health facility
# visits on performance of health facilities.
#  I also engaged in problem solving sessions with my team twice every week to provide solutions to gaps
# identified in the health sector across MoU states (Kano, Kaduna, Bauchi, Borno, Yobe and Sokoto).
#  I worked with my team to support Kano state to carry out an analysis on the human resource for health
# component of the Minimum service Package to identify gaps in the health sector and additional staff that
# should be deployed across all health facilities in the state to meet the criteria for MSP.
#  I supported the state to develop a state, zonal and LGA level dashboard to analyse the results from the
# supervision checklist used by essential drug officers during their visits to health facilities under the drug
# revolving fund
# University of Nigeria, Nsukka (UNN Laptop Assembly). – ICT student staff August. 2018 – September 2018
#  Supported in the development of an Igbo Keyboard
# Aptech – ICT intern April 2017- October 2017
#  Acquired skills in HTML, CSS, JavaScript, and PHP
#  Cisco networking
# Education and Qualifications
# University of Nigeria, Nsukka, Enugu State – B Eng. Electronic Engineering Oct. 2013 – July 2018
#  First class Honors
#  Final year thesis: Design and construction of an electronic pest repellent
#  Worked with a departmental colleague to develop the pest repellent
# Eziaha Academy, Umuocham Aba, Abia State Nigeria– West African Senior Secondary Certificate
# Examinations July 2013
#  West African Senior Secondary Certificate Examination
# Volunteer Experiences
# ENGINE- Educating Nigerian Girls in New Enterprises June 2019-
# date
#  Support marginalised secondary school girls with their school fees
#  Encourage young girls to embrace education
#  Teach the girls different subjects and topics that will set them in the right path in future
# Tutorials: Held tutorials for my classmates in the University in micro processing systems March
# 2018
# Awards
#  2 nd runner-up, Group projects in the entire South-east region of Nigeria in CODET July
# 2018
# Competition
#  1 st runner-up project in the Faculty of Engineering in CODET competition June
# 2018
#  1 st runner-up project in the department of Electronic Engineering in CODET competition April
# 2018
#  NsukkaUsa Inc. Academic Awards- Presented to 2 students per LGA with March
# 2018
# the highest CGPAs in Enugu state
#  Agbami Medical and Engineering Professional Scholarship Awards
# 2014
# Competencies

#  Strong entrepreneurial skills
#  Excellent oral, analytical and written communication skills.
#  Self-motivated and target oriented.
#  Computer literate and proficient in the use of Microsoft Office, Excel and Power point.
#  Proficient in qualitative analysis
#  Arduino- Uno
#  Good team player
# Interests
#  Entrepreneurship
#  Project Management
#  Travelling
#  Music
#  Telecommunications
#  Digital Signal Processing
# References
# Available on Request
# """).model_dump())