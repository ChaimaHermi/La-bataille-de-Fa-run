// Crée un plateau de 10 carreaux
let plateau = new Plateau(10);

// Crée deux châteaux
let chateauBleu = new Chateau('bleu');
let chateauRouge = new Chateau('rouge');
// Ajouter des guerriers à la file d'attente de chaque château
chateauBleu.ajouterAFile('ChefNain');
chateauBleu.ajouterAFile('Nain');
chateauBleu.ajouterAFile('Nain');

chateauRouge.ajouterAFile('ChefElf');
chateauRouge.ajouterAFile('ChefNain');
chateauRouge.ajouterAFile('ChefNain');


// Entraîne tous les guerriers au début
while (chateauBleu.ressources > 0) {
    chateauBleu.entrainement();
}
while (chateauRouge.ressources > 0) {
    chateauRouge.entrainement();
}

// Fait avancer les guerriers, gère les combats, ajoute des ressources, entraîne des guerriers et les place sur le plateau pendant 5 tours
// Un tour de jeu :
// Un tour de jeu :
for (let i = 0; i < 20; i++) {
    console.log('Tour ' + (i + 1) + ' :');
    
    // Les châteaux placent les guerriers sur le plateau s'ils en ont
    if (chateauBleu.GuerriersEntrainés.length > 0) {
        let guerrierBleu = chateauBleu.GuerriersEntrainés.shift();
        plateau.ajouterGuerrier(guerrierBleu, 0);
    }
    if (chateauRouge.GuerriersEntrainés.length > 0) {
        let guerrierRouge = chateauRouge.GuerriersEntrainés.shift();
        plateau.ajouterGuerrier(guerrierRouge, plateau.carreaux.length - 1);
    }
    
    // Les guerriers sur le plateau avancent d'un carreau
    plateau.avancerGuerriers();
    
    // Si un carreau contient des guerriers des deux équipes, un combat est lancé
    plateau.gererCombats();
    
    // Affiche l'état du plateau
    plateau.afficherPlateau();
    
    // Ajoute des ressources pour le prochain tour
    chateauBleu.ajouterRessources();
    chateauRouge.ajouterRessources();
    
    // Vérifie si le jeu est terminé
    let vainqueur = plateau.verifierVictoire();
    if (vainqueur !== null) {
        console.log('Le jeu est terminé, les ' + vainqueur + ' ont gagné');
        break;
    }
}
