class Plateau {
    constructor() {
        this.carreaux = [ new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau() ];
 


        // Affichage dans le html 
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


    listeAvancementB = [];
    listeAvancementR = []

    
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

   


    avancement(listeB, listeR ) {
        // Gestion de l'avancement pour l'équipe bleue
        if (listeB.length > 0) {
            this.listeAvancementB.push({
                liste: listeB,
                position: 0
            });
        }
        for(let i = 0; i < this.listeAvancementB.length; i++) {
            this.listeAvancementB[i].position++;
        }
    
        // Gestion de l'avancement pour l'équipe rouge
        if (listeR.length > 0) {
            this.listeAvancementR.push({
                liste: listeR,
                position: 6
            });
        }
        for(let i = 0; i < this.listeAvancementR.length; i++) {
            this.listeAvancementR[i].position--;
        }
    
        this.listeAvancementB.forEach(avancement => {
            avancement.liste.forEach(guerrier => {
                let imgSrc;
                switch (guerrier.type) {
                    case 'Nain':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/NainBleu.jpg';
                        break;
                    case 'ChefNain':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/ChefNainBleu.jpg';
                        break;
                    case 'Elfe':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/ElfBleu.jpg';
                        break;
                    case 'ChefElfe':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/ChefElfBleu.jpg';
                        break;
                }
             
                this.carreaux[avancement.position].element.innerHTML += `<img src="${imgSrc}" alt="${guerrier.type}"><br>`;
            });
        });
    
        this.listeAvancementR.forEach(avancement => {
            avancement.liste.forEach(guerrier => {
                let imgSrc;
                switch (guerrier.type) {
                    case 'Nain':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/NainRouge.jpg';
                        break;
                    case 'ChefNain':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/ChefNainRouge.jpg';
                        break;
                    case 'Elfe':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/ElfRouge.jpg';
                        break;
                    case 'ChefElfe':
                        imgSrc = 'C:/Users/dell/Desktop/Mes Projets dev/jeu java script/Assets/ChefElfRouge.jpg';
                        break;
                }
                this.carreaux[avancement.position].element.innerHTML += `<img src="${imgSrc}" alt="${guerrier.type}"><br>`;
            });
        });
    }
    
 
    
    
    
    
    victoire() {
        if (this.listeAvancementB.some(avancement => avancement.position === 5 )) {
            return 'Les bleus ont gagné!';
        }
        if (this.listeAvancementR.some(avancement => avancement.position === 0 )) {
            return 'Les rouges ont gagné!';
        }
        return null;
    }
}