import types
import json
from django.contrib.auth import authenticate, logout, login
from django.shortcuts import render

from django.http import HttpResponse
from django.views.decorators.http import require_POST


def csrf_view(request):
    return render(request, 'csrf.html', {})

@require_POST
def login_view(request):
    if not request.user.is_authenticated():
        request.POST = json.loads(request.body)
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            data = {
                    'logged': True,
                }
            return HttpResponse(json.dumps(data), content_type='application/json', status=200)
        else:
            data = {
                    'logged': False
                }
            return HttpResponse(json.dumps(data), content_type='application/json', status=403)
    else:
        data = {
            'logged': True,
        }
        return HttpResponse(json.dumps(data), content_type='application/json', status=200)

def logout_view(request):
    logout(request)
    data = {
            'logged': False
        }
    return HttpResponse(json.dumps(data), content_type='application/json', status=200)


def details_view(request):

    if request.user.is_authenticated():
        data = {
            'username': request.user.username,
            'first_name': request.user.first_name,
            'email': request.user.email
        }
        return HttpResponse(json.dumps(data), content_type='application/json', status=200)
    else:
        data = {
            'username': None,
            'first_name': None,
            'email': None
        }
        return HttpResponse(json.dumps(data), content_type='application/json', status=403)