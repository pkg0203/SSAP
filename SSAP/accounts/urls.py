from django.urls import path
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
    path("liked/article", views.LikedArticle.as_view(), name="liked_article"),
    path("bookmarked/article", views.MarkedArticle.as_view(), name="marked_article"),
    path("liked/story", views.LikedStory.as_view(), name="liked_story"),
    path("bookmarked/story", views.MarkedStory.as_view(), name="marked_story"),
]
