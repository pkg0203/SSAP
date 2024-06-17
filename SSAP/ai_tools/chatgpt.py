import openai
import sys
import os

# 현재 파일의 디렉토리 경로를 구합니다.
current_path = os.path.dirname(__file__)

# 상위 경로의 상대 경로를 구합니다.
parent_path = os.path.join(current_path, "..")

# sys.path에 상위 경로를 추가합니다.
sys.path.append(parent_path)

# 상위 경로의 파일을 import하기 위함
from SSAP.config import OPEN_AI_SECRET_KEY

MAX_TOKEN = 5
openai.api_key = OPEN_AI_SECRET_KEY


def Korean_name(foreign_name):
    prompt_message = """
Role:
    - Korean Name Namer.
Goal: 
    - It needs to learn a large number of Korean names and find the Korean name with the most similar pronunciation to the name you specify.
Task:
    - Given a name, find the Korean name with the most similar pronunciation. 
    - Create a Korean name.
    - Korean name must be exactly 3 Korean characters.
    - Give only the name as an answer.
Successful examples:
    - LeBron James : 이재민
    - Stephen Curry : 서태건
    - Michael Jordan : 마재동
    - Elon Musk : 이로먼
    - Napoléon Bonaparte : 나보현
    - Mark Zuckerberg : 마주빈   
    - marilyn monroe : 마미란
    - John Lennon : 조래호
    - Will Smith : 위수민
    - Judy garland : 주가람
    - Ariana Grande : 구아리
    - Selena Gomez : 서예나
    - 尾田 栄一郎 : 오진우
    - 豐臣秀吉 : 도현우
    - うずまき ナルト : 나건우
"""

    completion = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": prompt_message,
            },
            {
                "role": "user",
                "content": foreign_name,
            },
        ],
        max_tokens=MAX_TOKEN,
    )

    return completion.choices[0].message.content
