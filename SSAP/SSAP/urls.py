from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('ssap/',views.MainPageListView.as_view()),
    path("ssap/accounts/", include("dj_rest_auth.urls")),
    path("ssap/accounts/registration/", include("dj_rest_auth.registration.urls")),
    path("ssap/accounts/", include("accounts.urls")),
    path("ssap/accounts/", include("allauth.urls")),
    path("ssap/articles/", include("articles.urls")),
    path("ssap/comments/", include("comments.urls")),
    path("ssap/events/", include("events.urls")),
    path("ssap/stories/", include("stories.urls")),
    # 이 url은 맨 아래에 위치하도록
    path("", include("frontend.urls")),
]
