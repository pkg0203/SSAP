from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .chatgpt import Korean_name
<<<<<<< HEAD
=======
from .permissions import OnlyAuthenticated
>>>>>>> af089218a4d7ad9dad26105b63869871f23f5668
from .translators import translate_text


# Create your views here.
class KoreanNameAPIView(APIView):
<<<<<<< HEAD
    permission_classes = [IsAuthenticated]
=======
    permission_classes = [OnlyAuthenticated]
>>>>>>> af089218a4d7ad9dad26105b63869871f23f5668

    def get(self, request, name):
        message = Korean_name(name)
        return Response({"result": message})


class TranslateAPIView(APIView):
<<<<<<< HEAD
    permission_classes = [IsAuthenticated]
=======
    permission_classes = [OnlyAuthenticated]
>>>>>>> af089218a4d7ad9dad26105b63869871f23f5668

    def get(self, request, text):
        message = translate_text(text, request.user.nation)
        return Response({"result": message})
