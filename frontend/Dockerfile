FROM node:18

WORKDIR /app

# Copie uniquement le fichier package.json (pas le lock !)
COPY package.json ./

# Installe les dépendances dans le conteneur
RUN npm install

# Puis copie tout le reste (src, public, etc.)
COPY . .

# Démarre l'app React
CMD ["npm", "start"]
