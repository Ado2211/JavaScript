window.addEventListener('load', main);

function main() {
    let struktura = {
rezultat: 1,
koraci: 0
};

delegat(funA, struktura, 7);
delegat(funB, struktura, 2);
delegat(funA, struktura, 4);

console.log(struktura)
}

function funA(a, b) {
a.rezultat += b;
}

function funB(a, b) {
   a.rezultat -= b;
}

function delegat(funkcija, a, b) {
    a.koraci += 1;

    funkcija(a, b);
}