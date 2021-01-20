from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.utils import timezone
from django.views import generic
from django.views.generic import TemplateView


# Create your views here.

class IndexView(TemplateView):
    template_name = 'app/index.html'
    context_object_name = 'latest_question_list'


class ApiView(TemplateView):
    template_name = 'app/apiinfo.html'
