// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo   PROVO A STAMPARE DOPO.


let number = parseInt(prompt('Inserisci numero'));

if (number % 2 === 0) {
    console.log(number);

} else {
    let nextNumber = number + 1;
    console.log(nextNumber)
}

