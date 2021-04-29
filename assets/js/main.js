/* Consegna: */

//1. chiedi all’utente il cognome
var cognome = prompt("Inserisci Cognome")

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var iscritti = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
//3. stampa la lista ordinata alfabeticamente
iscritti.push(cognome);
var iscrittiCopia = iscritti.slice();
var iscrittiSort = iscrittiCopia.sort()
document.getElementById("lista_ordinata").innerHTML = iscrittiSort;
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var posizione = iscrittiSort.indexOf(cognome) + 1;
console.log(posizione);