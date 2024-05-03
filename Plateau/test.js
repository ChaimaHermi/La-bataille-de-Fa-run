// Créez une instance de la classe Plateau
let plateau = new Plateau(6);

// Créez quelques équipes
let equipeBleue = new Chateau('bleu');
let equipeRouge = new Chateau('rouge');

// Ajoutez quelques guerriers à l'équipe bleue
equipeBleue.ajouterAFile('Elfe');
equipeBleue.ajouterAFile('Nain');
equipeBleue.entrainement();
equipeBleue.entrainement();

// Ajoutez quelques guerriers à l'équipe rouge
equipeRouge.ajouterAFile('Chef nain');
equipeRouge.ajouterAFile('Chef elfe');
equipeRouge.entrainement();
equipeRouge.entrainement();

// Placez les guerriers sur le plateau
for (let i = 0; i < equipeBleue.GuerriersEntrainés.length; i++) {
    console.log(equipeBleue.GuerriersEntrainés[i]);
    plateau.ajouterGuerrier(equipeBleue.GuerriersEntrainés[i], i);
}

for (let i = 0; i < equipeRouge.GuerriersEntrainés.length; i++) {
    plateau.ajouterGuerrier(equipeRouge.GuerriersEntrainés[i], 5 - i);
}

// Déplacez les guerriers en parallèle
plateau.deplacerGuerriersEnParallele();

// Affichez le plateau
plateau.afficherPlateau();
