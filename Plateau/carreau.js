class Carreau {
  constructor() {
    this.guerriersBleu = [];
    this.guerriersRouge = [];
    this.element = document.createElement("div");
    this.element.className = "carreau";
  }

  setGuerriersBleu(guerriers) {
    this.guerriersBleu = guerriers;
  }

  setGuerriersRouge(guerriers) {
    this.guerriersRouge = guerriers;
  }

  async bataille() {
    console.log("bataille entre les bleus: ",this.guerriersBleu, " et les rouges: ",this.guerriersRouge );
    let batailleDeclenchee = false;

    if (this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0) {
      batailleDeclenchee = true; // Une bataille a lieu

      while (this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0) {
        // Tour d'attaque des guerriers bleus
        for (let i = 0; i < this.guerriersBleu.length; i++) {
          let degat = this.guerriersBleu[i].attaquer();
          if (this.guerriersRouge.length > 0) {
            this.guerriersRouge[0].recevoirDegats(degat);
            await this.afficherGuerrier(this.guerriersBleu[i], "bleu");
          }
          if (this.guerriersRouge[0]?.pv <= 0) {
            this.guerriersRouge.shift(); // Retire le guerrier rouge mort
          }
        }

        // Tour d'attaque des guerriers rouges
        for (let i = 0; i < this.guerriersRouge.length; i++) {
          let degat = this.guerriersRouge[i].attaquer();
          if (this.guerriersBleu.length > 0) {
            this.guerriersBleu[0].recevoirDegats(degat);
            await this.afficherGuerrier(this.guerriersRouge[i], "rouge");
          }
          if (this.guerriersBleu[0]?.pv <= 0) {
            this.guerriersBleu.shift(); // Retire le guerrier bleu mort
          }
        }

        await this.attendre(2000); // Attendre 3 secondes entre chaque tour
      }

      console.log("Equipe rouge : ", this.guerriersRouge);
      console.log("Equipe bleu", this.guerriersBleu);
    }

    if (this.guerriersBleu.length == 0) {
      console.log("Equipe rouge a gagné la bataille", this.guerriersRouge);
      return { resultat: 2, batailleDeclenchee };
    }
    if (this.guerriersRouge.length == 0) {
      console.log("Equipe bleue a gagné la bataille ", this.guerriersBleu);
      return { resultat: 1, batailleDeclenchee };
    }
    return { resultat: 0, batailleDeclenchee };
  }

  async afficherGuerrier(guerrier, equipe) {
    this.element.innerHTML = "";
    if (!guerrier) return;

    let pvPercentage = guerrier.pv;
    let color = pvPercentage < 50 ? "red" : "#4caf50";
    let imgSrc;
    if (equipe === "bleu") {
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
    } else {
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
    }

    this.element.innerHTML += `
      <img id="imgC" src="${imgSrc}" alt="${guerrier.type}">
      <div class="progress-bar">
        <div class="progress" style="width: ${pvPercentage}%; background-color: ${color};"></div>
      </div>
      <br>`;

    await this.attendre(3000); // Attendre 3 secondes

    // Supprimer l'élément HTML du guerrier
    this.element.innerHTML = "";
  }

  async attendre(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
