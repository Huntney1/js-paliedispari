//?Pari e Dispari
//!L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//!Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
//!Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
//!(usando una funzione) Dichiariamo chi ha vinto.

/* 
* 1- Chiedere se si vuole scegliere pari o dispari;
* 2- Scegliere un numero da 1 a 5;
* 3- Generare un numero randomico da 1 a 5 per il pc;
* 4- Sommare i due Risultati;
* 5- SE scelgo pari e la somma è pari ho vinto
*  5.1- e SE scelgo dispari e la somma è dispari ho vinto
*  5.2- ALTRIMENTI ho perso
* 6- Dichiarare chi ha vinto
*/



let scelta = prompt('scegli se vuoi! pari o dispari');

let sceltaNum = parseInt(prompt('Inserisci un numero che va da 1 a 5'));

let sceltaPcRand = getRandomNum(1, 5);

let risultatoSomma = somma(sceltaNum, sceltaPcRand);

risultato(risultatoSomma,scelta);

console.log(sceltaNum)

function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(sceltaPcRand);

function somma (sceltaNum,sceltaPcRand){
    return sceltaNum + sceltaPcRand;
}
console.log(risultatoSomma)

function risultato (risultatoSomma,scelta){
    if(risultatoSomma % 2 == 0 && scelta == 'pari'){
        alert('hai vinto')
    }
    else if (risultatoSomma % 2 != 0 && scelta == 'dispari'){
        alert('hai vinto')
    }
    alert('hai perso')
}

