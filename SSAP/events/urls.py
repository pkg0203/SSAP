from django.urls import path

from .views import *

app_name = "events"
urlpatterns = [
    path("", EventAPIView.as_view()),
    path("<int:pk>/", EventDetailAPIView.as_view()),
]
