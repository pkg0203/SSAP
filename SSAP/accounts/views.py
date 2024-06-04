import requests
from django.shortcuts import redirect
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.http import JsonResponse
from json.decoder import JSONDecodeError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.views import APIView
from rest_framework.response import Response
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google import views as google_view
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from allauth.socialaccount.models import SocialAccount


from .models import User
from .serializers import UserSerializer
from articles.models import *
from articles.serializers import ArticleSerializer
from stories.models import *
from stories.serializers import StorySerializer
from comments.models import *
from comments.serializers import *

from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .permissions import IsSelfOrReadOnly
from rest_framework.permissions import IsAuthenticated

BASE_URL = "http://127.0.0.1:8000/"
GOOGLE_CALLBACK_URI = BASE_URL + "ssap/accounts/google/callback/"

state = getattr(settings, "STATE")


def google_login(request):
    """
    Code Request : 우리 서비스를 위한 google login 페이지로 redirect
    """
    scope = "https://www.googleapis.com/auth/userinfo.email"
    client_id = getattr(settings, "SOCIAL_AUTH_GOOGLE_CLIENT_ID")
    return redirect(
        f"https://accounts.google.com/o/oauth2/v2/auth?client_id={client_id}&response_type=code&redirect_uri={GOOGLE_CALLBACK_URI}&scope={scope}"
    )


def google_callback(request):
    client_id = getattr(settings, "SOCIAL_AUTH_GOOGLE_CLIENT_ID")
    client_secret = getattr(settings, "SOCIAL_AUTH_GOOGLE_SECRET")
    code = request.GET.get("code")

    # 1. 받은 코드로 구글에 access token 요청
    token_req = requests.post(
        f"https://oauth2.googleapis.com/token?client_id={client_id}&client_secret={client_secret}&code={code}&grant_type=authorization_code&redirect_uri={GOOGLE_CALLBACK_URI}&state={state}"
    )

    ### 1-1. json으로 변환 & 에러 부분 파싱
    token_req_json = token_req.json()
    error = token_req_json.get("error")

    ### 1-2. 에러 발생 시 종료
    if error is not None:
        raise JSONDecodeError(error)

    ### 1-3. 성공 시 access_token 가져오기
    access_token = token_req_json.get("access_token")

    # 2. 가져온 access_token으로 이메일값을 구글에 요청
    email_req = requests.get(
        f"https://www.googleapis.com/oauth2/v1/tokeninfo?access_token={access_token}"
    )
    email_req_status = email_req.status_code

    ### 2-1. 에러 발생 시 400 에러 반환
    if email_req_status != 200:
        return JsonResponse(
            {"err_msg": "failed to get email"}, status=status.HTTP_400_BAD_REQUEST
        )

    ### 2-2. 성공 시 이메일 가져오기
    email_req_json = email_req.json()
    email = email_req_json.get("email")

    # return JsonResponse({'access': access_token, 'email':email}) # 여기까지 정상 동작 확인 / google 에서 user의 access_token과 email 을 받아와서 json 으로 return

    # 3. 전달받은 email, access_token, code를 바탕으로 회원가입/로그인
    try:
        # 전달받은 이메일로 등록된 유저가 있는지 탐색
        user = User.objects.get(email=email)

        # FK로 연결되어 있는 SocialAccount 테이블에서 해당 이메일의 유저가 있는지 확인
        social_user = SocialAccount.objects.get(user=user)

        # 있는데 구글계정이 아니어도 에러
        if social_user.provider != "google":
            return JsonResponse(
                {"err_msg": "no matching social type"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # 이미 Google로 제대로 가입된 유저 => 로그인 & 해당 우저의 jwt 발급
        data = {"access_token": access_token, "code": code}
        accept = requests.post(
            f"{BASE_URL}ssap/accounts/google/login/finish/", data=data
        )
        accept_status = accept.status_code

        # 뭔가 중간에 문제가 생기면 에러
        if accept_status != 200:
            return JsonResponse({"err_msg": "failed to signin"}, status=accept_status)

        accept_json = accept.json()
        accept_json.pop("user", None)
        return JsonResponse(accept_json)

    except User.DoesNotExist:  # DoesNotExist -> Django Model에서 기본 지원
        # 전달받은 이메일로 기존에 가입된 유저가 아예 없으면 => 새로 회원가입 & 해당 유저의 jwt 발급
        data = {"access_token": access_token, "code": code}
        accept = requests.post(
            f"{BASE_URL}ssap/accounts/google/login/finish/", json=data
        )
        accept_status = accept.status_code
        # 뭔가 중간에 문제가 생기면 에러
        if accept_status != 200:
            return JsonResponse({"err_msg": "failed to signup"}, status=accept_status)

        accept_json = accept.json()
        accept_json.pop("user", None)
        return JsonResponse(accept_json)

    except SocialAccount.DoesNotExist:
        # User는 있는데 SocialAccount가 없을 때 (=일반회원으로 가입된 이메일일때)
        return JsonResponse(
            {"err_msg": "email exists but not social user"},
            status=status.HTTP_400_BAD_REQUEST,
        )


# Google social login view
class GoogleLogin(SocialLoginView):
    adapter_class = google_view.GoogleOAuth2Adapter
    callback_url = GOOGLE_CALLBACK_URI
    client_class = OAuth2Client


class LikedArticle(APIView):
    def get(self, request, username):
        user = get_object_or_404(get_user_model(), username=username)
        likedarticle = Article.objects.filter(article_likes__user=user)
        serializer = ArticleSerializer(likedarticle, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MarkedArticle(APIView):
    def get(self, request, username):
        user = get_object_or_404(get_user_model(), username=username)
        if request.user == user:
            markedarticle = Article.objects.filter(article_marks__user=user)
            serializer = ArticleSerializer(markedarticle, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"본인만 볼 수 있습니다."}, status=status.HTTP_401_UNAUTHORIZED)


class LikedStory(APIView):
    def get(self, request, username):
        user = get_object_or_404(get_user_model(), username=username)
        likedstory = Story.objects.filter(story_likes__user=user)
        serializer = StorySerializer(likedstory, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MarkedStory(APIView):
    def get(self, request, username):
        user = get_object_or_404(get_user_model(), username=username)
        if request.user == user:
            markedstory = Story.objects.filter(story_marks__user=user)
            serializer = StorySerializer(markedstory, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"본인만 볼 수 있습니다."}, status=status.HTTP_401_UNAUTHORIZED)


class UserProfileAPIView(APIView):
    permission_classes = [IsSelfOrReadOnly]

    def get(self, request, username):
        user = get_object_or_404(get_user_model(), username=username)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def put(self, request, username):
        user = get_object_or_404(User, username=username)
        serializer = UserSerializer(instance=user, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(data=serializer.data)

    def delete(self, request, username):
        user = get_object_or_404(User, username=username)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserCommentsAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]
    # 대댓글을 가져오지 않는 새로운 serializer가 필요함
    serializer_class_Article = ArticleCommentGetSerializer
    serializer_class_Story = StoryCommentGetSerializer

    def get_queryset_Article(self, request):
        return Article_Comment.objects.filter(user=request.user).order_by("-pk")

    def get_queryset_Story(self, request):
        return Story_Comment.objects.filter(user=request.user).order_by("-pk")

    def list(self, request, *args, **kwargs):
        article_comments = self.serializer_class_Article(
            self.get_queryset_Article(request), many=True
        )
        story_comments = self.serializer_class_Story(
            self.get_queryset_Story(request), many=True
        )
        return Response(
            {
                "Article_Comments": article_comments.data,
                "Story_Comments": story_comments.data,
            }
        )
