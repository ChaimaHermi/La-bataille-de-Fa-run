class Nain extends Guerrier {
    constructor() {
        super();
        this.cout = 1; // Coût d'entraînement pour un Nain
    }

    defense(degats) {
        super.defense(degats / 2);
    }
}

window.Nain = Nain;
