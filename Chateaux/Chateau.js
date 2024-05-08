class Chateau {
    
    constructor(couleur) {
        this.couleur = couleur;
        this.GuerriersEntraines = []; // Liste des guerriers entraînés
        this.ressources = 3;// Nombre initial de ressources
        this.fileDAttente = [];  // File d'attente des novices  pour l'entraînement
    }

    ajouterAFile(type) {
        this.fileDAttente.push(type);
    }

    entrainement() {
        // Si la file d'attente est vide, retourne immédiatement
        if (this.fileDAttente.length === 0) {
            return;
        }
    
        let guerrier;
        switch (this.fileDAttente[0]) {
            case 'nain':
                guerrier = new Nain();
                break;
            case 'elfe':
                guerrier = new Elfe();
                break;
            case 'chef nain':
                guerrier = new ChefNain();
                break;
            case 'chef elfe':
                guerrier = new ChefElfe();
                break;
            default:
                guerrier = new Guerrier();
        }
    
        // Vérifie si suffisamment de ressources sont disponibles pour l'entraînement
        if (this.ressources >= guerrier.cout) {
            this.ressources -= guerrier.cout;
            this.GuerriersEntraines.push(guerrier); // ajouter Gueriers a liste gueriers entrainée apres lentrainement 
            this.fileDAttente.shift(); // suprrimeer guerriers de la liste dattente 
            return true;
        } else {
            console.log('Ressources insuffisantes pour entraîner ' + this.fileDAttente[0]);
            return false;
        }
    }
    
    AjoutRessource() {
      //  while (this.fileDAttente.length > 0 && this.entrainement()) {
            // Rien à faire ici, la boucle continue tant qu'il y a des guerriers à entraîner et des ressources disponibles
       // }
        // Récupère une ressource
        this.ressources += 1;
    }
}

window.Chateau = Chateau;