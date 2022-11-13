from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'paginas/index.html')

def ingresar(request):
    return render(request, 'paginas/ingresar.html')

def perfil(request):
    return render(request, 'paginas/perfil.html')

def datosMeteorologicos(request):
    return render(request, 'paginas/datosMeteorologicos.html')

def recomendaciones(request):
    return render(request, 'paginas/recomendaciones.html')

def reportes(request):
    return render(request, 'paginas/reportes.html')

def registro(request):
    return render(request, 'paginas/registro.html')