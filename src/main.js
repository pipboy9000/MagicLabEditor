import * as pot from './pot.js';
import * as recipe from './recipe.js';
import * as target from './target.js';
import * as levels from './levels.js';
import './style.css';

function setSegLength(e) {
    pot.setSegLength(e.target.value);
}

function setCornerRad(e) {
    pot.setCornerRad(e.target.value);
}

function setCornerAngle(e) {
    pot.setCornerAngle(e.target.value);
}

function setColor(e) {
    pot.setColor(e.target.value);
}

function setFade(e) {
    pot.setFade(e.target.value);
}

function restart() {
    pot.restart();
    recipe.restart();
}

function addBlue() {
    pot.addBlue();
}
function addRed() {
    pot.addRed();
}
function addGreen() {
    pot.addGreen();
}
function addOrange() {
    pot.addOrange();
}

//input functions
function init() {
    document.getElementById("segLength").addEventListener('input', setSegLength);
    document.getElementById("cornerRad").addEventListener('input', setCornerRad);
    document.getElementById("cornerAngle").addEventListener('input', setCornerAngle);
    document.getElementById("color").addEventListener('input', setColor);
    document.getElementById("fade").addEventListener('input', setFade);
    document.getElementById("restart").addEventListener('mousedown', restart);
    document.getElementById("addBlue").addEventListener('mousedown', addBlue);
    document.getElementById("addRed").addEventListener('mousedown', addRed);
    document.getElementById("addGreen").addEventListener('mousedown', addGreen);
    document.getElementById("addOrange").addEventListener('mousedown', addOrange);
    document.getElementById("save").addEventListener('click', pot.save);
    document.getElementById("getLevels").addEventListener('click', levels.log);

}

window.addEventListener('load', init);