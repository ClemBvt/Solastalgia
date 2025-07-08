import pandas as pd
from app.models import AnimalMenace

def run():
    df = pd.read_excel("import_data/excel_files/nombres_animaux_menaces.xlsx", sheet_name="Donnée", header=None)

    # Extraire les lignes 6+ (index 5) avec colonnes Espèces / Nombres
    df = df.iloc[6:, [1, 2]]
    df.columns = ['nom', 'nombre_restant']
    df = df.dropna()
    df['nombre_restant'] = df['nombre_restant'].astype(int)

    for _, row in df.iterrows():
        AnimalMenace.objects.create(
            nom=row['nom'],
            nombre_restant=row['nombre_restant']
        )

    print("✅ Import des animaux menacés terminé.")
