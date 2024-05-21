from django.contrib import admin
from django.urls import path
from . import views

app_name = "articles"
urlpatterns = [
    path("", views.ArticleListAPIView.as_view(), name="article_list"),
    path("<int:pk>/", views.ArticleDetailAPIView.as_view(), name="article_detail"),
    path("like/<int:pk>/", views.ArticleLikeAPIView.as_view(), name="article_like"),
    path(
        "bookmark/<int:pk>/",
        views.ArticleBookmarkAPIView.as_view(),
        name="article_bookmark",
    ),
]
