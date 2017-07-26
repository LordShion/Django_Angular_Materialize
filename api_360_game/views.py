import types
from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST, require_GET


# Create your views here.
@require_POST
def login(request):
    print("connecting.......................")

# render(request, 'visual_cloud_front_end:home',{'logged':True})
