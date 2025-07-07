from django.core.management.base import BaseCommand
from import_data import import_ecoanxiete, import_temperatures_terrestres

class Command(BaseCommand):
    help = 'Importe toutes les données depuis les fichiers Excel'

    def handle(self, *args, **options):
        print("📥 Import des données depuis les fichiers Excel...")
        import_ecoanxiete.run()
        import_temperatures_terrestres.run()
        print("✅ Tous les imports sont terminés.")
