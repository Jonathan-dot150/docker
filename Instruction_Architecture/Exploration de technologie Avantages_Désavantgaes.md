# 📘 Exploration de technologies -- Avantages et désavantages

## 🐳 1. Docker

  ------------------------------------------------------------------------
  **Aspect**        **Avantages**             **Désavantages**
  ----------------- ------------------------- ----------------------------
  Déploiement       Rapidité de déploiement,  Peut être complexe pour les
                    consistant sur toutes les débutants
                    machines                  

  Ressources        Léger vs machines         Consommation de ressources
                    virtuelles                cumulée si beaucoup de
                                              conteneurs

  Compatibilité     Fonctionne sur Windows,   Certains logiciels mal
                    Linux, macOS              adaptés à l'environnement
                                              container

  Maintenance       Isolation simple des      Gestion des versions d'image
                    services                  

  Sécurité          Bonne isolation entre     Un conteneur compromis peut
                    applications              affecter l'hôte
  ------------------------------------------------------------------------

## ☸️ 2. Kubernetes

  ------------------------------------------------------------------------
  **Aspect**        **Avantages**             **Désavantages**
  ----------------- ------------------------- ----------------------------
  Scalabilité       Scaling automatique des   Très complexe à maîtriser
                    applications              

  Disponibilité     Auto-healing, redémarrage Demande un cluster puissant
                    automatique               

  Standard          Supporté par tous les     Overkill pour petits projets
                    grands fournisseurs cloud 

  Automatisation    Facilite CI/CD et le      Courbe d'apprentissage
                    déploiement               énorme
  ------------------------------------------------------------------------

## 🤖 3. Intelligence artificielle / Machine Learning

  ------------------------------------------------------------------------
  **Aspect**        **Avantages**             **Désavantages**
  ----------------- ------------------------- ----------------------------
  Productivité      Automatisation, gain de   Peut remplacer certains
                    temps                     emplois

  Analyse           Détecte des patterns      Nécessite beaucoup de
                    complexes                 données

  Rapidité          Résultats rapides         Dépend souvent du cloud

  Valeur            Technologie très demandée Risques éthiques (biais, vie
                                              privée)
  ------------------------------------------------------------------------

## 🖥️ 4. Virtualisation (VMware, Hyper-V)

  ------------------------------------------------------------------------
  **Aspect**        **Avantages**             **Désavantages**
  ----------------- ------------------------- ----------------------------
  Isolation         Chaque VM est             Très gourmand en ressources
                    indépendante              

  Compatibilité     Permet d'utiliser         Plus lent que les conteneurs
                    plusieurs OS              

  Flexibilité       Snapshots, migration,     Licences parfois coûteuses
                    clonage                   

  Sécurité          Environnement très        Réseau virtuel complexe
                    sécurisé                  
  ------------------------------------------------------------------------

## ☁️ 5. Serveurs Cloud (AWS, Azure, GCP)

  ------------------------------------------------------------------------
  **Aspect**        **Avantages**             **Désavantages**
  ----------------- ------------------------- ----------------------------
  Coûts             Aucun achat de matériel   Peut devenir cher si mal
                                              configuré

  Scalabilité       Auto-scaling illimité     Dépendance à un fournisseur

  Déploiement       Mise en place rapide      Courbe d'apprentissage
                                              importante

  Maintenance       Pas d'entretien matériel  Facturation difficile à
                                              maîtriser
  ------------------------------------------------------------------------
