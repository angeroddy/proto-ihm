// ============================================
// FAUSSE BASE DE DONNÉES - Système de Réservation Grenoble INP
// ============================================

// Utilisateur connecté (simulé)
const currentUser = {
  id: 1,
  username: "nguessad",
  firstName: "Ange Roddy",
  lastName: "N'Guessan",
  email: "ange-roddy.nguessan@grenoble-inp.fr",
  phone: "+33 6 12 34 56 78",
  avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
  role: "Étudiant",
  department: "Ensimag - 2A"
};

// Liste des campus/écoles
const campuses = [
  {
    id: 1,
    name: "Grenoble INP - Ense³",
    city: "Grenoble",
    region: "Auvergne-Rhône-Alpes",
    description: "École de l'énergie, l'eau et l'environnement. Labs spécialisés, équipements modernes.",
    capacity: 30,
    features: ["Wi‑Fi 1 Gbps", "Labs"],
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Grenoble INP - Ensimag",
    city: "Grenoble",
    region: "Auvergne‑Rhône‑Alpes",
    description: "École d'informatique et mathématiques appliquées. Salles informatiques équipées.",
    capacity: 35,
    features: ["Salles info"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Grenoble INP - Esisar",
    city: "Valence",
    region: "Auvergne‑Rhône‑Alpes",
    description: "École en systèmes avancés et réseaux. Équipements électroniques et réseaux.",
    capacity: 16,
    features: ["Terrasse"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Grenoble INP - Génie industriel",
    city: "Grenoble",
    region: "Auvergne‑Rhône‑Alpes",
    description: "Formation en management industriel. Espaces de travail en équipe et innovation.",
    capacity: 20,
    features: ["Visio 4K"],
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Grenoble INP - Pagora",
    city: "Grenoble",
    region: "Auvergne‑Rhône‑Alpes",
    description: "École du papier, communication imprimée et biomatériaux. Labs impression et matériaux.",
    capacity: 30,
    features: ["Accès PMR"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Grenoble INP - Phelma",
    city: "Grenoble",
    region: "Auvergne‑Rhône‑Alpes",
    description: "École de physique, électronique et matériaux. Labs recherche et équipements avancés.",
    capacity: 22,
    features: ["Parking"],
    image: "https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1600&auto=format&fit=crop"
  }
];

// Liste des salles (toutes les salles de tous les campus)
const rooms = [
  // ENSE³ (Campus ID: 1)
  {
    id: 1,
    name: "Salle Ampère 101",
    campusId: 1,
    building: "A",
    seats: 50,
    computers: false,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Lab Énergies A205",
    campusId: 1,
    building: "A",
    seats: 25,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 5,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Salle Hydraulique B120",
    campusId: 1,
    building: "B",
    seats: 30,
    computers: false,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },

  // ENSIMAG (Campus ID: 2)
  {
    id: 4,
    name: "Salle F 215",
    campusId: 2,
    building: "A",
    seats: 40,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 10,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Salle E 104",
    campusId: 2,
    building: "A",
    seats: 28,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 6,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Salle B 301",
    campusId: 2,
    building: "B",
    seats: 60,
    computers: false,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 18,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Salle C 120",
    campusId: 2,
    building: "C",
    seats: 20,
    computers: true,
    projector: false,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Salle D 402",
    campusId: 2,
    building: "D",
    seats: 32,
    computers: true,
    projector: true,
    whiteboard: false,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },

  // ESISAR (Campus ID: 3)
  {
    id: 9,
    name: "Lab Électronique E101",
    campusId: 3,
    building: "A",
    seats: 20,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Salle Réseaux A204",
    campusId: 3,
    building: "A",
    seats: 24,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 8,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },

  // GÉNIE INDUSTRIEL (Campus ID: 4)
  {
    id: 11,
    name: "Salle Innovation B310",
    campusId: 4,
    building: "B",
    seats: 35,
    computers: false,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Atelier Projet A105",
    campusId: 4,
    building: "A",
    seats: 20,
    computers: false,
    projector: false,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },

  // PAGORA (Campus ID: 5)
  {
    id: 13,
    name: "Lab Impression C201",
    campusId: 5,
    building: "C",
    seats: 18,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 12,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1532153259564-a5f24f03fbe0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Salle Matériaux B108",
    campusId: 5,
    building: "B",
    seats: 30,
    computers: false,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop",
  },

  // PHELMA (Campus ID: 6)
  {
    id: 15,
    name: "Lab Physique D301",
    campusId: 6,
    building: "D",
    seats: 22,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 0,
    availability: "Disponible",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Salle Nanotechnologie A402",
    campusId: 6,
    building: "A",
    seats: 26,
    computers: true,
    projector: true,
    whiteboard: true,
    wifi: true,
    availableIn: 15,
    availability: "Occupée",
    img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1200&auto=format&fit=crop",
  }
];

// Réservations existantes (historique)
const reservations = [
  {
    id: 1,
    userId: 1,
    roomId: 1,
    campusId: 2,
    date: "2025-11-05",
    startTime: "09:00",
    endTime: "11:00",
    participants: 25,
    purpose: "TP Algorithmique Avancée",
    status: "confirmée",
    createdAt: "2025-10-28"
  },
  {
    id: 2,
    userId: 1,
    roomId: 3,
    campusId: 2,
    date: "2025-11-08",
    startTime: "14:00",
    endTime: "16:00",
    participants: 45,
    purpose: "Présentation projet fin d'études",
    status: "confirmée",
    createdAt: "2025-10-29"
  },
  {
    id: 3,
    userId: 1,
    roomId: 7,
    campusId: 2,
    date: "2025-11-02",
    startTime: "10:00",
    endTime: "12:00",
    participants: 30,
    purpose: "Réunion groupe projet",
    status: "terminée",
    createdAt: "2025-10-25"
  },
  {
    id: 4,
    userId: 1,
    roomId: 4,
    campusId: 2,
    date: "2025-10-30",
    startTime: "15:00",
    endTime: "17:00",
    participants: 15,
    purpose: "Tutorat mathématiques",
    status: "terminée",
    createdAt: "2025-10-23"
  },
  {
    id: 5,
    userId: 1,
    roomId: 9,
    campusId: 2,
    date: "2025-10-28",
    startTime: "13:00",
    endTime: "14:30",
    participants: 20,
    purpose: "Cours de Machine Learning",
    status: "annulée",
    createdAt: "2025-10-20"
  }
];

// Statistiques (calculées depuis les réservations)
const statistics = {
  totalReservations: 48,
  activeReservations: 4,
  cancelledReservations: 3,
  occupancyRate: 72,
  hoursReserved: 134,
  growthRate: 12, // en pourcentage
  cancellationRate: -5 // en pourcentage
};

// Données du graphique d'activité (30 derniers jours)
const activityData = [
  { day: 1, reservations: 8 },
  { day: 2, reservations: 12 },
  { day: 3, reservations: 10 },
  { day: 4, reservations: 15 },
  { day: 5, reservations: 9 },
  { day: 6, reservations: 7 },
  { day: 7, reservations: 6 },
  { day: 8, reservations: 11 },
  { day: 9, reservations: 14 },
  { day: 10, reservations: 13 },
  { day: 11, reservations: 8 },
  { day: 12, reservations: 10 },
  { day: 13, reservations: 12 },
  { day: 14, reservations: 9 },
  { day: 15, reservations: 16 },
  { day: 16, reservations: 11 },
  { day: 17, reservations: 10 },
  { day: 18, reservations: 14 },
  { day: 19, reservations: 13 },
  { day: 20, reservations: 15 },
  { day: 21, reservations: 8 },
  { day: 22, reservations: 7 },
  { day: 23, reservations: 12 },
  { day: 24, reservations: 14 },
  { day: 25, reservations: 10 },
  { day: 26, reservations: 11 },
  { day: 27, reservations: 13 },
  { day: 28, reservations: 16 },
  { day: 29, reservations: 12 },
  { day: 30, reservations: 15 }
];

// Fonctions utilitaires pour accéder aux données
function getCurrentUser() {
  return currentUser;
}

function getCampuses() {
  return campuses;
}

function getCampusById(id) {
  return campuses.find(c => c.id === id);
}

function getRooms(campusId = null) {
  if (campusId) {
    return rooms.filter(r => r.campusId === campusId);
  }
  return rooms;
}

function getRoomById(id) {
  return rooms.find(r => r.id === id);
}

function getReservations(userId = null) {
  if (userId) {
    return reservations.filter(r => r.userId === userId);
  }
  return reservations;
}

function getReservationById(id) {
  return reservations.find(r => r.id === id);
}

function getStatistics() {
  return statistics;
}

function getActivityData() {
  return activityData;
}

// Fonction pour créer une nouvelle réservation
function createReservation(reservationData) {
  const newReservation = {
    id: reservations.length + 1,
    userId: currentUser.id,
    ...reservationData,
    status: "confirmée",
    createdAt: new Date().toISOString().split('T')[0]
  };
  reservations.push(newReservation);

  // Mettre à jour les statistiques
  statistics.totalReservations++;
  statistics.activeReservations++;

  return newReservation;
}

// Fonction pour annuler une réservation
function cancelReservation(reservationId) {
  const reservation = reservations.find(r => r.id === reservationId);
  if (reservation) {
    reservation.status = "annulée";
    statistics.cancelledReservations++;
    statistics.activeReservations--;
    return true;
  }
  return false;
}

// Export pour utilisation dans les pages HTML (si module ES6 supporté)
// Sinon, les variables sont disponibles globalement
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    currentUser,
    campuses,
    rooms,
    reservations,
    statistics,
    activityData,
    getCurrentUser,
    getCampuses,
    getCampusById,
    getRooms,
    getRoomById,
    getReservations,
    getReservationById,
    getStatistics,
    getActivityData,
    createReservation,
    cancelReservation
  };
}
