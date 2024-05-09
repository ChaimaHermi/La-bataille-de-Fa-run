class Carreau {
    constructor() {
        this.guerriersBleu = [];
        this.guerriersRouge = [];
    }

    setGuerriersBleu(guerriers) {
        this.guerriersBleu = guerriers;
    }

    setGuerriersRouge(guerriers) {
        this.guerriersRouge = guerriers;
    }

    bataille() {
        console.log("bataille entre les bleus: ", this.guerriersBleu, " et les rouges: ", this.guerriersRouge);
        
        while (this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0) {
            for (let i = 0; i < this.guerriersBleu.length; i++) {
                let degat = this.guerriersBleu[i].attaquer();
                this.guerriersRouge[0]?.recevoirDegats(degat);
                let pvPercentage = this.guerriersBleu[i]?.pv;
                let color = pvPercentage < 50 ? 'red' : '#4caf50';
                let imgSrc;
                switch (this.guerriersBleu[i].type) {
                    case 'Nain':
                        imgSrc = '../jeu java script/Assets/NainBleu.jpg';
                        break;
                    case 'ChefNain':
                        imgSrc = '../jeu java script/Assets/ChefNainBleu.jpg';
                        break;
                    case 'Elfe':
                        imgSrc = '../jeu java script/Assets/ElfBleu.jpg';
                        break;
                    case 'ChefElfe':
                        imgSrc = '../jeu java script/Assets/ChefElfBleu.jpg';
                        break;
                }
                this.element.innerHTML += `
                    <img id ="imgC" src="${imgSrc}" alt="${this.guerriersBleu[i].type}">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${pvPercentage}%; background-color: ${color};"></div>
                    </div>
                    <br>`;
                if (this.guerriersRouge[0]?.pv <= 0) {
                    if (this.guerriersRouge.length > 1) {
                        this.guerriersRouge[1].recevoirDegats(-this.guerriersRouge[0]?.pv);
                    }
                    this.guerriersRouge.shift();
                }
            }
        
            console.log('equipe rouge : ', this.guerriersRouge)
        
            for (let i = 0; i < this.guerriersRouge.length; i++) {
                let degat = this.guerriersRouge[i].attaquer();
                this.guerriersBleu[0]?.recevoirDegats(degat);
                let pvPercentage = this.guerriersRouge[i]?.pv;
                let color = pvPercentage < 50 ? 'red' : '#4caf50';
                let imgSrc;
                switch (this.guerriersRouge[i].type) {
                    case 'Nain':
                        imgSrc = '../jeu java script/Assets/NainRouge.jpg';
                        break;
                    case 'ChefNain':
                        imgSrc = '../jeu java script/Assets/ChefNainRouge.jpg';
                        break;
                    case 'Elfe':
                        imgSrc = '../jeu java script/Assets/ElfRouge.jpg';
                        break;
                    case 'ChefElfe':
                        imgSrc = '../jeu java script/Assets/ChefElfRouge.jpg';
                        break;
                }
                this.element.innerHTML += `
                    <img id ="imgC" src="${imgSrc}" alt="${this.guerriersRouge[i].type}">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${pvPercentage}%; background-color: ${color};"></div>
                    </div>
                    <br>`;
                if (this.guerriersBleu[0]?.pv <= 0) {
                    if (this.guerriersBleu.length > 1) {
                        this.guerriersBleu[1].recevoirDegats(-this.guerriersBleu[0]?.pv);
                    }
                    this.guerriersBleu.shift();
                }
            }
        
            console.log('Equipe bleu', this.guerriersBleu)
        }
        
        if (this.guerriersBleu.length == 0) {
            console.log('Equipe rouge a gagné la bataille', this.guerriersRouge)
            //this.element.innerHTML += 'Equipe rouge a gagné la bataille<br>';
            return 2;
        }
        if (this.guerriersRouge.length == 0) {
            console.log('equipe bleuu a gagné la bataille ', this.guerriersBleu)
            //this.element.innerHTML += 'Equipe bleue a gagné la bataille<br>';
            return 1;
        }
        
        return 0
    }
    
}
