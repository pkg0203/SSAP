from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)

from accounts import views

app_name = "accounts"
urlpatterns = [
    path("google/login/", views.google_login, name="google_login"),
    path("google/callback/", views.google_callback, name="google_callback"),
    path(
        "google/login/finish/",
        views.GoogleLogin.as_view(),
        name="google_login_todjango",
    ),
    path("registration/", views.CustomRegisterView.as_view(), name="user-registration"),
    path(
        "liked/article/<str:username>/",
        views.LikedArticle.as_view(),
        name="liked_article",
    ),
    path(
        "bookmarked/article/<str:username>/",
        views.MarkedArticle.as_view(),
        name="marked_article",
    ),
    path("liked/story/<str:username>/", views.LikedStory.as_view(), name="liked_story"),
    path(
        "bookmarked/story/<str:username>/",
        views.MarkedStory.as_view(),
        name="marked_story",
    ),
    path("comments/", views.UserCommentsAPIView.as_view(), name="user-comments"),
    path("<str:username>/", views.UserProfileAPIView.as_view(), name="user-profile"),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
