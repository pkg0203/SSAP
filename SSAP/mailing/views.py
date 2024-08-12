from allauth.account.models import EmailConfirmation, EmailConfirmationHMAC
from django.http import HttpResponseRedirect
from rest_framework.exceptions import NotFound
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.models import User

class UserActivateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, uid, token):
        try:
            real_uid = force_str(urlsafe_base64_decode(uid))
            print(real_uid)
            user = User.objects.get(pk=real_uid)
            if user is not None:
                payload = jwt_decode_handler(token)
                user_id = jwt_payload_get_user_id_handler(payload)
                print(type(user))
                print(type(user_id))
                if int(real_uid) == int(user_id):
                    user.is_active = True
                    user.save()
                    return Response(
                        user.email + "계정이 활성화 되었습니다",
                        status=status.HTTP_200_OK,
                    )
                return Response(
                    "인증에 실패하였습니다", status=status.HTTP_400_BAD_REQUEST
                )
            else:
                return Response(
                    "인증에 실패하였습니다", status=status.HTTP_400_BAD_REQUEST
                )

        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
            print(traceback.format_exc())
            return Response("인증에 실패하였습니다", status=status.HTTP_400_BAD_REQUEST)
