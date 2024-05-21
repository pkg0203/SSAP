from rest_framework.decorators import api_view
from rest_framework.views import Response
from django.db.models import Count
from articles.models import Article
from stories.models import Story

ARTICLE_TO_GET = 5
STORY_TO_GET = 5

@api_view(["GET"])
def index(request):
    recs_articles = Article.objects.annotate(
        count=Count("bookmarked"), 
        like=Count("liked")
    ).order_by("-count","-liked","-created_at")[:ARTICLE_TO_GET]
    
    recs_stories = Story.objects.annotate(
        count=Count("bookmarked"), 
        like=Count("liked")
    ).order_by("-count","-liked","-created_at")[:STORY_TO_GET]
    return Response({})