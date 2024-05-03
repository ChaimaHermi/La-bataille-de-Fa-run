class Nain extends Guerrier {
    constructor(equipe) {
        super('Nain', equipe);
        this.cout = 1; // Coût d'entraînement pour un Nain
    }

    defense(degats) {
        super.defense(degats / 2);
    }
}
window.Nain = Nain;
