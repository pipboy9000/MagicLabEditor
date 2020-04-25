let msg = document.getElementById('msg');
let ui = document.getElementById('ui');
let canvas = document.getElementById('canvas');

export let showMsg = false;

function init() {
    ui.style.width = canvas.clientWidth + "px";
    ui.style.height = canvas.clientHeight + "px";
}
export function win() {
    msg.style.color = "#ff4d4da6";
    msg.style.fontSize = "220px";
    msg.innerHTML = '<i class="fas fa-heart"></i>';
    showMsg = true;
}

export function restart() {
    msg.innerHTML = '';
    showMsg = false;
}

window.addEventListener('load', init);