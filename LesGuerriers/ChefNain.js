class ChefNain extends Nain {
    constructor(equipe) {
        super(equipe);
        this.type = 'ChefNain';
        this.cout = 3; // Coût d'entraînement pour un Chef Nain
    }
}

window.ChefNain = ChefNain;
