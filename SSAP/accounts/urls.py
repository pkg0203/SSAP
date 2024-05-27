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
    path("<str:username>/", views.UserProfileAPIView.as_view(), name="user-profile"),
    path("<str:username>/update/", views.UserUpdateAPIView.as_view(), name="user-update"),
    path('<str:username>/delete/', views.UserDeleteView.as_view(), name='user-delete'),
    # path(
    #     "liked/article/",
    #     views.UserLikedArticleListAPIView.as_view(),
    #     name="liked-article",
    # ),
    # path(
    #     "bookmarked/article/",
    #     views.UserBookmarkedArticleListAPIView.as_view(),
    #     name="bookmarked-article",
    # ),
    # path(
    #     "liked/story/",
    #     views.UserLikedStoryListAPIView.as_view(),
    #     name="liked-story",
    # ),
    # path(
    #     "bookmarked/story/",
    #     views.UserBookmarkedStoryListAPIView.as_view(),
    #     name="bookmarked-story",
    # ),
]
