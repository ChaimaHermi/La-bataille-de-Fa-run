class Plateau {

    constructor() {
        this.carreaux = [ new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau(), new Carreau() ];
        this.listeAvancementB = []
        this.listeAvancementR = []
    }
    
    avancement(listeB, listeR) {
        if (listeB.length > 0) {
            this.listeAvancementB.push({
                liste: listeB,
                position: 0
            });
            for(let i = 0; i < this.listeAvancementB.length; i++) { this.listeAvancementB[i].position++; }
        }
    
        if (listeR.length > 0) {
            this.listeAvancementR.push({
                liste: listeR,
                position: 6
            });
            for(let i = 0; i < this.listeAvancementR.length; i++) { this.listeAvancementR[i].position--; }
        }
    
        // Eliminer la redondance dans la liste rouge
        for (let i = 0; i < this.listeAvancementR.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementR.length; j++) {
                if (this.listeAvancementR[i].position === this.listeAvancementR[j].position) {
                    this.listeAvancementR[i].liste = this.listeAvancementR[i].liste.concat(this.listeAvancementR[j].liste);
                    this.listeAvancementR.splice(j, 1);
                }
            }
        }
    
        // Eliminer la redondance dans la liste bleu
        for (let i = 0; i < this.listeAvancementB.length - 1; i++) {
            for (let j = i + 1; j < this.listeAvancementB.length; j++) {
                if (this.listeAvancementB[i].position === this.listeAvancementB[j].position) {
                    this.listeAvancementB[i].liste = this.listeAvancementB[i].liste.concat(this.listeAvancementB[j].liste);
                    this.listeAvancementB.splice(j, 1);
                }
            }
        }
    
        if (this.listeAvancementB[0]?.position == this.listeAvancementR[0]?.position) {
            this.carreaux[this.listeAvancementB[0].position].setGuerriersBleu(this.listeAvancementB[0].liste);
            this.carreaux[this.listeAvancementB[0].position].setGuerriersRouge(this.listeAvancementR[0].liste);
            let resultat = this.carreaux[this.listeAvancementB[0].position].bataille();
    
            switch (resultat) {
                case 1:
                    console.log("team bleu won battle");
                    this.listeAvancementR.shift();
                    for(let i = 0; i < this.listeAvancementR.length; i++) { this.listeAvancementR[i].position++; }
                    break;
                case 2:
                    console.log("team rouge won battle");
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
    

    victoire() {
        if (this.listeAvancementB[0]?.position > 5) {
            console.log("bleu team won  the game");   
        }
        
        if (this.listeAvancementR[0]?.position < 1) {
            console.log("red team won  the game");   
        }
    }
}