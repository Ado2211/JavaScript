const fs = require( 'fs');

async function napraviSampleSadrzaj() {
    fs.promises.mkdir('data/samples/', { recursive: true })
    .then(result => {
        console.log('Napravljeni direktoriji', result);
    })
    .catch(err => {
        console.log('Greska prilikom pravljenja direktorija', err);
    })
}
napraviSampleSadrzaj()

/*async function napraviSampleSadrzaj() {
    await fs.promises.mkdir('data/samples/', { recursive: true });
    await fs.promises.writeFile('data/samples/sample1.dat', 'Neki tekst 1');
    await fs.promises.writeFile('data/samples/sample2.dat', 'Neki tekst 2');
    await fs.promises.writeFile('data/samples/sample3.dat', 'Neki tekst 3');
    const files = await fs.promises.readdir('data/samples/');
    for (let file of files) {
        let filePath = 'data/samples/' + file;
        let data = await fs.promises.readFile(filePath, 'utf-8');
        console.log('Sadrzaj fajla : ', filePath, data);
    }
}

napraviSampleSadrzaj()*/