
class ChefElfe extends Elfe {
    constructor(equipe) {
        super(equipe);
        this.type = 'ChefElfe';
        this.cout = 4; // Coût d'entraînement pour un Chef Elfe
    }
}

window.ChefElfe = ChefElfe;
