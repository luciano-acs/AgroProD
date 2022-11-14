from django.db import models

# Create your models here.

class Agricultor(models.Model):
    dni = models.CharField(max_length=8, primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    experto = models.ForeignKey('Experto', on_delete=models.CASCADE)

    class meta:
        verbose_name = "Agricultor"
        verbose_name_plural = "Agricultores"
        ordering = ['apellido']

class Experto(models.Model):
    idExperto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)

    class meta:
        verbose_name = "Experto"
        verbose_name_plural = "Expertos"
        ordering = ['apellido']

class Usuario(models.Model):
    idUsuario = models.AutoField(primary_key=True)
    usuario = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    class meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"
        ordering = ['idUsuario']

class Cultivo(models.Model):
    idCultivo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    agricultor = models.ForeignKey('Agricultor', on_delete=models.CASCADE)

    class meta:
        verbose_name = "Cultivo"
        verbose_name_plural = "Cultivos"
        ordering = ['nombre']

class Ubicacion(models.Model):
    idUbicacion = models.AutoField(primary_key=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=8)
    longitud = models.DecimalField(max_digits=11, decimal_places=8)
    cultivo = models.ForeignKey('Cultivo', on_delete=models.CASCADE)

    class meta:
        verbose_name = "Ubicacion"
        verbose_name_plural = "Ubicaciones"
        ordering = ['idUbicacion']

class Recomendacion(models.Model):
    idRecomendacion = models.AutoField(primary_key=True)
    fecha = models.DateField()
    descripcion = models.CharField(max_length=50)
    agricultor = models.ForeignKey('Agricultor', on_delete=models.CASCADE)
    aporte = models.ForeignKey('Aporte', on_delete=models.CASCADE)
    lineaConsulta = models.ForeignKey('LineaConsulta', on_delete=models.CASCADE)

    class meta:
        verbose_name = "Recomendacion"
        verbose_name_plural = "Recomendaciones"
        ordering = ['idRecomendacion']

class Aporte(models.Model):
    idAporte = models.AutoField(primary_key=True)
    fecha = models.DateField()
    descripcion = models.CharField(max_length=50)
    experto = models.ForeignKey('Experto', on_delete=models.CASCADE)

    class meta:
        verbose_name = "Aporte"
        verbose_name_plural = "Aportes"
        ordering = ['idAporte']

class LineaConsulta(models.Model):
    idLineaConsulta = models.AutoField(primary_key=True)
    fecha = models.DateField()
    consulta = models.CharField(max_length=50)
    agricultor = models.ForeignKey('Agricultor', on_delete=models.CASCADE)

    class meta:
        verbose_name = "LineaConsulta"
        verbose_name_plural = "LineasConsulta"
        ordering = ['idLineaConsulta']