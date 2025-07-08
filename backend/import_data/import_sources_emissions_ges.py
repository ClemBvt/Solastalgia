import pandas as pd
from app.models import SourceEmissionGES

def run():
    SourceEmissionGES.objects.all().delete()
    
    df = pd.read_excel("import_data/excel_files/sources_emissions_ges.xlsx", header=None)

    df.columns = df.iloc[3]
    df = df.iloc[4:]

    df = df[['Source', 'Années', 'CO2', 'CH4', 'N2O', 'Gaz fluorés', 'Total']]
    df = df.dropna()

    df.rename(columns={
        'Source': 'source',
        'Années': 'annee',
        'Gaz fluorés': 'gaz_fluores'
    }, inplace=True)

    df['annee'] = df['annee'].astype(int)

    for _, row in df.iterrows():
        SourceEmissionGES.objects.create(
            source=row['source'],
            annee=row['annee'],
            co2=row['CO2'],
            ch4=row['CH4'],
            n2o=row['N2O'],
            gaz_fluores=row['gaz_fluores'],
            total=row['Total']
        )

    print("Import des sources d'émissions GES terminé.")
