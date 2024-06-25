from django.contrib import admin
from .models import Article_Comment, Story_Comment

admin.site.register(Article_Comment)
admin.site.register(Story_Comment)

