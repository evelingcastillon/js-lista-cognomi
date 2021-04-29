/* Consegna: */

//1. chiedi all’utente il cognome
var cognome = prompt("Inserisci Cognome")

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var iscritti = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
iscritti.push(cognome);
//3. stampa la lista ordinata alfabeticamente
document.getElementById("lista_ordinata").innerHTML = iscritti.sort();
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
