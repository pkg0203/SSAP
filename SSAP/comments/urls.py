from django.urls import path
from . import views

app_name = "comments"
urlpatterns = [
    path("article/<int:pk>/", views.ArticleCommentAPIView.as_view()),
    path("article/<int:pk>/<int:comment_pk>/", views.ArticleCommentAPIView.as_view()),
    path("stories/<int:pk>/", views.StoryCommentAPIView.as_view()),
    path("stories/<int:pk>/<int:comment_pk>/", views.StoryCommentAPIView.as_view()),
]
