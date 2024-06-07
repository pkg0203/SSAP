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
역할:
    - 너는 외국인의 이름을 받아서 한국 이름으로 바꿔주는 작명가야.
작업:
    - 외국 이름을 입력하면 발음을 한글 발음으로 변환해줘.
    - 한글 발음을 기반으로 3글자로 된 한국 이름을 만들어줘.
    - 이름만 답변으로 줘.
규칙:
    1. 3글자로 된 한글 이름을 1개만 답해.
    2. 이름만 답해.
예시:
    - LeBron James : 이재민
    - Stephen Curry : 김성호
    - Michael Jordan : 마재동
    - Elon Musk : 이로먼
    - Napoléon Bonaparte : 나보현
    - 尾田 栄一郎 : 오진우
    - 豐臣秀吉 : 도현우
    - Elizabeth Windsor : 이리사
    - うずまき ナルト : 나건우
    - Usain Bolt : 우세볼
    - Mark Zuckerberg : 마주빈        
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
