from django.shortcuts import render

# Create your views here.
def frontendroot_view(request):
    context = {

    }
    return render(request, "front_360_game/index.html", context)