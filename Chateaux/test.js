// Assurez-vous que les fichiers Guerrier.js, Nain.js, Elfe.js, ChefNain.js, ChefElfe.js et Chateau.js sont inclus avant ce fichier

let chateau = new window.Chateau();

// Ajout des guerriers à la file d'attente d'entraînement
chateau.ajouterAFile('Nain');
chateau.ajouterAFile('Nain');
chateau.ajouterAFile('Elfe');
chateau.ajouterAFile('Elfe');

// Simulation de plusieurs tours d'entraînement
for (let i = 0; i < 3; i++) {
    console.log('Tour ' + (i + 1) + ' : château possède ' + chateau.ressources + ' ressources');
    chateau.tour();
    console.log('Etat final : château ' + chateau.ressources + ' ressources, ' + chateau.GuerriersEntrainés.length + ' guerriers prêts à se battre');
}
