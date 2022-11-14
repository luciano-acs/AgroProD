from django.contrib import admin
from .models import Agricultor, Experto, Usuario, Cultivo, Ubicacion, Recomendacion, LineaConsulta, Aporte
# Register your models here.
admin.site.register(Agricultor)
admin.site.register(Experto)
admin.site.register(Usuario)
admin.site.register(Cultivo)
admin.site.register(Ubicacion)
admin.site.register(Recomendacion)
admin.site.register(LineaConsulta)
admin.site.register(Aporte)
