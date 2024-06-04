from rest_framework.views import APIView
from rest_framework.response import Response
from .permissions import OnlyAuthenticated
from .chatgpt import Korean_name
from .translators import translate_text
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class KoreanNameAPIView(APIView):
    permission_classes=[OnlyAuthenticated]
    def get(self,request,name):
        message = Korean_name(name)
        return Response({"result":message})
    
class TranslateAPIView(APIView):
    permission_classes=[OnlyAuthenticated]
    def get(self,request,text):
        message = translate_text(text)
        return Response({"result":message})