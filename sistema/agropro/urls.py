from django.urls import path
from . import views

from django.conf import settings
from django.contrib.staticfiles.urls import static

urlpatterns = [
    path('', views.index, name='index'),
    path('ingresar', views.ingresar, name='ingresar'),
    path('perfil', views.perfil, name='perfil'),
    path('datosMeteorologicos', views.datosMeteorologicos, name='datosMeteorologicos'),
    path('recomendaciones', views.recomendaciones, name='recomendaciones'),
    path('reportes', views.reportes, name='reportes'),
    path('registro', views.registro, name='registro'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

