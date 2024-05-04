class Plateau {
    constructor(longueur) {
        this.carreaux = new Array(longueur).fill(null);
    }

    ajouterGuerrier(guerrier, position) {
        if (this.carreaux[position] === null || this.carreaux[position].equipe !== guerrier.equipe) {
            this.carreaux[position] = guerrier;
        }
    }
    avancerGuerriers() {
        let nouveauPlateau = new Array(this.carreaux.length).fill(null);
    
        // Faire avancer les guerriers bleus
        for (let i = 0; i < this.carreaux.length; i++) {
            if (this.carreaux[i] !== null && this.carreaux[i].equipe === 'bleu' && i + 1 < this.carreaux.length && (nouveauPlateau[i + 1] === null || (this.carreaux[i + 1] !== null && this.carreaux[i].equipe !== this.carreaux[i + 1].equipe))) {
                nouveauPlateau[i + 1] = this.carreaux[i];
                this.carreaux[i] = null;
            }
        }
    
        // Faire avancer les guerriers rouges
        for (let i = this.carreaux.length - 1; i >= 0; i--) {
            if (this.carreaux[i] !== null && this.carreaux[i].equipe === 'rouge' && i - 1 >= 0 && (nouveauPlateau[i - 1] === null || (this.carreaux[i - 1] !== null && this.carreaux[i].equipe !== this.carreaux[i - 1].equipe))) {
                nouveauPlateau[i - 1] = this.carreaux[i];
                this.carreaux[i] = null;
            }
        }
    
        this.carreaux = nouveauPlateau;
    }
    
    
    gererCombats() {
        for (let i = 0; i < this.carreaux.length - 1; i++) {
            if (this.carreaux[i] !== null && this.carreaux[i + 1] !== null && this.carreaux[i].equipe !== this.carreaux[i + 1].equipe) {
                console.log('Combat sur le carreau ' + i + ' entre un ' + this.carreaux[i].type + ' de l\'équipe ' + this.carreaux[i].equipe + ' et un ' + this.carreaux[i + 1].type + ' de l\'équipe ' + this.carreaux[i + 1].equipe);
                
                // Les guerriers bleus attaquent en premier
                if (this.carreaux[i].equipe === 'bleu') {
                    let degats = this.carreaux[i].attaque();
                    console.log('Le ' + this.carreaux[i].type + ' bleu attaque le ' + this.carreaux[i + 1].type + ' rouge et inflige ' + degats + ' dégâts');
                    this.carreaux[i + 1].defense(degats);
                    if (this.carreaux[i + 1].pv <= 0) {
                        console.log('Le ' + this.carreaux[i + 1].type + ' rouge est mort');
                        this.carreaux[i + 1] = null;
                    } else {
                        console.log('Le ' + this.carreaux[i + 1].type + ' rouge a survécu avec ' + this.carreaux[i + 1].pv + ' points de vie restants');
                    }
                }
    
                // Ensuite, les guerriers rouges attaquent
                if (this.carreaux[i + 1] !== null && this.carreaux[i].equipe === 'rouge') {
                    let degats = this.carreaux[i].attaque();
                    console.log('Le ' + this.carreaux[i].type + ' rouge attaque le ' + this.carreaux[i + 1].type + ' bleu et inflige ' + degats + ' dégâts');
                    this.carreaux[i + 1].defense(degats);
                    if (this.carreaux[i + 1].pv <= 0) {
                        console.log('Le ' + this.carreaux[i + 1].type + ' bleu est mort');
                        this.carreaux[i + 1] = null;
                    } else {
                        console.log('Le ' + this.carreaux[i + 1].type + ' bleu a survécu avec ' + this.carreaux[i + 1].pv + ' points de vie restants');
                    }
                }
            }
        }
    }
    
    
    
    
    afficherPlateau() {
        for (let i = 0; i < this.carreaux.length; i++) {
            if (this.carreaux[i] === null) {
                console.log('Le carreau ' + i + ' est vide');
            } else if (this.carreaux[i].type !== undefined) {
                if (i + 1 < this.carreaux.length && this.carreaux[i + 1] !== null && this.carreaux[i].equipe !== this.carreaux[i + 1].equipe) {
                    console.log('Le carreau ' + i + ' contient un ' + this.carreaux[i].type + ' de l\'équipe ' + this.carreaux[i].equipe + ' et un ' + this.carreaux[i + 1].type + ' de l\'équipe ' + this.carreaux[i + 1].equipe + ' "Combat"');
                } else {
                    console.log('Le carreau ' + i + ' contient un ' + this.carreaux[i].type + ' de l\'équipe ' + this.carreaux[i].equipe);
                }
            }
        }
    }
    
    
    



    verifierVictoire() {
        // Compter le nombre de guerriers vivants pour chaque équipe
        let guerriersBleusVivants = 0;
        let guerriersRougesVivants = 0;
        for (let i = 0; i < this.carreaux.length; i++) {
            if (this.carreaux[i] !== null) {
                if (this.carreaux[i].equipe === 'bleu') {
                    guerriersBleusVivants++;
                } else if (this.carreaux[i].equipe === 'rouge') {
                    guerriersRougesVivants++;
                }
            }
        }
    
        // Vérifier si tous les guerriers d'une équipe sont morts
        if (guerriersBleusVivants === 0) {
            console.log('Les rouges gagnent');
            return 'rouge';
        } else if (guerriersRougesVivants === 0) {
            console.log('Les bleus gagnent');
            return 'bleu';
        } else {
            return null; // Le jeu continue
        }
    }
    
    
    
}
