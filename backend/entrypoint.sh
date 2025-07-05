#!/bin/sh

# Fonction d'attente de la base de données MySQL (port 3306 sur host 'db')
echo "⏳ Attente de la base de données (db:3306)..."

while ! python -c "import socket; s = socket.socket(); s.connect(('db', 3306))" 2>/dev/null; do
  echo "⏳ Base de données pas encore prête, on attend..."
  sleep 1
done

echo "✅ Base de données prête."

# Migrations Django
python manage.py makemigrations --noinput
python manage.py migrate --noinput

# Import de données (peut échouer si déjà fait)
python manage.py run_imports || echo "⚠️ Import ignoré ou déjà effectué."

# Lancer le serveur Django
exec python manage.py runserver 0.0.0.0:8000
