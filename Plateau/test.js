function test() {
    // Création des châteaux
    let chateauBleu = new Chateau('bleu');
    let chateauRouge = new Chateau('rouge');

    // Création du plateau
    let plateau = new Plateau();

    // Ajout des guerriers à la file d'attente
    chateauBleu.ajouterAFile('nain');
    chateauBleu.ajouterAFile('elfe');
    chateauBleu.ajouterAFile('chef nain');
    chateauBleu.ajouterAFile('chef elfe');

    chateauRouge.ajouterAFile('nain');
    chateauRouge.ajouterAFile('elfe');
    chateauRouge.ajouterAFile('chef nain');
    chateauRouge.ajouterAFile('chef elfe');

    // Boucle de jeu
    let tour = 1;
    let resultat = null;
    while ((chateauBleu.fileDAttente.length > 0 || chateauRouge.fileDAttente.length > 0) && resultat === null) {
        console.log(`Tour ${tour}:`);

        // Entraînement des guerriers
        chateauBleu.entrainement();
        chateauRouge.entrainement();

        // Avancement des guerriers sur le plateau
        plateau.avancement(chateauBleu.GuerriersEntraines, chateauRouge.GuerriersEntraines);

        // Vérifie si une équipe a gagné
        resultat = plateau.victoire();
        if (resultat !== null) {
            console.log(resultat);
            break;
        }

        // Ajout des ressources à chaque tour
        chateauBleu.AjoutRessource();
        chateauRouge.AjoutRessource();

        tour++;
    }
}

test();
