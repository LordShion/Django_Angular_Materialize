from django.conf.urls import include, url
from . import views

urlpatterns = [
    url('^login/', views.login, name='api.login')

]