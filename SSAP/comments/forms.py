from django import forms
from .models import Article_Comment


class CommentsForm(forms.ModelForm):
    content = forms.CharField()

    class Meta:
        model = Article_Comment
        fields = [
            "content",
        ]
