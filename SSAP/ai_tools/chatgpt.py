from openai import OpenAI
import sys
import os
from nation_list import tar_nation_dict

# 현재 파일의 디렉토리 경로를 구합니다.
current_path = os.path.dirname(__file__)

# 상위 경로의 상대 경로를 구합니다.
parent_path = os.path.join(current_path, "..")

# sys.path에 상위 경로를 추가합니다.
sys.path.append(parent_path)

# 상위 경로의 파일을 import하기 위함
from SSAP.config import OPEN_AI_SECRET_KEY

MAX_TOKEN = 40
CLIENT = OpenAI(api_key=OPEN_AI_SECRET_KEY)


def Korean_name(foreign_name):
    prompt_message = """
            너는 외국인의 이름을 받아서 한국 이름으로 지어주는 작명가야.
            외국 이름을 입력하면 그 발음을 알파벳으로 변환해서 
            이름의 이니셜 자음과 모음 발음을 한글에서 발음이 비슷한 자음, 모음으로 바꿔서 
            한국인스러운 이름으로 바꿔줘

            아래의 2가지 규칙을 준수해야 해.
            1. 3글자로 된 한글이름을 1개만 대답해야 돼
            2. 이름만 답해
            3. 아래의 예시를 참조해

            answer_example= {
                LeBron James : [류재민, 이재민],
                Stephen Curry : 김성호,
                Michael Jordan : 마재동,
                Elon Musk : 이로먼,
                Napoléon Bonaparte : 나보현,
                尾田 栄一郎 : 오진우,
                豐臣秀吉 : [도희수 , 도현우],
                Elizabeth Windsor : 이리사
                うずまき ナルト : 나건우,
                Usain Bolt : 우세볼,
                Mark Zuckerberg : 마주빈
            }         
        """

    completion = CLIENT.chat.completions.create(
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

print(Korean_name("Justin Bieber"))
