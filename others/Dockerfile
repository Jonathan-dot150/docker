# ./others/Dockerfile
FROM python:3.13.9-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier les dépendances
COPY requirements.txt .

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copier le code de l'application
COPY . .

# Exposer le port utilisé par FastAPI
EXPOSE 5000

# Commande de démarrage avec Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000"]


#WORKDIR /app

#COPY requirements.txt .
#RUN pip install --no-cache-dir -r requirements.txt

#COPY . .

#CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]
