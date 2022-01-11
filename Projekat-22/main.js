window.addEventListener('load', main);

function main() {
    let holder = document.getElementById('holder');

    holder.style.border = '2px solid #000';
    holder.style.minHeight = '250px';

    let naslov = document.createElement('h1');
    naslov.style.color = '#001188';
    naslov.style.borderBottom = '2px solid #001188';
    naslov.innerText = 'Primjer upravljanja dokumentom';

    holder.appendChild(naslov);

    let paragraf1 = document.createElement('p');
    paragraf1.style.textAlign = 'center';
    paragraf1.innerHTML = 'Ovo je <u>prvi</u> paragraf';
    holder.appendChild(paragraf1)

    let paragraf2 = document.createElement('p');
    paragraf2.style.textAlign = 'center';
    paragraf2.innerHTML = 'Ovo je <u>drugi</u> paragraf';
    holder.appendChild(paragraf2)

    let paragraf3 = document.createElement('p');
    paragraf3.style.textAlign = 'center';
    paragraf3.innerHTML = 'Ovo je <u>treći</u> paragraf';
    holder.appendChild(paragraf3)

    let dugme = document.createElement('button');
    dugme.innerText = 'Izvrši funkciju';
    dugme.addEventListener('click', dugmeClick);
    holder.appendChild(dugme);

    let remove = document.createElement('button');
    remove.innerText = 'Obriši';
    remove.addEventListener('click', removeClick);
    holder.appendChild(remove);

}

function dugmeClick() {
    /*
    let holder = document.getElementById('holder');

    let paragrafi = holder.querySelectorAll('p');

    let drugiParagraf = paragrafi[1] ;

    drugiParagraf.style.color = 'red';*/

    document.querySelectorAll('#holder > p')
    [1].style.color = 'red';

}

function removeClick() {
    let holder = document.getElementById('holder');
    let paragrafi = holder.querySelectorAll('p');

    for (let paragraf of paragrafi) {
    holder.removeChild(paragraf);
    }
}