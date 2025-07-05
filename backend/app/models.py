from django.db import models

class PreoccupationEnvironnementale(models.Model):
    nom = models.CharField(max_length=255)
    pourcentage_repondants = models.FloatField()
    nombre_repondants = models.IntegerField()