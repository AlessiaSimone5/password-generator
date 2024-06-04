'use strict'

const nomeUtente = prompt('inserisci il tuo nome');
const cognomeUtente = prompt('inserisci il tuo cognome');
const colorePreferito = prompt('inserisci il tuo colore preferito');

const password = nomeUtente + cognomeUtente + colorePreferito + '21'
console.log(password)


document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore-preferito').innerHTML = colorePreferito;


