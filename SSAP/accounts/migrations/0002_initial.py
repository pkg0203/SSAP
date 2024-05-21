# Generated by Django 4.2 on 2024-05-20 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stories', '0001_initial'),
        ('accounts', '0001_initial'),
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='bookmark_article',
            field=models.ManyToManyField(related_name='bookmarked', to='articles.article'),
        ),
        migrations.AddField(
            model_name='user',
            name='bookmark_story',
            field=models.ManyToManyField(related_name='bookmarked', to='stories.story'),
        ),
        migrations.AddField(
            model_name='user',
            name='like_article',
            field=models.ManyToManyField(related_name='liked', to='articles.article'),
        ),
        migrations.AddField(
            model_name='user',
            name='like_story',
            field=models.ManyToManyField(related_name='liked', to='stories.story'),
        ),
    ]
