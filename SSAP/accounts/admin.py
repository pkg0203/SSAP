from django.contrib import admin
<<<<<<< HEAD

# Register your models here.
=======
from rest_framework_simplejwt.token_blacklist.admin import \
    OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken

from .models import User


class CustomOutstandingTokenAdmin(OutstandingTokenAdmin):
    def has_delete_permission(self, *args, **kwargs):
        return True


admin.site.unregister(OutstandingToken)
admin.site.register(User)
>>>>>>> af089218a4d7ad9dad26105b63869871f23f5668
