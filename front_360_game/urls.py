from django.conf.urls import include, url
from front_360_game.views import frontendroot_view

urlpatterns = [
    url(r'^$', frontendroot_view, name='index'),

]