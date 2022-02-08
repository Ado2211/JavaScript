const obecanje1 = new Promise((resolve, reject) => {
    let suma = 0;

    for (let i = 0; i < 10000000; i++) {
        suma += i;
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

        if (broj <= 2) {
            reject('Dobijen je nedozvoljen broj!');
        }

        resolve(broj);
    }, 3000);
});

obecanje2.then(
    broj => {
        console.log('Vracen je obecani broj i on je: ', broj);
    },
    greska => {
        console.log('Doslo je do greske: ', greska);
    }
);

// ILI

obecanje2
    .then(broj => console.log(broj))
    .catch(greska => console.log('Doslo je do greske: ', greska));

obecanje2
    .then(broj => console.log('Ovaj broj uvecan za 1 je: ', Number(broj) + 1));

    //treći primjer

    const o1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Mapa je uspesno ucitana!');
        }, 2000);
    });

    const o2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Podaci o igracu su ucitani!');
        }, 750);

        setTimeout(() => {
            reject('API je diskonektovan!');
        }, 250);
    });

    const o3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Teksture za igru su preuzete i ucitane!');
        }, 3500);
    });

    o1.then(rezultat => console.log(rezultat), greska => console.log('Doslo je do greske: ', greska));
    o2.then(rezultat => console.log(rezultat), greska => console.log('Doslo je do greske: ', greska));
    o3.then(rezultat => console.log(rezultat), greska => console.log('Doslo je do greske: ', greska));

    Promise.all([ o1, o2, o3])
    .then(
        rezultati => {
            console.log('Igra pocinje!');
        },
        greske => {
            console.log('Doslo je do neke greske. Izvjestaji: ',greske);
        }
    )