from django.db import models

class PreoccupationEnvironnementale(models.Model):
    nom = models.CharField(max_length=255)
    pourcentage_repondants = models.FloatField()
    nombre_repondants = models.IntegerField()

class TemperatureTerrestre(models.Model):
    annee = models.IntegerField()
    ecart = models.FloatField()

    def __str__(self):
        return f"{self.annee} : {self.ecart}°C"
    
class TemperatureOcean(models.Model):
    annee = models.IntegerField()
    ecart = models.FloatField()

    def __str__(self):
        return f"{self.annee} : {self.ecart}°C"

class NiveauOcean(models.Model):
    annee = models.IntegerField()
    niveau = models.FloatField()

    def __str__(self):
        return f"{self.annee} : {self.niveau} cm"