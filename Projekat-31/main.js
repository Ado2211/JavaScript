function hidePopup() {
    let popup = document.getElementById('gallery-preview');
    popup.classList.remove('visible');
}
function init() {
    bindGalleryItems();
    bindKeyDown();
}

function bindGalleryItems() {
    let images = document.querySelectorAll('.gallery a');

    for (let image of images) {
        image.addEventListener('click', showImage);
    }
}

function showImage(event) {
    event.preventDefault();

    let link = event.target.parentElement.href;

    let image = document.querySelector('#gallery-preview img')

    image.src = link;

    let popup = document.getElementById('gallery-preview');

    popup.classList.add('visible');
}

function bindKeyDown() {
    window.addEventListener('keydown', keyDownHandler);
}

function keyDownHandler(event) {
    switch (event.key) {
        case "Escape":
            hidePopup();
            break;
    }
}


window.addEventListener('load', init);