from django.contrib import admin

<<<<<<< HEAD
from .models import Article, ArticleLike, ArticleBookmark

=======
from .models import Article
>>>>>>> af089218a4d7ad9dad26105b63869871f23f5668

admin.site.register(Article)
admin.site.register(ArticleLike)
admin.site.register(ArticleBookmark)
