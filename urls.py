from django.conf.urls import include, url
from django.contrib import admin



urlpatterns = [
    url(r'^api/', include('api_360_game.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^', include('front_360_game.urls')),

]