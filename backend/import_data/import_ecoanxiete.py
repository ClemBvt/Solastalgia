import pandas as pd
from app.models import PreoccupationEnvironnementale

def run():
    PreoccupationEnvironnementale.objects.all().delete()

    df = pd.read_excel("import_data/excel_files/src_ecoanxiete.xlsx", header=None)

    df = df.iloc[5:]

    df = df[[1, 2, 3]]

    df.columns = ['probleme', 'proportion', 'total']

    df = df.dropna()

    df['proportion'] = df['proportion'].astype(float)
    df['total'] = df['total'].astype(int)

    for _, row in df.iterrows():
        PreoccupationEnvironnementale.objects.create(
            nom=row['probleme'],
            pourcentage_repondants=row['proportion'],
            nombre_repondants=row['total']
        )

    print("Import ecoanxiete terminé.")
