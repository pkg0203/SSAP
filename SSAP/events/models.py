from django.db import models
from django.conf import settings
# Create your models here.
class Event(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=100)
    content = models.TextField()
    start_at = models.DateField()
    end_at = models.DateField()