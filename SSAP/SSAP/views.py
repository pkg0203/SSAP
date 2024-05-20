from rest_framework.decorators import api_view
from articles.models import Article
from stories.models import Story

@api_view(["GET"])
def index(request):
    recs_articles = Article.objects.all()
    recs_stories = Story.objects.all()