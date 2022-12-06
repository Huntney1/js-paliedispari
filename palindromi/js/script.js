//?Palidromo e non Palindromo
//!Chiedere all’utente di inserire una parola Creare una funzione 
//!per capire se la parola inserita è palindroma

let parola =prompt('inserisci parola'); 
let array;
let reverse;

function Palindromo (parola) {
   array = parola.split("");
   reverse = array.reverse();
   
   return parola == reverse.join("") ? "  é palindromo " : " non è palindromo"
   }
   
 console.log (Palindromo(parola));