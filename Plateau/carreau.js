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
        if (this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0) {
            console.log("bataille entre les bleus: ", this.guerriersBleu, " et les rouges: ", this.guerriersRouge);
            while(this.guerriersBleu.length > 0 && this.guerriersRouge.length > 0) {
                for (let i = 0; i < this.guerriersBleu.length; i++) {
                    let degat = this.guerriersBleu[i]?.attaque();
                    this.guerriersRouge[0]?.RecevoirDegats(degat);
                    if (this.guerriersRouge[0]?.pointsDeVie <= 0) {
                        this.guerriersRouge?.shift()
                    }
                }
                
                for (let i = 0; i < this.guerriersRouge.length; i++) {
                    let degat = this.guerriersRouge[i]?.attaque();
                    this.guerriersBleu[0]?.RecevoirDegats(degat);
                    if (this.guerriersBleu[0]?.pointsDeVie <= 0) {
                        this.guerriersBleu?.shift()
                    }
                }
            }
            
            if (this.guerriersBleu.length == 0) {
                return 2;
            }
            if (this.guerriersRouge.length == 0) {
                return 1;
            }
        } else {
            return 0;
        }
    }
}