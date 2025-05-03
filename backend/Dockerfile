# Utilise une image Python comme base
FROM python:3.10-slim

# Installe les dépendances système nécessaires
RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    pkg-config \
    && apt-get clean

# Configure le répertoire de travail
WORKDIR /app

# Copie les fichiers de l'application
COPY requirements.txt .

# Installe les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copie le reste du code de l'application
COPY . .

# Commande par défaut
CMD ["python", "manage.py", "runserver"]
