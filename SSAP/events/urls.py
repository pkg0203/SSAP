from django.urls import path
from .views import *

urlpatterns=[
    path('',EventAPIView.as_view())
]