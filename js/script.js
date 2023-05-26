console.log('JS OK');

//# PRELIMINARI
const priceForKm = 0.21;
const discountMinor = 0.8;
const discountOver = 0.6;
console.log(priceForKm, discountMinor, discountOver);

let priceKmDiscounted;
//# Chiedo all'utente le informazioni
const userKm = parseInt(prompt('Quanti Km vuoi percorrere?', 10));
const userAge = parseInt(prompt('Quanti anni hai?', 20));
console.log(userKm, userAge);

//# Calcolo della tariffa base
let basePriceKm = userKm * priceForKm;

//# Controllo l'età ed applico lo sconto
if(userAge < 18){
basePriceKm = basePriceKm * discountMinor;
} else if(userAge >= 65){
  basePriceKm = basePriceKm * discountOver;
}

//# Arrotondo a due decimali massimi
basePriceKm = basePriceKm.toFixed(2) + '€';

//# Stampo il prezzo finale 
console.log(basePriceKm);