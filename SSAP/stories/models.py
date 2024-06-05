from django.db import models
from django.conf import settings


# Create your models here.
class Story(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    img = models.ImageField(blank=True)
    category = models.CharField(max_length=30)
    points = models.PositiveIntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def story_comments(self):
        return self.story_comment_set.all()


class StoryLike(models.Model):
    story = models.ForeignKey(
        Story, on_delete=models.CASCADE, related_name="story_likes"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="liked_story"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class StoryBookmark(models.Model):
    story = models.ForeignKey(
        Story, on_delete=models.CASCADE, related_name="story_marks"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="marked_story"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
