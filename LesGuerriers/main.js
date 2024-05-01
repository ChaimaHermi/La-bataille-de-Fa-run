// Assurez-vous que les fichiers Guerrier.js, Nain.js, Elfe.js, ChefNain.js et ChefElfe.js sont inclus avant ce fichier

let nain = new window.Nain();
let elfe = new window.Elfe();

console.log('Nain[PV=' + nain.pv + '] tape sur Elfe[PV=' + elfe.pv + ']');
let degats = nain.attaque();
console.log('Dégâts : ' + degats);
elfe.defense(degats);
console.log('Elfe subit ' + degats + ' de dégâts et voit ses PV descendre à ' + elfe.pv + '.');

console.log('L’elfe se défend !');
console.log('Elfe[PV=' + elfe.pv + '] tape sur Nain[PV=' + nain.pv + ']');
degats = elfe.attaque();
console.log('Dégâts : ' + degats);
nain.defense(degats);
console.log('Nain subit ' + degats + ' de dégât et voit ses PV descendre à ' + nain.pv + '.');
