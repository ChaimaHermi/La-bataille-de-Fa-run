class Game {
    // ...

    genererEtatDuJeu(plateau) {
        // Création du contenu HTML pour l'état du jeu



        // Création du contenu HTML pour l'état du jeu
        let divGameState = document.createElement('div');
        divGameState.className = "game-state";
         

        let figureBlue = document.createElement('figure');
        figureBlue.className = "game-state_player";
        let imgBlue = document.createElement('img');
        imgBlue.src = "../jeu java script/Assets/chateauBleu.jpg";
        let figcaptionBlue = document.createElement('figcaption');
        figcaptionBlue.textContent = "Chateau Bleu";
        figureBlue.appendChild(imgBlue);
        figureBlue.appendChild(figcaptionBlue);
    
        let divPlayersBlue = document.createElement('div');
        divPlayersBlue.className = "players";
        let imgChefElfBleu = document.createElement('img');
        imgChefElfBleu.src = "../jeu java script/Assets/ChefElfBleu.jpg";
        divPlayersBlue.appendChild(imgChefElfBleu);
        let imgElfBleu = document.createElement('img');
        imgElfBleu.src = "../jeu java script/Assets/ElfBleu.jpg";
        divPlayersBlue.appendChild(imgElfBleu);
        let imgNainBleu = document.createElement('img');
        imgNainBleu.src = "../jeu java script/Assets/NainBleu.jpg";
        divPlayersBlue.appendChild(imgNainBleu);
        let imgChefNainBleu = document.createElement('img');
        imgChefNainBleu.src = "../jeu java script/Assets/ChefNainBleu.jpg";
        divPlayersBlue.appendChild(imgChefNainBleu);
        figureBlue.appendChild(divPlayersBlue);
        divGameState.appendChild(figureBlue);
    


    
   
        // Crée un nouvel élément <div> pour le plateau
        let divPlateau = document.createElement('div');
        divPlateau.className = "Plateau";

        // Ajoute les carreaux au plateau
        plateau.carreaux.forEach((carreau) => {
            divPlateau.appendChild(carreau.element);
        });

        // Ajoute le plateau à l'état du jeu
        divGameState.appendChild(divPlateau);

        
        let figureRed = document.createElement('figure');
        figureRed.className = "game-state_player";
        let imgRed = document.createElement('img');
        imgRed.src = "../jeu java script/Assets/chateauRouge.jpg";
        let figcaptionRed = document.createElement('figcaption');
        figcaptionRed.textContent = "Chateau rouge";
        figureRed.appendChild(imgRed);
        figureRed.appendChild(figcaptionRed);
    
        let divPlayersRed = document.createElement('div');
        divPlayersRed.className = "players";
        let imgChefElfRouge = document.createElement('img');
        imgChefElfRouge.src = "../jeu java script/Assets/ChefElfRouge.jpg";
        divPlayersRed.appendChild(imgChefElfRouge);
        let imgElfRouge = document.createElement('img');
        imgElfRouge.src = "../jeu java script/Assets/ElfRouge.jpg";
        divPlayersRed.appendChild(imgElfRouge);
        let imgNainRouge = document.createElement('img');
        imgNainRouge.src = "../jeu java script/Assets/NainRouge.jpg";
        divPlayersRed.appendChild(imgNainRouge);
        let imgChefNainRouge = document.createElement('img');
        imgChefNainRouge.src = "../jeu java script/Assets/ChefNainRouge.jpg";
        divPlayersRed.appendChild(imgChefNainRouge);
        figureRed.appendChild(divPlayersRed);
        divGameState.appendChild(figureRed);
    
        return divGameState;
    }
    
    // ...
}



// function ajouterGuerriers(chateau) {
//     let typesDeGuerriers = ['nain', 'chef nain', 'elfe', 'chef elfe'];

//     typesDeGuerriers.forEach(type => {
//         let nombre = prompt(`Entrez le nombre de ${type} que vous voulez ajouter au château ${chateau.couleur}:`);
//         for(let i = 0; i < nombre; i++) {
//             chateau.ajouterAFile(type);
//         }
//     });
// }


function MoteurManager() {
    // Création des châteaux
    let chateauBleu = new Chateau('bleu');
    let chateauRouge = new Chateau('rouge');

    // Création du plateau
    let plateau = new Plateau();

    // Création d'une instance de Game
    let game = new Game();


    // ajouterGuerriers(chateauBleu);
    // ajouterGuerriers(chateauRouge);


   // Ajout des guerriers à la file d'attente
    chateauBleu.ajouterAFile('chef nain');
    chateauBleu.ajouterAFile('chef elfe');
    chateauBleu.ajouterAFile('nain');
    chateauBleu.ajouterAFile('elfe');
    chateauBleu.ajouterAFile('chef nain');
    chateauBleu.ajouterAFile('chef elfe');

    chateauRouge.ajouterAFile('nain');
    // chateauRouge.ajouterAFile('elfe');
    // chateauRouge.ajouterAFile('chef nain');
    // chateauRouge.ajouterAFile('chef elfe');

        let tour = 1;
        let resultat = null;
        let divGame = document.querySelector('.game'); // Sélection de la div avec la classe 'game'
        
        while (resultat === null) {
            console.log(`Tour ${tour}:`);

            
   
    
            // Entraînement des guerriers
            chateauBleu.entrainement();
            chateauRouge.entrainement();
    
            // Avancement des guerriers sur le plateau
            plateau.avancement(chateauBleu.GuerriersEntraines, chateauRouge.GuerriersEntraines);

            // Ajout des ressources à chaque tour
            chateauBleu.AjoutRessource();
            chateauRouge.AjoutRessource();
    
            // Création d'un nouvel élément HTML pour chaque tour
            let h3 = document.createElement('h3');
            h3.textContent = `Tour n°${tour}`;
            divGame.appendChild(h3);
    
            // Génération et ajout de l'état du jeu à chaque tour
        let etatDuJeu = game.genererEtatDuJeu(plateau);
        divGame.appendChild(etatDuJeu);
    
            


            // Affiche les carreaux pour ce tour
            plateau.afficherCarreaux();
    
            // Vérifie si une équipe a gagné
            resultat = plateau.victoire();
            if (resultat !== null) {
                console.log(resultat);
                  // Création d'un nouvel élément HTML pour indiquer que le jeu est terminé
                let h3 = document.createElement('h2');
                h3.textContent = 'Le jeu est terminé : ' + resultat ;
                divGame.appendChild(h3);
                break;
            }

            

            tour++;
        }
    }
    
    MoteurManager();
    