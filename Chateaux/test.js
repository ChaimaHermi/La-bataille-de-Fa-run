// Assurez-vous que les fichiers Guerrier.js, Nain.js, Elfe.js, ChefNain.js, ChefElfe.js et Chateau.js sont inclus avant ce fichier



// Création des châteaux

let chateauRouge = new window.Chateau();

let chateauBleu = new window.Chateau();




// Ajout des guerriers à la file d'attente d'entraînement
chateauRouge.ajouterAFile('Nain');
chateauRouge.ajouterAFile('Nain');

chateauRouge.ajouterAFile('Elfe');

chateauRouge.ajouterAFile('Elfe');

// Simulation de plusieurs tours d'entraînement
for (let i = 0; i < 4; i++) {
    console.log('Tour ' + (i + 1) + ' : château possède ' + chateauRouge.ressources + ' ressources');
    chateauRouge.tour();
    console.log('Etat final : château ' + chateauRouge.ressources + ' ressources, ' + chateauRouge.GuerriersEntrainés.length + ' guerriers prêts à se battre');
}
