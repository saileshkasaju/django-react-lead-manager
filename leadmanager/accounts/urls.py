from django.urls import path, include
from knox import views as knox_views
from .api import RegisterAPI

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view())
]