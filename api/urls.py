from django.conf.urls import include, url
from . import views

urlpatterns = [
    url('^user/details/', views.details_view, name='api.login'),
    url('^user/login/', views.login_view, name='api.login'),
    url('^user/logout/', views.logout_view, name='api.logout'),
    url('^csrf/', views.csrf_view, name='api.csrf')

]