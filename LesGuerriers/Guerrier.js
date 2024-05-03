class Guerrier {
    constructor(type, equipe) {
        this.type = type;
        this.equipe = equipe;
        this.force = 10;
        this.pv = 100;
        this.cout = 1; // Coût d'entraînement pour un guerrier de base
    }

    attaque() {
        let degats = 0;
        for (let i = 0; i < this.force; i++) {
            degats += Math.floor(Math.random() * 3 + 1);
        }
        return degats;
    }

    defense(degats) {
        this.pv -= degats;
        if (this.pv <= 0) {
            console.log('Le ' + this.constructor.name + ' est mort');
        }
    }
}
window.Guerrier = Guerrier;
