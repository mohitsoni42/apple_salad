from django.shortcuts import render, redirect
from .models import Score

# Create your views here.

def game(request):
    return render(request, 'game/game.html')