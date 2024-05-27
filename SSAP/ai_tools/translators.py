import deepl
from SSAP.config import DEEPL_SECRET_KEY

TRANSLATOR = deepl.Translator(DEEPL_SECRET_KEY)


def translate_text(text, target_lang="EN"):
    result = TRANSLATOR.translate_text(text, target_lang=target_lang)
    return result.text
