class Plateau {
    constructor() {
        this.carreaux = [ new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau() ];
        this.listeAvancementB = []
        this.listeAvancementR = []

        // Création dynamique des éléments <div> pour chaque carreau
        this.carreaux.forEach((carreau, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.index = index; // Ajoute un attribut data-index avec l'index du carreau
            // Stocke une référence vers l'élément <div> dans l'instance de Carreau correspondante
            carreau.element = cellElement;
            // Ajoute l'élément <div> au plateau
            document.querySelector('.Plateau').appendChild(cellElement);
        });
    }


    
    afficherCarreaux() {
        // Crée un nouvel élément <div> pour ce tour
        const tourElement = document.createElement('div');
        tourElement.classList.add('tour');

        // Crée de nouveaux éléments <div> pour chaque carreau
        this.carreaux.forEach((carreau, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.dataset.index = index; // Ajoute un attribut data-index avec l'index du carreau
            // Stocke une référence vers l'élément <div> dans l'instance de Carreau correspondante
            carreau.element = cellElement;
            // Ajoute l'élément <div> au tour
            tourElement.appendChild(cellElement);
        });

        // Ajoute le tour à l'élément parent
        document.querySelector('.Plateau').appendChild(tourElement);
    }






    
    avancement(listeB, listeR) {
        
        this.listeAvancementB.push({
            liste: listeB,
            position: 0
        })
        for(let i = 0; i < this.listeAvancementB.length; i++) {
                 this.listeAvancementB[i].position++;
           


         }

        this.listeAvancementR.push({
            liste: listeR,
            position: 6
        })
        for(let i = 0; i < this.listeAvancementR.length; i++) {
             this.listeAvancementR[i].position-- ;

             }

        // eliminer la redondance dans la liste rouge
        for (let i = 0; i < this.listeAvancementR.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementR.length; j++) {
                if (this.listeAvancementR[i].position === this.listeAvancementR[j].position) {
                    this.listeAvancementR[i].liste = this.listeAvancementR[i].liste.concat(this.listeAvancementR[j].liste);
                    this.listeAvancementR.splice(j, 1);
                }
            }
        }

        // eliminer la redondance dans la liste bleu
        for (let i = 0; i < this.listeAvancementB.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementB.length; j++) {
                if (this.listeAvancementB[i].position === this.listeAvancementB[j].position) {
                    this.listeAvancementB[i].liste = this.listeAvancementB[i].liste.concat(this.listeAvancementB[j].liste);
                    this.listeAvancementB.splice(j, 1);
                }
            }
        }

        if (this.listeAvancementB[0].position == this.listeAvancementR[0].position) {
            this.carreaux[this.listeAvancementB[0].position].setGuerriersBleu(this.listeAvancementB[0].liste);
            this.carreaux[this.listeAvancementB[0].position].setGuerriersRouge(this.listeAvancementR[0].liste);
            let resultat = this.carreaux[this.listeAvancementB[0].position].bataille();

            switch (resultat) {
                case 1:
                    console.log("equipe bleu a gagné le combat");
                    this.listeAvancementR.shift();
                    for(let i = 0; i < this.listeAvancementR.length; i++) { this.listeAvancementR[i].position++; }
                    break;
                case 2:
                    console.log("equipe rouge a gagné le combat");
                    this.listeAvancementB.shift();
                    for(let i = 0; i < this.listeAvancementB.length; i++) { this.listeAvancementB[i].position--; }
                    break;
                default:
                    break;
            }
        }

        console.log("liste B", this.listeAvancementB);
        console.log("liste R", this.listeAvancementR);
    }






    // Méthode pour vérifier s'il y a une victoire
    victoire() {
        // Vérifier si les bleus ont gagné
        if (this.listeAvancementB.some(avancement => avancement.position === 5)) {
            return 'Les bleus ont gagné!';
        }
        
        // Vérifier si les rouges ont gagné
        if (this.listeAvancementR.some(avancement => avancement.position === 0)) {
            return 'Les rouges ont gagné!';
        }
        
        // Si personne n'a encore gagné, retourner null
        return null;
    }
}
