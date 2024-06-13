from rest_framework.views import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Count
from articles.models import Article
from stories.models import Story
from articles.serializers import ArticleSerializer
from stories.serializers import StorySerializer
from django.db.models import Q
from stories.models import Story
from stories.serializers import StorySerializer
from articles.models import Article
from articles.serializers import ArticleSerializer

ARTICLE_TO_GET = 5
STORY_TO_GET = 5


class MainPageListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class_Article = ArticleSerializer
    serializer_class_Story = StorySerializer

    def get_queryset_Article(self):
        return Article.objects.annotate(
            count=Count("article_marks"), like=Count("article_likes")
        ).order_by("-count", "-like", "-created_at")[:ARTICLE_TO_GET]

    def get_queryset_Story(self):
        return Story.objects.annotate(
            count=Count("story_marks"), like=Count("story_likes")
        ).order_by("-count", "-like", "-created_at")[:STORY_TO_GET]

    def list(self, request, *args, **kwargs):
        article = self.serializer_class_Article(self.get_queryset_Article(), many=True)
        story = self.serializer_class_Story(self.get_queryset_Story(), many=True)
        return Response({"Articles": article.data, "Stories": story.data})
    
class CategoryListView(ListAPIView):
    permission_classes=[AllowAny]
    serializer_class_Article = ArticleSerializer
    serializer_class_Story = StorySerializer

    def get_queryset_Article(self,category):
        return Article.objects.filter(category=category)

    def get_queryset_Story(self,category):
        return Story.objects.filter(category=category)
        
    def list(self, request, category):
        article = self.serializer_class_Article(self.get_queryset_Article(category), many=True)
        story = self.serializer_class_Story(self.get_queryset_Story(category), many=True)
        return Response({"Articles": article.data, "Stories": story.data})
    
@api_view(["GET"])
@permission_classes([AllowAny])
def search_content(request):
    
    query = request.GET.get("query", "")
    stories = []
    articles = []

    if query:
        stories = Story.objects.filter(
            Q(title__icontains=query)
            | Q(content__icontains=query)
        )
        articles = Article.objects.filter(
            Q(title__icontains=query)
            | Q(content__icontains=query)
        )

    story_serializer = StorySerializer(stories, many=True)
    article_serializer = ArticleSerializer(articles, many=True)

    results = {
        "stories": story_serializer.data,
        "articles": article_serializer.data,
    }

    return Response(results)