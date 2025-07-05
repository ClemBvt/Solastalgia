from django.http import JsonResponse
from .models import PreoccupationEnvironnementale

def preoccupations_json(request):
    data = list(PreoccupationEnvironnementale.objects.values())
    return JsonResponse(data, safe=False)