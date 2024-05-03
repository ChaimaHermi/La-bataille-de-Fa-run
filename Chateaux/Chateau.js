class Chateau {
    constructor(couleur) {
        this.couleur = couleur;
        this.GuerriersEntrainés = []; // Liste des guerriers entraînés
        this.ressources = 3; // Nombre initial de ressources
        this.fileNovice = []; // File d'attente pour l'entraînement
    }

    // Ajoute un type de guerrier à la file d'attente
    ajouterAFile(type) {
        this.fileNovice.push(type);
    }

    // Entraîne le prochain guerrier dans la file d'attente si suffisamment de ressources sont disponibles
    entrainement() {
        let type = this.fileNovice[0]; // Regarde le prochain guerrier à entraîner
        let guerrier;
        switch (type) {
            case 'Nain':
                guerrier = new Nain(this.couleur);
                break;
            case 'Elfe':
                guerrier = new Elfe(this.couleur);
                break;
            case 'Chef nain':
                guerrier = new ChefNain(this.couleur);
                break;
            case 'Chef elfe':
                guerrier = new ChefElfe(this.couleur);
                break;
            default:
                guerrier = new Guerrier(type, this.couleur);
        }
        // Vérifie si suffisamment de ressources sont disponibles pour l'entraînement
        if (this.ressources >= guerrier.cout) {
            this.ressources -= guerrier.cout; // Déduit le coût de l'entraînement des ressources
            this.GuerriersEntrainés.push(guerrier); // Ajoute le guerrier à la liste des guerriers entraînés
            this.fileNovice.shift(); // Retire le guerrier de la file d'attente
        } else {
            console.log('Pas assez de ressources pour entraîner un ' + type);
        }
    }
}


window.Chateau = Chateau;
