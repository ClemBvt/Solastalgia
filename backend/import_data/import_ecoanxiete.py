import pandas as pd
from app.models import PreoccupationEnvironnementale

def run():
    # Lecture du fichier Excel complet
    df = pd.read_excel("import_data/excel_files/src_ecoanxiete.xlsx", header=None)

    # Garder uniquement les lignes à partir de l'index 5 (lignes utiles)
    df = df.iloc[5:]

    # Garde seulement les colonnes utiles : 1 (nom), 2 (proportion), 3 (nombre)
    df = df[[1, 2, 3]]

    # Renomme les colonnes pour correspondre au modèle Django
    df.columns = ['probleme', 'proportion', 'total']

    # Nettoyage des lignes vides
    df = df.dropna()

    # Conversion des types
    df['proportion'] = df['proportion'].astype(float)
    df['total'] = df['total'].astype(int)

    # Insertion dans la base
    for _, row in df.iterrows():
        PreoccupationEnvironnementale.objects.create(
            nom=row['probleme'],
            pourcentage_repondants=row['proportion'],
            nombre_repondants=row['total']
        )

    print("✅ Import ecoanxiete terminé.")
