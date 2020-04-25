let display = document.getElementById("recipe");

export let potions = [];
let level = {}

export function add(color) {

    if (level[color]) {
        level[color] += 1;
    } else {
        level[color] = 1;
    }

    potions.push(color);

    render();
}

export function restart() {
    potions = [];
    level = {};
    render();
}

function render() {

    display.innerHTML = '';

    if (potions.length == 0) {

        let el = document.createElement('i')

        el.classList = 'fas fa-vial  grey';

        display.appendChild(el);

        return;
    }

    for (let i = 0; i < potions.length; i++) {

        let el = document.createElement('i')

        el.classList = 'fas fa-vial  ' + potions[i];

        display.appendChild(el);
    }
}