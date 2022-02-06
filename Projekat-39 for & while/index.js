for ( let broj = 5 ; broj < 14; broj += 3) {
    //INICIJALIZACIJA BROJACA ; USLOV ZA PONAVLJANJE ; PROMJENA BROJACA
    console.log(broj);
}

for (let i = 100; i > -50 ; i-= 6) {
    console.log(i);
}

console.log("-----------------------");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("-----------------------");

let niz = [ 'Zenica', 'Sarajevo', 'Mostar', 'Maglaj', 'Kakanj'];

for ( let indeks = 0 ; indeks < niz.length ; indeks++) {
    let grad = niz[ indeks ];
    let duzinaNaziva = grad.length;
    
    console.log(grad, duzinaNaziva);
}

console.log("-----------------------");

for ( let grad of niz ) {
    let duzinaNaziva = grad.length;
    console.log(grad, duzinaNaziva);
}

console.log("-----------------------");

for ( let [ indeks, grad] of niz.entries() ) {
    let duzinaNaziva = grad.length;
    console.log(indeks, grad, duzinaNaziva);
}

console.log("-----------------------");

let suma = 0;

for ( let grad of niz ) {
    suma += grad.length; 
}

let srVr = suma / niz.length;

console.log('Prosječna dužina naziva grada je ', srVr);

console.log("--------------------------------------------");

const tajniBroj = 7;

while ( true ) {
    let pogodjeniBroj = (Math.random() * (10-1) +1).toFixed(0);
    
    console.log('Pokusavamo sa brojem', pogodjeniBroj);
    
    if (pogodjeniBroj == tajniBroj ) {
        break;
    }
}

console.log("--------------------------------------------");

let pogodak = 0;

while ( pogodak != tajniBroj) {
    pogodak = (Math.random() * (10-1) +1).toFixed(0);

    console.log('Pokusavamo sa brojem', pogodak)
}

console.log("--------------------------------------------");

for ( let grad of niz) {
    console.log('Provjeravamo grad: ', grad);

    if ( grad.includes('l') ) {
        break;
    }
}

console.log("--------------------------------------------");