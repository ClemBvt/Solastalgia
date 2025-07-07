import pandas as pd
from app.models import NiveauOcean

def run():
    df = pd.read_excel("import_data/excel_files/niveaux_oceans.xlsx")
    df = df.iloc[0:2, 6:37]
    df = df.transpose()
    df.columns = ['annee', 'niveau']
    df = df.dropna()
    df['annee'] = df['annee'].astype(int)
    df['niveau'] = df['niveau'].astype(float)

    for _, row in df.iterrows():
        NiveauOcean.objects.create(
            annee=row['annee'],
            niveau=row['niveau']
        )

    print("✅ Import des niveaux océaniques terminé.")
