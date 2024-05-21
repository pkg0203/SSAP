from django.contrib import admin
from django.urls import path
from . import views

app_name = "stories"
urlpatterns = [
    path("", views.StoryListAPIView.as_view(), name="story_list"),
    path("<int:pk>/", views.StoryDetailAPIView.as_view(), name="story_detail"),
    path("like/<int:pk>/", views.StoryLikeAPIView.as_view(), name="story_like"),
    path(
        "bookmark/<int:pk>/",
        views.StoryBookmarkAPIView.as_view(),
        name="story_bookmark",
    ),
]