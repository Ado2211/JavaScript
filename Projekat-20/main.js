window.addEventListener('load', main);

function main() {
    // http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php
    // Asinhroni zahtjev upucen na taj link
    // putem HTTP POST metoda 
    // U simuliranom formularu moramo dodati polja:
    // - key  = e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4
    // - action = ime funkcije koju zahtjevamo
    // +...
    // kada stigne odgovor, on u JSON obliku -> konvertujemo u objekat iz objekta da pogledamo
    // vrijednost type (succes, error, warning) - data -> obrada na adekvatan način!

    //getSaleStatistics

    let form = new FormData();
    form.append('key', 'e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4');
    form.append('action', 'getSaleStatistics');

    fetch('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php',
        {
            method: 'POST',
            body: form
        }
    ).then(res => res.json())
        .then(res => {
            let app = document.getElementById('app');

            app.innerHTML = '';

            if (res.type !== 'success') {
                app.innerHTML = 'Doslo je do neke greske: ' + res.code;
                return;
            }

            app.innerHTML = 'Ukupno prodaja: ' + res.data.total_sales + '<br>'
                + 'Najmanje prodato: ' + res.data.minimum_sold_quantity + '<br>'
                + 'Najviše prodato: ' + res.data.maximum_sold_quantity + '<br>'
                + 'Najmanja cijena: ' + res.data.minimum_sale_price + '<br>'
                + 'Najveća cijena: ' + res.data.maximum_sale_price + '<br>'
                + 'Najprodavaniji artikal: ' + res.data.most_sold_article_name;
        });
}