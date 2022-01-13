// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

/*
ESERCIZIO CON FOR
- MAGARI PROVO A STAMPARE DOPO.


let number;

let sum = 0;

for (let i = 0; i < 5; i++) {
    number = parseInt(prompt('Inserisci un numero'))
    console.log(number)
    sum += number;
}
console.log(sum)

*/

// ESERCIZIO CON WHILE PROVARE A STAMPARE DOPO

let number;

let sum = 0;

let i = 0;
while (i < 5) {
    number = parseInt(prompt('Inserisci un numero'))
    console.log(number);
    sum += number;
    i++;
}


console.log(sum)