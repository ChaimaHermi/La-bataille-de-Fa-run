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
        let fileBleus = this.carreaux.filter(guerrier => guerrier !== null && guerrier.equipe === 'bleu');
        let fileRouges = this.carreaux.filter(guerrier => guerrier !== null && guerrier.equipe === 'rouge');
    
        // Phase d'attaque des guerriers bleus
        while (fileBleus.length > 0 && fileRouges.length > 0) {
            let guerrierBleu = fileBleus.shift();
            let guerrierRouge = fileRouges[0]; // Le guerrier rouge qui est attaqué
            let degats = guerrierBleu.attaque();
            console.log('Le ' + guerrierBleu.type + ' bleu attaque le ' + guerrierRouge.type + ' rouge et inflige ' + degats + ' dégâts');
            let estMort = guerrierRouge.defense(degats);
            if (estMort) {
                console.log('Le ' + guerrierRouge.type + ' rouge est mort');
                fileRouges.shift(); // Retirer le guerrier rouge de la file s'il est mort
            } else {
                console.log('Le ' + guerrierRouge.type + ' rouge a survécu avec ' + guerrierRouge.pv + ' points de vie restants');
            }
            // Ajouter le guerrier bleu à la fin de la file s'il est toujours en vie
            if (guerrierBleu.pv > 0) {
                fileBleus.push(guerrierBleu);
                let index = this.carreaux.findIndex(g => g === guerrierBleu);
                this.carreaux.splice(index, 1); // Retirer le guerrier du carreau actuel
                this.carreaux.push(guerrierBleu); // Ajouter le guerrier au dernier carreau
            }
        }
    
        // Phase d'attaque des guerriers rouges
        while (fileRouges.length > 0 && fileBleus.length > 0) {
            let guerrierRouge = fileRouges.shift();
            let guerrierBleu = fileBleus[0]; // Le guerrier bleu qui est attaqué
            let degats = guerrierRouge.attaque();
            console.log('Le ' + guerrierRouge.type + ' rouge attaque le ' + guerrierBleu.type + ' bleu et inflige ' + degats + ' dégâts');
            let estMort = guerrierBleu.defense(degats);
            if (estMort) {
                console.log('Le ' + guerrierBleu.type + ' bleu est mort');
                fileBleus.shift(); // Retirer le guerrier bleu de la file s'il est mort
            } else {
                console.log('Le ' + guerrierBleu.type + ' bleu a survécu avec ' + guerrierBleu.pv + ' points de vie restants');
            }
            // Ajouter le guerrier rouge à la fin de la file s'il est toujours en vie
            if (guerrierRouge.pv > 0) {
                fileRouges.push(guerrierRouge);
                let index = this.carreaux.findIndex(g => g === guerrierRouge);
                this.carreaux.splice(index, 1); // Retirer le guerrier du carreau actuel
                this.carreaux.unshift(guerrierRouge); // Ajouter le guerrier au premier carreau
            }
        }
    
        // Mettre à jour le plateau avec les guerriers restants
        this.carreaux = [...fileBleus, ...fileRouges];
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
        // Vérifie si l'équipe bleue a atteint l'autre côté du plateau
        if (this.carreaux[this.carreaux.length - 1] !== null && this.carreaux[this.carreaux.length - 1].equipe === 'bleu') {
            console.log('Les bleus gagnent');
            return 'bleu';
        }
        // Vérifie si l'équipe rouge a atteint l'autre côté du plateau
        else if (this.carreaux[0] !== null && this.carreaux[0].equipe === 'rouge') {
            console.log('Les rouges gagnent');
            return 'rouge';
        }
        // Si aucune des équipes n'a atteint l'autre côté du plateau, le jeu continue
        else {
            return null; // Le jeu continue
        }
    }
    
    
    
    
    
}
