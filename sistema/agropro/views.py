from django.http import HttpResponse
from django.shortcuts import render
from .models import *
# Create your views here.

def index(request):
    return render(request, 'paginas/index.html')

def ingresar(request):
    return render(request, 'paginas/ingresar.html')

def perfil(request):
    agricultor = Agricultor.objects.all()
    cultivo = Cultivo.objects.all()
    ubicacion = Ubicacion.objects.all()
    print(agricultor)
    return render(request, 'paginas/perfil.html', {'agricultor': agricultor, 'cultivo': cultivo, 'ubicacion': ubicacion})

def datosMeteorologicos(request):
    return render(request, 'paginas/datosMeteorologicos.html')

def recomendaciones(request):
    return render(request, 'paginas/recomendaciones.html')

def reportes(request):
    return render(request, 'paginas/reportes.html')

def registro(request):
    return render(request, 'paginas/registro.html')