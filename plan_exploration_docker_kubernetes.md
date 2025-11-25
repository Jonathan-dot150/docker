# 🧭 Plan d'exploration -- Projet Docker & Kubernetes (3 semaines)

## 📘 Projet

Déploiement d'une application web simple composée de deux microservices
(Frontend Nginx + Backend Flask) conteneurisés avec Docker et orchestrés
sur Kubernetes (Minikube).

------------------------------------------------------------------------

# 📌 1. Objectifs du projet

## 🎯 Objectif général

Comprendre et démontrer une architecture de microservices déployée avec
Docker et orchestrée avec Kubernetes.

## 🎯 Objectifs spécifiques

-   Créer et conteneuriser une application web simple en deux parties
    (Frontend + Backend).
-   Construire deux images Docker personnalisées.
-   Configurer un cluster Kubernetes (Minikube ou Docker Desktop).
-   Déployer les microservices sur Kubernetes via des fichiers YAML.
-   Tester le fonctionnement et la communication entre les
    microservices.
-   Documenter le processus et produire un rapport final + présentation.

------------------------------------------------------------------------

# 📦 2. Livrables

## 📁 Livrable 1 -- Code source

-   Code backend (`app.py`)
-   Code frontend (`index.html`)
-   Dockerfiles (backend + frontend)

## 📦 Livrable 2 -- Images Docker

-   backend:latest\
-   frontend:latest

## ☸️ Livrable 3 -- Manifests Kubernetes

-   backend-deployment.yaml\
-   backend-service.yaml\
-   frontend-deployment.yaml\
-   frontend-service.yaml

## 🧪 Livrable 4 -- Démonstration

-   Affichage du site frontend\
-   Appel réussi au backend\
-   Commandes `kubectl get pods` / `kubectl get svc`

## 📝 Livrable 5 -- Documentation / Rapport

-   Objectifs\
-   Architecture (diagramme)\
-   Étapes Docker → Kubernetes\
-   Problèmes rencontrés\
-   Utilisation de l'IA

## 🎤 Livrable 6 -- Présentation

-   10 à 15 minutes\
-   PowerPoint

------------------------------------------------------------------------

# 🗓️ 3. Échéancier (3 semaines)

## 🗓️ Semaine 1 --- Conception & Docker

### Objectifs

-   Créer backend & frontend\
-   Construire images Docker

### Tâches

-   Code backend & frontend\
-   Création des Dockerfiles\
-   Tests Docker (`docker build`, `docker run`)\
-   Documentation initiale

### Livrable

-   Deux images Docker fonctionnelles

------------------------------------------------------------------------

## 🗓️ Semaine 2 --- Kubernetes

### Objectifs

-   Déployer les conteneurs dans Kubernetes\
-   Configurer services ClusterIP + NodePort

### Tâches

-   Rédaction des fichiers YAML\
-   `kubectl apply -f`\
-   Tests dans Minikube\
-   Communication frontend → backend

### Livrable

-   Application fonctionnelle dans Kubernetes

------------------------------------------------------------------------

## 🗓️ Semaine 3 --- Finalisation & Présentation

### Objectifs

-   Préparer rapport et présentation\
-   Faire démonstration

### Tâches

-   Rapport final\
-   Tests finaux

### Livrable

-   Rapport final\
-   Démo complète
