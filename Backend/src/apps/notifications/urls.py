from django.urls import path
from src.apps.notifications.views import NotiUser,OnlyAdmin

urlpatterns = [
    path('noti', NotiUser.as_view( {'get': 'getNotiUsr'})),
    path('anoti', OnlyAdmin.as_view( {'get': 'getNotis', 'post': 'createNoti'})),
]
