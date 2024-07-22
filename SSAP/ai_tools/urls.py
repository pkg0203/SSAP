from django.urls import path

from .views import *

urlpatterns = [
    path("korean_name/<str:name>/", KoreanNameAPIView.as_view()),
    path("translate/<str:text>/", TranslateAPIView.as_view()),
]
