# 🌍 Solastalgia — Plateforme d'observation environnementale

Solastalgia est une application web complète développée avec **Django**, **MySQL**, **React** et **Docker**.  
Elle permet d'importer automatiquement des fichiers Excel contenant des données environnementales, de les stocker en base, puis de les afficher dans une interface web.

---

## ⚙️ Technologies utilisées

- 🔙 **Django** (Backend Python)
- 🐬 **MySQL** (Base de données relationnelle)
- ⚛️ **React** (Frontend JavaScript)
- 🐳 **Docker & Docker Compose** (Orchestration)
- 📊 **Pandas** (import et traitement des fichiers Excel)
- 🧰 **django-cors-headers** (CORS entre React et Django)

---

## 🧱 Architecture

```
docker-compose.yml
├── backend/
│   ├── app/ (application Django)
│   ├── import_data/
│   │   ├── import_ecoanxiete.py
│   │   ├── run_imports.py
│   │   └── excel_files/
│   │       └── src_ecoanxiete.xlsx
│   ├── entrypoint.sh
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Preoccupations.js
│   │   └── App.js
│   ├── Dockerfile
│   └── .dockerignore
```

---

## 🚀 Lancement du projet

### 1. Cloner le repo et placer les fichiers Excel dans :
```
backend/import_data/excel_files/
```

### 2. Lancer l'application

```bash
docker-compose down -v           # Nettoyage total
docker-compose build --no-cache  # Rebuild complet
docker-compose up                # Lancement
```

---

## ✅ Fonctionnalités automatisées

- Lancement automatique de MySQL
- Attente active de MySQL par Django
- Migrations Django automatiques
- Import automatique du fichier `src_ecoanxiete.xlsx`
- Exposition de l’API sur `http://localhost:8000/api/preoccupations/`
- Affichage dynamique dans React (`http://localhost:3000`)

---

## 🌐 Accès

- Interface API : [http://localhost:8000/api/preoccupations/](http://localhost:8000/api/preoccupations/)
- Interface utilisateur (React) : [http://localhost:3000](http://localhost:3000)

---

## 📦 Exemple de composant React

```jsx
useEffect(() => {
  fetch("http://localhost:8000/api/preoccupations/")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

---

## 🧪 Débogage

- Voir les logs backend : `docker-compose logs backend`
- Accéder au conteneur Django : `docker-compose exec backend sh`
- Tester l'import : `docker-compose exec backend python manage.py run_imports`

---

## 📌 À venir

- Importation d'autres fichiers Excel (températures, niveaux océans, espèces menacées…)
- Ajout de graphiques (Chart.js, Recharts)
- Authentification et tableau de bord utilisateur
- Déploiement sur un serveur distant

---

## ✨ Auteur

Projet développé par **Clément Brevet** dans le cadre du projet annuel Solastalgia.
