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
            아래의 3가지 규칙을 준수해야 해.
            1. 이름만 답변하면 돼
            2. 질문으로 답하지마
            3. 한국 이름은 2~3글자로 이루어져 있어

            그리고 답변의 예를 몇 개 들면,
            'LeBron James'은 '류재민' 또는 '이재민',
            'Stephen Curry'는 '김성호',
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

print(Korean_name("尾田 栄一郎"))
