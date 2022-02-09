const fs = require('fs');

fs.mkdirSync('data/samples/', { recursive: true});
fs.writeFileSync('data/samples/sample1.dat', 'neki tekst 1');
fs.writeFileSync('data/samples/sample2.dat', 'neki tekst 2');
fs.writeFileSync('data/samples/sample3.dat', 'neki tekst 3');
const files = fs.readdirSync('data/samples/');
for ( let file of files) {
    let filePath = 'data/samples/' + file;
    let data = fs.readFileSync(filePath, 'utf-8');
    console.log('sadrzaj datoteke: ',filePath, data);
}