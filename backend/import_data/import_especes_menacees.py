import pandas as pd
from app.models import EspeceMenacee

def run():
    EspeceMenacee.objects.all().delete()

    df = pd.read_excel("import_data/excel_files/especes_menacees.xlsx", header=None)

    df = df.iloc[7:, [1, 2, 3]]
    df.columns = ['nom', 'part_menacee', 'type']
    df = df.dropna()

    df['part_menacee'] = df['part_menacee'].astype(float)

    for _, row in df.iterrows():
        EspeceMenacee.objects.create(
            nom=row['nom'],
            part_menacee=row['part_menacee'],
            type=row['type']
        )

    print("Import des espèces menacées détaillées terminé.")
