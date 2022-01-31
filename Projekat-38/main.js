var tipke = ["AC", "/", "*", "&larr;", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", ".", "(", "0", ")", "="];

function dodaj(parametar) {
    let display = document.getElementById('display');

    display.innerText = tipke[parametar-1]
}