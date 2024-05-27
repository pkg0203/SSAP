import deepl
import sys
import os

# 현재 파일의 디렉토리 경로를 구합니다.
current_path = os.path.dirname(__file__)

# 상위 경로의 상대 경로를 구합니다.
parent_path = os.path.join(current_path, "..")

# sys.path에 상위 경로를 추가합니다.
sys.path.append(parent_path)

# 상위 경로의 파일을 import하기 위함
from SSAP.config import DEEPL_SECRET_KEY
from .nation_list import tar_nation_dict

TRANSLATOR = deepl.Translator(DEEPL_SECRET_KEY)


def translate_text(text, target_lang="EN-US"):
    result = TRANSLATOR.translate_text(text, target_lang=target_lang)
    return result.text

