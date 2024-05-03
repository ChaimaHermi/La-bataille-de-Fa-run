
class Plateau {
    constructor(nombreDeCarreaux) {
        this.carreaux = new Array(nombreDeCarreaux).fill(null); // Le plateau est constitué d'une série de carreaux, initialement vides
    }

    // Ajoute un guerrier à un carreau spécifique
    ajouterGuerrier(guerrier, position) {
        if (this.carreaux[position] === null) { // Vérifie que le carreau est vide
            this.carreaux[position] = guerrier;
        } else {
            console.log('Le carreau ' + position + ' est déjà occupé par un autre guerrier');
        }
    }

    // Déplace un guerrier d'un carreau à un autre
    deplacerGuerrier(positionActuelle, nouvellePosition) {
        if (this.carreaux[nouvellePosition] === null) { // Vérifie que le carreau de destination est vide
            this.carreaux[nouvellePosition] = this.carreaux[positionActuelle];
            this.carreaux[positionActuelle] = null;
        } else {
            console.log('Le carreau ' + nouvellePosition + ' est déjà occupé par un autre guerrier');
        }
    }

        // Déplace les guerriers en parallèle
    deplacerGuerriersEnParallele() {
    for (let i = 4; i >= 0; i--) {
        if (this.carreaux[i] !== null && this.carreaux[i].equipe === 'bleu') {
            this.deplacerGuerrier(i, i + 1);
        }
    }
    for (let i = 1; i <= 5; i++) {
        if (this.carreaux[i] !== null && this.carreaux[i].equipe === 'rouge') {
            this.deplacerGuerrier(i, i - 1);
        }
    }
}


    // Affiche le plateau
    afficherPlateau() {
        for (let i = 0; i < this.carreaux.length; i++) {
            if (this.carreaux[i] !== null) {
                console.log('Carreau ' + i + ': ' + this.carreaux[i].type + ' (' + this.carreaux[i].equipe + ')');
            } else {
                console.log('Carreau ' + i + ': vide');
            }
        }
    }
}


window.Plateau = Plateau;
