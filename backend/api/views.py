from django.shortcuts import render

from django.views.generic import TemplateView


class ApiView(TemplateView):
    template_name = 'app/apiinfo.html'
