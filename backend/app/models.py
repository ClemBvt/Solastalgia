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
    
class SourceEmissionGES(models.Model):
    source = models.CharField(max_length=255)
    annee = models.IntegerField()
    co2 = models.FloatField()
    ch4 = models.FloatField()
    n2o = models.FloatField()
    gaz_fluores = models.FloatField()
    total = models.FloatField()

    def __str__(self):
        return f"{self.source} ({self.annee})"

class EspeceMenacee(models.Model):
    nom = models.CharField(max_length=255)
    part_menacee = models.FloatField()
    type = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.nom} ({self.type}) - {self.part_menacee * 100:.1f}%"
