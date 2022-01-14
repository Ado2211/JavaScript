function init() {
    let slozioSe = localStorage.getItem('slozioSe');

    if (slozioSe === null) {
        prikaziCuvanjePodatakaPopup();
    }

    let boja = localStorage.getItem('boja');

    if (boja === null) {
        boja = '#000000';
    }

    document.getElementById('bojaTeksta').value = boja;
    document.querySelector('body').style.color = boja;
}
window.addEventListener('load', init);

function prikaziCuvanjePodatakaPopup() {
    let d = document.getElementById('cuvanjePodataka');
    d.classList.remove('hidden');
}

function sakrijCuvanjePodatakaPopup() {
    let d = document.getElementById('cuvanjePodataka');
    d.classList.add('hidden');
}

function slazemSe() {
    localStorage.setItem('slozioSe', 'true');

    sakrijCuvanjePodatakaPopup();
}

function neSlazemSe() {
    localStorage.removeItem('slozioSe');
    window.location = 'https://www.google.com';
}

function promenjenaBoja() {
    let stara = document.querySelector('body').style.color;
    let nova = document.getElementById('bojaTeksta').value;

    if (stara == nova) {
        return;
    }
    document.querySelector('body').style.color = nova;

    localStorage.setItem('boja', nova);
}

function resetSvega() {
    localStorage.clear();

    window.location.reload();
}