from rest_framework import permissions


class IsSelfOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # 읽기 권한 요청이 들어오면 허용
        if request.method in permissions.SAFE_METHODS:
            return True

        # 그외의 메소드에 대해서는 본인인 경우만 허용
        return request.user==obj.user
