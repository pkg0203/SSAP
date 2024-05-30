from django.urls import path
from . import views

app_name = "comments"
urlpatterns = [
    path("article/<int:pk>/", views.ArticleCommentAPIView.as_view()),
    path(
        "article/comment_at/<int:comment_pk>/",
        views.ArticleReCommentAPIView.as_view(),
    ),
    path("story/<int:pk>/", views.StoryCommentAPIView.as_view()),
    path(
        "story/comment_at/<int:comment_pk>/",
        views.StoryReCommentAPIView.as_view(),
    ),
]
