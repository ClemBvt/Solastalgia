import pandas as pd
from app.models import TemperatureOcean

def run():
    TemperatureOcean.objects.all().delete() 

    df = pd.read_excel("import_data/excel_files/temperatures_oceans.xlsx", sheet_name="Donnée")
    
    df = df.iloc[6:, [1, 2]]

    df.columns = ['annee', 'ecart']

    df = df.dropna()

    df['annee'] = df['annee'].astype(int)
    df['ecart'] = df['ecart'].astype(float)

    for _, row in df.iterrows():
        TemperatureOcean.objects.create(
            annee=row['annee'],
            ecart=row['ecart']
        )

    print("Import des températures océaniques terminé.")
