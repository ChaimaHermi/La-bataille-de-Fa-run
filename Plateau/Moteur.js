class Game {
  genererEtatDuJeu(plateau) {
    // Création du contenu HTML pour l'état du jeu
    let divGameState = document.createElement("div");
    divGameState.className = "game-state";

    let figureBlue = document.createElement("figure");
    figureBlue.className = "game-state_player";
    let imgBlue = document.createElement("img");
    imgBlue.src = "../La-bataille-de-Fa-run/Assets/chateauBleu.jpg";
    let figcaptionBlue = document.createElement("figcaption");
    figcaptionBlue.textContent = "Chateau Bleu";
    figureBlue.appendChild(imgBlue);
    figureBlue.appendChild(figcaptionBlue);

    let divPlayersBlue = document.createElement("div");
    divPlayersBlue.className = "players";
    let imgChefElfBleu = document.createElement("img");
    imgChefElfBleu.src = "../La-bataille-de-Fa-run/Assets/ChefElfBleu.jpg";
    divPlayersBlue.appendChild(imgChefElfBleu);
    let imgElfBleu = document.createElement("img");
    imgElfBleu.src = "../La-bataille-de-Fa-run/Assets/ElfBleu.jpg";
    divPlayersBlue.appendChild(imgElfBleu);
    let imgNainBleu = document.createElement("img");
    imgNainBleu.src = "../La-bataille-de-Fa-run/Assets/NainBleu.jpg";
    divPlayersBlue.appendChild(imgNainBleu);
    let imgChefNainBleu = document.createElement("img");
    imgChefNainBleu.src = "../La-bataille-de-Fa-run/Assets/ChefNainBleu.jpg";
    divPlayersBlue.appendChild(imgChefNainBleu);
    figureBlue.appendChild(divPlayersBlue);
    divGameState.appendChild(figureBlue);
    // Crée un nouvel élément <div> pour le plateau
    let divPlateau = document.createElement("div");
    divPlateau.className = "Plateau";
    // Ajoute les carreaux au plateau
    plateau.carreaux.forEach((carreau) => {
      divPlateau.appendChild(carreau.element);
    });
    // Ajoute le plateau à l'état du jeu
    divGameState.appendChild(divPlateau);

    let figureRed = document.createElement("figure");
    figureRed.className = "game-state_player";
    let imgRed = document.createElement("img");
    imgRed.src = "../La-bataille-de-Fa-run/Assets/chateauRouge.jpg";
    let figcaptionRed = document.createElement("figcaption");
    figcaptionRed.textContent = "Chateau rouge";
    figureRed.appendChild(imgRed);
    figureRed.appendChild(figcaptionRed);

    let divPlayersRed = document.createElement("div");
    divPlayersRed.className = "players";
    let imgChefElfRouge = document.createElement("img");
    imgChefElfRouge.src = "../La-bataille-de-Fa-run/Assets/ChefElfRouge.jpg";
    divPlayersRed.appendChild(imgChefElfRouge);
    let imgElfRouge = document.createElement("img");
    imgElfRouge.src = "../La-bataille-de-Fa-run/Assets/ElfRouge.jpg";
    divPlayersRed.appendChild(imgElfRouge);
    let imgNainRouge = document.createElement("img");
    imgNainRouge.src = "../La-bataille-de-Fa-run/Assets/NainRouge.jpg";
    divPlayersRed.appendChild(imgNainRouge);
    let imgChefNainRouge = document.createElement("img");
    imgChefNainRouge.src = "../La-bataille-de-Fa-run/Assets/ChefNainRouge.jpg";
    divPlayersRed.appendChild(imgChefNainRouge);
    figureRed.appendChild(divPlayersRed);
    divGameState.appendChild(figureRed);

    return divGameState;
  }
}
async function tourDeJeu(
  chateauBleu,
  chateauRouge,
  plateau,
  game,
  divGame,
  tour
) {
  console.log(`Tour ${tour}:`);
  plateau.afficherCarreaux();
  // Entraînement des guerriers
  chateauBleu.entrainement();
  chateauRouge.entrainement();

  // Avancement des guerriers sur le plateau
  plateau.avancement(
    chateauBleu.GuerriersEntraines,
    chateauRouge.GuerriersEntraines
  );

  // Ajout des ressources à chaque tour
  chateauBleu.AjoutRessource();
  chateauRouge.AjoutRessource();

  // Supprime le contenu du plateau précédent
  while (divGame.firstChild) {
    divGame.removeChild(divGame.firstChild);
  }

  // Création d'un nouvel élément HTML pour chaque tour
  let h3 = document.createElement("h3");
  h3.textContent = `Tour n°${tour}`;
  divGame.appendChild(h3);

  // Génération et ajout de l'état du jeu à chaque tour
  let etatDuJeu = game.genererEtatDuJeu(plateau);
  divGame.appendChild(etatDuJeu);

  // Appel de la méthode bataille pour chaque carreau
  for (let carreau of plateau.carreaux) {
    await carreau.bataille();
  }

  // Vérifie si une équipe a gagné
  let resultat = plateau.victoire();
  if (resultat !== null) {
    console.log(resultat);
    // Création d'un nouvel élément HTML pour indiquer que le jeu est terminé
    let h2 = document.createElement("h2");
    h2.textContent = "Le jeu est terminé : " + resultat;
    divGame.appendChild(h2);
    return resultat;
  }

  // Ajoute un délai de 2 secondes avant le prochain tour
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return null;
}







function ajouterGuerriers(chateau) {
  let typesDeGuerriers = ["nain", "chef nain", "elfe", "chef elfe"];

  typesDeGuerriers.forEach((type) => {
    let nombre = prompt(
      `Entrez le nombre de ${type} que vous voulez ajouter au château ${chateau.couleur}:`
    );
    for (let i = 0; i < nombre; i++) {
      chateau.ajouterAFile(type);
    }
  });
}
async function MoteurManager() {
  // Création des châteaux
  let chateauBleu = new Chateau("bleu");
  let chateauRouge = new Chateau("rouge");

  // Création du plateau
  let plateau = new Plateau();

  // Création d'une instance de Game
  let game = new Game();
  // Ajout des guerriers à la file d'attente

  ajouterGuerriers(chateauBleu);
  ajouterGuerriers(chateauRouge);
  let tour = 1;
  let resultat = null;
  let divGame = document.querySelector(".game"); // Sélection de la div avec la classe 'game'

  while (resultat === null) {
    resultat = await tourDeJeu(
      chateauBleu,
      chateauRouge,
      plateau,
      game,
      divGame,
      tour
    );
    tour++;
  }
}
MoteurManager();
