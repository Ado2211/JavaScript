/*function prikazPoruke(poruka) {
    console.log('Poruka je:' + poruka);
}

function prikazUnapredPoznatePoruke() {
    console.log('Ovo je poznata poruka!');
}

setTimeout(prikazPoruke, 5000, 'Ovo je test mehanizma!');
setTimeout(prikazUnapredPoznatePoruke, 3000);

console.log('Kraj programa!');

console.log("-----------------------");*/

function printNextWord(text) {
    if (text.length === 0) {
        return null;
    }

    if (!text.includes(' ')) {
        process.stdout.write(text);
        return null;
    }

    let reci = text.split(/ /);

    let prvaRec = reci.shift();

    process.stdout.write(prvaRec + ' ');

    return reci.join(' ');
}

function printText(text) {
    let ostatak = printNextWord(text);

    if (ostatak) {
        setTimeout(printText, 500, ostatak);
    }
}

printText('Ovo je tekst prikazan u timeoutu');

console.log("-----------------------");

function interval() {
    let broj = 0;

    function uvecajBroj() {
        broj++;
        console.log(broj)
    }

    let intervalId = setInterval(uvecajBroj, 5000);

    setTimeout(() => { clearInterval(intervalId); console.log('Prekid intervala!'); }, 5000);
}