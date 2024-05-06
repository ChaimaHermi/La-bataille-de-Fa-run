// Création d'un château
let chateau = new Chateau('Bleu');

// Ajout de guerriers à la file d'attente
chateau.ajouterAFile('nain');
chateau.ajouterAFile('elfe');
chateau.ajouterAFile('chef nain');
chateau.ajouterAFile('chef elfe');

// Simulation de plusieurs tours
for (let i = 0; i < 10; i++) {
    console.log('Tour ' + (i+1));
    chateau.tour();
    console.log('Ressources restantes : ' + chateau.ressources);
    
    console.log('Guerriers entraînés : ');
    chateau.GuerriersEntraines.forEach(function(guerrier) {
        console.log(guerrier.type);
    });
    
    console.log('File d\'attente : ');
    chateau.fileDAttente.forEach(function(type) {
        console.log(type);
    });
    
    console.log('-------------------------');
}
