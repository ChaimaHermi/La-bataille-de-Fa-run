class Elfe extends Guerrier {
    constructor(equipe) {
        super('Elfe', equipe);
        this.force *= 2;
        this.cout = 2; // Coût d'entraînement pour un Elfe
    }
}

window.Elfe = Elfe;
