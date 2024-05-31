class Plateau {
  constructor() {
    this.carreaux = [
      new Carreau(),
      new Carreau(),
      new Carreau(),
      new Carreau(),
      new Carreau(),
      new Carreau(),

    ];

    // Affichage dans le html
    // Création dynamique des éléments <div> pour chaque carreau
    this.carreaux.forEach((carreau, index) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.index = index; // Ajoute un attribut data-index avec l'index du carreau
      // Stocke une référence vers l'élément <div> dans l'instance de Carreau correspondante
      carreau.element = cellElement;
      // Ajoute l'élément <div> au plateau
      document.querySelector(".Plateau").appendChild(cellElement);
    });
  }

  listeAvancementB = [];
  listeAvancementR = [];

  afficherCarreaux() {
    // Crée un nouvel élément <div> pour ce tour
    const tourElement = document.createElement("div");
    tourElement.classList.add("tour");

    // Crée de nouveaux éléments <div> pour chaque carreau
    this.carreaux.forEach((carreau, index) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.index = index; // Ajoute un attribut data-index avec l'index du carreau
      // Stocke une référence vers l'élément <div> dans l'instance de Carreau correspondante
      carreau.element = cellElement;
      // Ajoute l'élément <div> au tour
      tourElement.appendChild(cellElement);
    });

    // Ajoute le tour à l'élément parent
    document.querySelector(".Plateau").appendChild(tourElement);
  }
  avancement(listeB, listeR) {
    // Gestion de l'avancement pour l'équipe bleue
    if (listeB.length > 0) {
      this.listeAvancementB.push({
        liste: listeB,
        position: 0,
      });
    }
    for (let i = 0; i < this.listeAvancementB.length; i++) {
      // Supprime le guerrier de la position précédente
      if (i > 0) {
        this.listeAvancementB[i].liste = [];
      } // cest juste pour affichage
      this.listeAvancementB[i].position++;
    }

    // Vérifier si les listes ne sont pas vides
    if (this.listeAvancementB.length > 0 && this.listeAvancementR.length > 0) {
      // Récupérer la tête de chaque liste
      let teteAvancementB = this.listeAvancementB[0];
      let teteAvancementR = this.listeAvancementR[0];

      // Vérifier si les positions sont égales
      if (teteAvancementB.position === teteAvancementR.position) {
        // Les guerriers bleus et rouges sont sur le même carreau
        this.carreaux[teteAvancementB.position].setGuerriersBleu(
          teteAvancementB.liste
        );
        this.carreaux[teteAvancementR.position].setGuerriersRouge(
          teteAvancementR.liste
        );

        // Lancer la bataille
        let resultat = this.carreaux[teteAvancementB.position].bataille();
        if (resultat === 1) {
          console.log("L'équipe bleue a gagné la bataille");
          teteAvancementR.liste = [];
          this.afficherCarreaux();
        } else if (resultat === 2) {
          console.log("L'équipe rouge a gagné la bataille");
          teteAvancementB.liste = [];
          this.afficherCarreaux();
        }
      }
    }

    // Gestion de l'avancement pour l'équipe rouge
    if (listeR.length > 0) {
      this.listeAvancementR.push({
        liste: listeR,
        position: 6,
      });
    }
    for (let i = 0; i < this.listeAvancementR.length; i++) {
      // Supprime le guerrier de la position précédente
      if (i < this.listeAvancementR.length - 1) {
        this.listeAvancementR[i + 1].liste = [];
      }
      this.listeAvancementR[i].position--;
    }

    // Vérifier si les listes ne sont pas vides
    if (this.listeAvancementB.length > 0 && this.listeAvancementR.length > 0) {
      // Récupérer la tête de chaque liste
      let teteAvancementB = this.listeAvancementB[0];
      let teteAvancementR = this.listeAvancementR[0];

      // Vérifier si les positions sont égales
      if (teteAvancementB.position === teteAvancementR.position) {
        // Les guerriers bleus et rouges sont sur le même carreau
        this.carreaux[teteAvancementB.position].setGuerriersBleu(
          teteAvancementB.liste
        );
        this.carreaux[teteAvancementR.position].setGuerriersRouge(
          teteAvancementR.liste
        );

        // Lancer la bataille
        let resultat = this.carreaux[teteAvancementB.position].bataille();
        if (resultat === 1) {
          console.log("L'équipe bleue a gagné la bataille");
          teteAvancementR.liste = [];
          // Déclencher un nouveau tour et un nouveau plateau
          this.afficherCarreaux();
        } else if (resultat === 2) {
          console.log("L'équipe rouge a gagné la bataille");
          teteAvancementB.liste = [];
          // Déclencher un nouveau tour et un nouveau plateau
          this.afficherCarreaux();
        }
      }
    }

    this.listeAvancementB.forEach((avancement) => {
      avancement.liste.forEach((guerrier) => {
        let imgSrc;
        switch (guerrier.type) {
          case "Nain":
            imgSrc = "../La-bataille-de-Fa-run/Assets/NainBleu.jpg";
            break;
          case "ChefNain":
            imgSrc = "../La-bataille-de-Fa-run/Assets/ChefNainBleu.jpg";
            break;
          case "Elfe":
            imgSrc = "../La-bataille-de-Fa-run/Assets/ElfBleu.jpg";
            break;
          case "ChefElfe":
            imgSrc = "../La-bataille-de-Fa-run/Assets/ChefElfBleu.jpg";
            break;
        }

        this.carreaux[
          avancement.position
        ].element.innerHTML += `<img id ="imgC" src="${imgSrc}" alt="${guerrier.type}"><br>`;
      });
    });

    this.listeAvancementR.forEach((avancement) => {
      avancement.liste.forEach((guerrier) => {
        let imgSrc;
        switch (guerrier.type) {
          case "Nain":
            imgSrc = "../La-bataille-de-Fa-run/Assets/NainRouge.jpg";
            break;
          case "ChefNain":
            imgSrc = "../La-bataille-de-Fa-run/Assets/ChefNainRouge.jpg";
            break;
          case "Elfe":
            imgSrc = "../La-bataille-de-Fa-run/Assets/ElfRouge.jpg";
            break;
          case "ChefElfe":
            imgSrc = "../La-bataille-de-Fa-run/Assets/ChefElfRouge.jpg";
            break;
        }
        this.carreaux[
          avancement.position
        ].element.innerHTML += `<img src="${imgSrc}" id ="imgC"  alt="${guerrier.type}"><br>`;
      });
    });
  }

  victoire() {
    if (
      this.listeAvancementB.some(
        (avancement) => avancement.position === 5 && avancement.liste.length > 0
      )
    ) {
      return "Les bleus ont gagné!";
    }
    if (
      this.listeAvancementR.some(
        (avancement) => avancement.position === 0 && avancement.liste.length > 0
      )
    ) {
      return "Les rouges ont gagné!";
    }
    return null;
  }
}
