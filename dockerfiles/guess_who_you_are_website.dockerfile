# Utiliser l'image officielle Nginx
FROM nginx:latest

# Copier ta page dans le répertoire par défaut
COPY index.html /usr/share/nginx/html/index.html
