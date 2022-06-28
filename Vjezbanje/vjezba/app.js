function pomnozi() {
let prviBroj = document.getElementById('prviBroj');

let drugiBroj = document.getElementById('drugiBroj');

let score = prviBroj.value * drugiBroj.value;

let rezultatJe = document.getElementById('rezultat');
rezultatJe.innerText = score;

}

console.log(Math)