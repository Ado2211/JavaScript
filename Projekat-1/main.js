function dodajIme() {
    let ime = document.querySelector('#ime').value;

    let sablon = `<article class="osoba">
        <header>
            <h2>${ime}</h2>
            </header>
            <p>Ovo su podaci o osobi $ {ime}.</p>
            </article>`;

    document.querySelector('#imena').innerHTML += sablon;
}

function init() {
    let btn = document.querySelector('#dodaj-ime-dugme');

    btn.addEventListener('click', dodajIme);
}


window.addEventListener('load', init);