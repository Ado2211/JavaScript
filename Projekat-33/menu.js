window.addEventListener('load', init);

function init() {
    let items = document.querySelectorAll('.item');

    for (let item of items) {
        item.addEventListener('contextmenu', showItemContextMenu);
    }

    window.addEventListener('click', closeContextMenu);
}

function closeContextMenu() {
    let menu = document.getElementById('context-menu');

    if (menu) {
        menu.remove();
    }
}

function showItemContextMenu(event) {
    event.preventDefault();

    closeContextMenu();

    if (event.target.dataset.disableMenu == 'true') {
        return;
    }

    let menu = document.createElement('div');
    menu.setAttribute('id', 'context-menu');
    menu.style.left = (event.clientX - 2) + 'px';
    menu.style.top = (event.clientY - 2) + 'px';

    let deleteAction = document.createElement('div');
    deleteAction.classList.add('action');
    deleteAction.innerText = 'Delete';
    deleteAction.addEventListener('click', () => {
     event.target.remove();
    });
    menu.appendChild(deleteAction);

    let markRedAction = document.createElement('div');
    markRedAction.classList.add('action');
    markRedAction.innerText = 'Mark as red';
    markRedAction.addEventListener('click', () => {
     event.target.style.backgroundColor = 'red';
    });
    menu.appendChild(markRedAction);

    let markGreenAction = document.createElement('div');
    markGreenAction.classList.add('action');
    markGreenAction.innerText = 'Mark as green';
    markGreenAction.addEventListener('click', () => {
     event.target.style.backgroundColor = 'green';
    });
    menu.appendChild(markGreenAction);

    document.body.appendChild(menu);
}

