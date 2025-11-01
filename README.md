# Système de Réservation de Salles - Grenoble INP

Système complet de réservation de salles pour les écoles du groupe Grenoble INP avec interface web moderne et données simulées.

## Structure du Projet

```
Projet IHM-Proto/
├── login.html          # Page de connexion
├── dashboard.html      # Tableau de bord avec statistiques et sélection d'école
├── select.html         # Sélection de salles avec filtres
├── formulaire.html     # Formulaire de réservation
├── data.js            # Base de données simulée (fausses données)
└── README.md          # Documentation
```

## Fonctionnalités

### 1. Authentification (`login.html`)
- Connexion avec identifiants UGA
- Utilisateur de test : `nguessad` (n'importe quel mot de passe)
- Validation simple et redirection vers le dashboard

### 2. Dashboard (`dashboard.html`)
- **Statistiques en temps réel** :
  - Réservations totales (48)
  - Réservations en cours (4)
  - Réservations annulées (3)
  - Taux d'occupation (72%)
  - Heures réservées (134h)
- **Graphique d'activité** : Visualisation des réservations sur 30 jours
- **Sélection d'école** : 6 écoles Grenoble INP disponibles
  - Grenoble INP - Ense³
  - Grenoble INP - Ensimag
  - Grenoble INP - Esisar (Valence)
  - Grenoble INP - Génie industriel
  - Grenoble INP - Pagora
  - Grenoble INP - Phelma
- **Filtres** : Par ville (Grenoble/Valence) et recherche textuelle

### 3. Sélection de Salles (`select.html`)
- **Liste de salles** avec 12 salles disponibles
- **Filtres avancés** :
  - Disponibilité (Tous/Disponible/Occupée)
  - Bâtiment (A, B, C, D)
  - Recherche par nom
- **Section "Bientôt libres"** : Salles qui se libèrent dans les 20 prochaines minutes
- **Informations par salle** :
  - Image
  - Capacité
  - Équipements (WiFi, ordinateurs, vidéoprojecteur, tableau blanc)
  - Statut de disponibilité
  - Temps restant avant libération

### 4. Formulaire de Réservation (`formulaire.html`)
- **Pré-remplissage automatique** :
  - Informations de la salle sélectionnée
  - Coordonnées de l'utilisateur
- **Champs du formulaire** :
  - Bâtiment et salle (en lecture seule)
  - Date (par défaut : aujourd'hui)
  - Heure de début/fin
  - Nombre de participants (avec stepper)
  - Coordonnées utilisateur (nom, prénom, téléphone)
  - Commentaires (optionnel)
- **Récapitulatif de la salle** : Photo, capacité, équipements
- **Validation** : Vérification des champs obligatoires
- **Confirmation** : Alerte avec numéro de réservation

## Base de Données Simulée (`data.js`)

Le fichier `data.js` contient toutes les fausses données pour simuler une base de données réelle :

### Utilisateur connecté
```javascript
{
  username: "nguessad",
  firstName: "Ange Roddy",
  lastName: "N'Guessan",
  email: "ange-roddy.nguessan@grenoble-inp.fr",
  phone: "+33 6 12 34 56 78",
  role: "Étudiant",
  department: "Ensimag - 2A"
}
```

### Données disponibles
- **6 campus** avec informations complètes
- **12 salles** avec équipements et disponibilité
- **5 réservations** existantes (historique)
- **Statistiques** calculées en temps réel
- **30 jours** de données d'activité pour le graphique

### Fonctions disponibles
```javascript
getCurrentUser()              // Récupère l'utilisateur connecté
getCampuses()                 // Liste tous les campus
getCampusById(id)            // Récupère un campus par ID
getRooms(campusId)           // Liste les salles (optionnel: par campus)
getRoomById(id)              // Récupère une salle par ID
getReservations(userId)      // Liste les réservations (optionnel: par user)
getStatistics()              // Récupère les statistiques
getActivityData()            // Données du graphique d'activité
createReservation(data)      // Crée une nouvelle réservation
cancelReservation(id)        // Annule une réservation
```

## Flux d'Utilisation

1. **Connexion** : Ouvrir `login.html` → Entrer "nguessad" → Cliquer "Se connecter"
2. **Dashboard** : Voir les statistiques → Choisir une école → Cliquer "Réserver"
3. **Sélection** : Filtrer les salles → Cliquer sur une carte de salle
4. **Réservation** : Vérifier les informations → Remplir les détails → "Confirmer la réservation"
5. **Confirmation** : Voir le numéro de réservation → Retour au dashboard

## Technologies Utilisées

- **HTML5** : Structure des pages
- **Tailwind CSS** : Framework CSS via CDN
- **JavaScript Vanilla** : Logique côté client
- **Chart.js** : Graphique d'activité
- **Lucide Icons** : Icônes modernes
- **LocalStorage** : Persistance temporaire des données

## Installation et Lancement

### Méthode 1 : Directement dans le navigateur
1. Ouvrir le fichier `login.html` dans un navigateur web moderne
2. Utiliser le nom d'utilisateur `nguessad`

### Méthode 2 : Serveur local (recommandé)
```bash
# Utiliser Python
python -m http.server 8000

# Ou Node.js avec http-server
npx http-server
```
Puis ouvrir `http://localhost:8000/login.html`

## Cohérence du Projet

### Données utilisateur harmonisées
- **Nom complet** : Ange Roddy N'Guessan
- **Username** : nguessad
- **Email** : ange-roddy.nguessan@grenoble-inp.fr
- **Avatar** : Photo cohérente sur toutes les pages

### Navigation cohérente
- Login → Dashboard → Select → Formulaire
- Boutons retour et annulation fonctionnels
- Déconnexion ramène au login

### Persistance des données
- **LocalStorage** utilisé pour :
  - Utilisateur connecté
  - Campus sélectionné
  - Salle sélectionnée
- **data.js** maintient la cohérence globale

## Améliorations Réalisées

1. **Création de `data.js`** : Base de données centralisée
2. **Harmonisation des noms d'utilisateur** : Un seul utilisateur cohérent
3. **Flux de données complet** : De la sélection à la confirmation
4. **Pré-remplissage automatique** : Formulaire intelligent
5. **Validation des données** : Champs obligatoires vérifiés
6. **Statistiques réalistes** : Données cohérentes avec l'historique
7. **Navigation fonctionnelle** : Tous les liens marchent
8. **Design moderne** : Interface professionnelle avec Tailwind CSS

## Notes de Développement

- Ce projet utilise des **fausses données** pour simuler une base de données
- Les réservations sont stockées en mémoire (refresh = perte des données)
- Aucun backend réel n'est nécessaire pour tester le prototype
- Toutes les données sont dans `data.js` pour faciliter la modification

## Contact

Utilisateur test : Ange Roddy N'Guessan (@nguessad)
École : Grenoble INP - Ensimag - 2A
