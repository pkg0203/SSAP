from django.contrib import admin
from .models import Article, ArticleLike, ArticleBookmark

admin.site.register(Article)
admin.site.register(ArticleLike)
admin.site.register(ArticleBookmark)
