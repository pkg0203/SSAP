from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

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
    path("ssap/ai/", include("ai_tools.urls")),   
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)