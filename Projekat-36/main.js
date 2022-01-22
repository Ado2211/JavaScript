let niz = [1, 3, -6, 11];

console.log(niz);

function transform(x) {
    return x * 2 + 1;
}

let niz2 = niz.map(transform);

console.log(niz2);

let niz3 = [3, 5, 2, 4];

/*let pocetno = 2;

function postupak(korak, x) {
    return korak * x;
}

let rezultat = niz3.reduce(postupak, pocetno);

console.log(rezultat);   */

let r = niz3.reduce((k,x) => k*x, 2);

console.log(r)