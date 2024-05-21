from rest_framework import serializers
from articles.serializers import ArticleSerializer
#from stories.serializer import StorySerializer

class MainPageSerializer(serializers.ModelSerializer):
    articles = ArticleSerializer(many=True, read_only=True)
    #stories = StorySerializer(many=True, read_only=True)