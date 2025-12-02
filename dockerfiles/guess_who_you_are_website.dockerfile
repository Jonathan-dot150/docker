# Utiliser l'image officielle Nginx
FROM nginx:latest

# Copier ta page dans le répertoire par défaut

# Copier le fichier de configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copier le script wait-for-it
COPY attendre_others_pour_deployer_nginx.sh /attendre_others_pour_deployer_nginx.sh
RUN chmod +x /attendre_others_pour_deployer_nginx.sh

# Lancer Nginx après que 'others:5000' soit prêt
CMD ["/attendre_others_pour_deployer_nginx.sh", "others:5000", "--", "nginx", "-g", "daemon off;"]
