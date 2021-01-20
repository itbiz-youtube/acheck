from django.core import management

from acheck import celery_app


@celery_app.task
def clearsessions():
    management.call_command('clearsessions')
