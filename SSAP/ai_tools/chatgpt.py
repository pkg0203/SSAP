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
CLIENT = OpenAI()
prompt_message='''
        너는 외국인의 이름을 받아서 한국 이름으로 지어주는 작명가야.
    '''

completion = CLIENT.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {
            "role": "system",
            "content": prompt_message,
        },
        {
            "role": "user",
            "content": "Compose a poem that explains the concept of recursion in programming.",
        },
    ],
    max_tokens=MAX_TOKEN,
)

print(completion.choices[0].message.content)
