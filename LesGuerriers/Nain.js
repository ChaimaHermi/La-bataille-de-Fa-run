class Nain extends Guerrier {
    constructor(equipe) {
        super('Nain', equipe);
        this.cout = 1; // Coût d'entraînement pour un Nain
    }

    RecevoirDegats(degats) {
        super.RecevoirDegats(degats / 2);
    }
}
window.Nain = Nain;