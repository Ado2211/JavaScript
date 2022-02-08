const obecanje1 = new Promise((resolve, reject) =>{
    let suma = 0; 
    
    for (let i=0; i<10000000; i++) {
        suma+=i;
    }
    resolve(suma);
});

obecanje1.then(rezultat => {
    console.log('Stigao je rezultat obecanja: ', rezultat);
});
console.log('Stigli smo do ovog dijela');

//drugi primjer

const obecanje2 = new Promise((resolve, reject) => {
setTimeout(() => {
let broj = (Math.random() * 5).toFixed(0);

if ( broj <= 2) {
    reject('Dobijen je nedozvoljen broj!');
}

resolve(broj);
}, 5000);
});

obecanje2.then(
    broj => {
    console.log('Vracen je obecani broj i on je: ', broj);
},
greska => {
    console.log('Doslo je do greske: ', greska);
}
);