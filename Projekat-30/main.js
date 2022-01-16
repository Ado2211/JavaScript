
function setSkala(idSkale, vrednost) {
    var merenje = (vrednost * 100).toFixed(0);
    var boja = 255 - (vrednost * 255).toFixed(0);

    var ugao = merenje * 180 / 100 - 90;
    ugao = ugao.toFixed(0);

    var skala = document.getElementById(idSkale);
    skala.style.setProperty('--ugao', ugao + 'deg');
    skala.style.setProperty('--boja', boja);
}

function novoMerenje() {
    setSkala('skala-1', Math.random());
    setSkala('skala-2', Math.random());
}

setInterval(novoMerenje, 1000);
