from django.conf.urls import include, url

urlpatterns = [
    url('^/$', include('api_360_game.urls')),
]