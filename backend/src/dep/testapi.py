import requests
#
headers = {
    "User-Agent": "TestAPi",
    "Content-Type": "application/json" 
}
# res = requests.post("http://127.0.0.1:8000/airoute/cvinfo",json={"jobTitle":"software enginner"
#                                                                  ,"userName":"desmond"
#                                                                  ,"email":"gsfdf@gmail.com"
#                                                                  ,"phone":"0702342354"
#                                                                  ,"preCv":""}
#                     ,cookies={"localID":"WWlcFJhLf4BUHRh4LkXT5H1Ad5gzB8J7oSeaU0_ybfY"})
res = requests.post("http://127.0.0.1:8000/ai/textifycv", json={"Form":"None"})
print(res.content)
# res = requests.get(" http://127.0.0.1:8000/auth/all_users")
# res = requests.get(" http://127.0.0.1:8000/auth/user",params={"Name":"namefodg"},cookies={"localID":"WWlcFJhLf4BUHRh4LkXT5H1Ad5gzB8J7oSeaU0_ybfY"})

# res = requests.get(" http://127.0.0.1:8000/auth/user/WWlcFJhLf4BUHRh4LkXT5H1Ad5gzB8J7oSeaU0_ybfY")
# res = requests.get(" http://127.0.0.1:8000/auth/user", json={
#     "localID":"",
#     "username":"mac desmond",
#     "email":"something@gmail.com",
#     "password":"pasword"})

# print(res.headers)
# print(res.text)
# print(res.content)
# print(res.json())