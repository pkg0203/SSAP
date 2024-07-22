from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .chatgpt import Korean_name
from .permissions import OnlyAuthenticated
from .translators import translate_text


# Create your views here.
class KoreanNameAPIView(APIView):
    permission_classes = [OnlyAuthenticated]

    def get(self, request, name):
        message = Korean_name(name)
        return Response({"result": message})


class TranslateAPIView(APIView):
    permission_classes = [OnlyAuthenticated]

    def get(self, request, text):
        message = translate_text(text, request.user.nation)
        return Response({"result": message})
