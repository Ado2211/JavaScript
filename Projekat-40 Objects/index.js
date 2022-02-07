const student = {
    indeks: 2008314324,
    ime: 'Adnan',
    prezime: 'Mahmić',
    ocjene: [
        { predmet: 'Programiranje 1', ocjena: 10 },
        { predmet: 'baze podataka', ocjena: 10 },
        { predmet: 'Osnove ekonomije', ocjena: 9 },
        { predmet: 'Informatika', ocjena: 10 },
        { predmet: 'Kriptologija', ocjena: 8 },
    ]
};

student.indeks = '2008/314324';
student.ocjene.push( { predmet: 'Programiranje 2', ocjena: 10} );

console.log(student);

const kljuceviObjekta = Object.getOwnPropertyNames(student);

for ( let kljuc of kljuceviObjekta) {
    let podatak = student[kljuc];
    
    console.log('naziv kljuca je : ', kljuc, 'i pod tim kljucem je: ',podatak);
}

console.log("-----------------------");

const jsonZapisStudenta = JSON.stringify(student);

console.log(jsonZapisStudenta);