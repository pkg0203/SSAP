from django.db import models
from django.conf import settings

# Create your models here.
class Article(models.Model):
    director = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    img = models.ImageField(blank=True)
    category = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    @property
    def article_comments(self):
        return self.comments.all()
    
    @property
    def get_image_url(self) -> str:
      if self.img and hasattr(self.img, 'url'):
         return f"http://localhost:8000{self.img}"


class ArticleLike(models.Model):
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name="article_likes"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="liked_article"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ArticleBookmark(models.Model):
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name="article_marks"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="marked_article",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
