from django.urls import path
from . import views

app_name = "comments"
urlpatterns = [
    path("articles/<int:pk>", views.ArticleCommentAPIView.as_view()),
    path("articles/<int:comment_pk>", views.ArticleCommentAPIView.as_view()),
    path("stories/<int:pk>", views.StoryCommentAPIView.as_view()),
    path("stories/<int:comment_pk>", views.StoryCommentAPIView.as_view()),
]
