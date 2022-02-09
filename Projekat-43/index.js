const fs = require('fs');

fs.mkdir('data/samples/', { recursive: true }, err => {
    if (err) {
        console.log('Nije moguće napraviti strukturu direktorija!');
        return;
    }

    fs.writeFile('data/samples/sample.dat', 'Neki tekst!', err => {
        if (err) {
            console.log('Nije moguće napraviti datoteku i upisati sadrzaj!');
            return;
        }

        fs.readdir('data/samples/', (err, files) => {
            if (err) {
                console.log('Nije moguće učitati spisak datoteka u direktoriju');
                return;
            }

            for (let file of files) {
                let filePath = 'data/samples/' + file;

                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                        console.log('Greska pri učitanju datoteke: ', filePath);
                        return;
                    }

                    console.log('Sadrzaj datoteke: ', filePath, data);
                });
            }
        });
    });
})