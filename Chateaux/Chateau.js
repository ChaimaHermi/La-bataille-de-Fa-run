class Chateau {
    constructor() {
        this.GuerriersEntrainés = []; // Liste des guerriers entraînés
        this.ressources = 3; // Nombre initial de ressources
        this.fileAttente = []; // File d'attente pour l'entraînement
    }

    // Ajoute un type de guerrier à la file d'attente
    ajouterAFile(type) {
        this.fileAttente.push(type);
    }

    // Entraîne le prochain guerrier dans la file d'attente si suffisamment de ressources sont disponibles
    entrainement() {
        let type = this.fileAttente[0]; // Regarde le prochain guerrier à entraîner
        let guerrier;
        switch (type) {
            case 'Nain':
                guerrier = new Nain();
                break;
            case 'Elfe':
                guerrier = new Elfe();
                break;
            case 'Chef nain':
                guerrier = new ChefNain();
                break;
            case 'Chef elfe':
                guerrier = new ChefElfe();
                break;
            default:
                guerrier = new Guerrier();
        }
        // Vérifie si suffisamment de ressources sont disponibles pour l'entraînement
        if (this.ressources >= guerrier.cout) {
            this.ressources -= guerrier.cout; // Déduit le coût de l'entraînement des ressources
            this.GuerriersEntrainés.push(guerrier); // Ajoute le guerrier à la liste des guerriers entraînés
            this.fileAttente.shift(); // Retire le guerrier de la file d'attente
            return true; // Indique qu'un guerrier a été entraîné
        } else {
            console.log('Ressources insuffisantes pour entraîner ' + type);
            return false; // Indique qu'aucun guerrier n'a été entraîné
        }
    }

    // Méthode appelée à chaque tour du jeu
    tour() {
        // Entraîne autant de guerriers que possible
        while (this.fileAttente.length > 0 && this.entrainement()) {
            // Rien à faire ici, la boucle continue tant qu'il y a des guerriers à entraîner et des ressources disponibles
        }
        // Récupère une ressource
        this.ressources += 1;
    }
}

window.Chateau = Chateau;
