import types
import json

from django.http import HttpResponse



# Create your views here.
# @require_POST
def login(request):
    print("connecting.......................")
    data = {
        'logged': True
    }
    return HttpResponse(json.dumps(data), content_type='application/json', status=200)
