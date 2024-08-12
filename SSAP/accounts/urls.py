from django.urls import path

from .views import *

app_name = "accounts"
urlpatterns = [
    path("registration/", RegistrationAPIView.as_view(), name="registration"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
    path("password/", PasswordAPIView.as_view(), name="password"),
]
