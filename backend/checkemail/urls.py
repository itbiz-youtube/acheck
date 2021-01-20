from django.urls import path, re_path
from django.views.generic import TemplateView

from . import views

app_name = 'app'

urlpatterns = [
    path('', views.CheckEmail.as_view(), name='index'),
]
