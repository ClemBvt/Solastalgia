import pandas as pd
from app.models import TemperatureTerrestre

def run():
    df = pd.read_excel("import_data/excel_files/temperatures_terrestres.xlsx", sheet_name="Donnée")

    df = df.iloc[5:, [1, 2]]
    df.columns = ['annee', 'ecart']
    df = df.dropna()

    # Conversion des types
    df['annee'] = df['annee'].astype(int)
    df['ecart'] = df['ecart'].astype(float)

    for _, row in df.iterrows():
        TemperatureTerrestre.objects.create(
            annee=row['annee'],
            ecart=row['ecart']
        )

    print("✅ Import des températures terrestres terminé.")
