from django.urls import path
from . import views

app_name = "comments"
urlpatterns = [
    path("article/<int:pk>/", views.ArticleCommentAPIView.as_view()),
    path(
        "article/<int:pk>/comment_at/<int:comment_pk>/",
        views.ArticleReCommentAPIView.as_view(),
    ),
    path("stories/<int:pk>/", views.StoryCommentAPIView.as_view()),
    path(
        "stories/<int:pk>/comment_at/<int:comment_pk>/",
        views.StoryReCommentAPIView.as_view(),
    ),
]
