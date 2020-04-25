import * as input from './input.js';

export var ctx, canvas;

export var width, height, halfWidth, halfHeight;

export var camPosX = 300;
var targetCamPosX = 300;

export var camPosY = 450;
var targetCamPosY = 450;

export function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(-halfWidth + camPosX, -halfHeight + camPosY, width, height);
}

export function center(x, y) {
    targetCamPosX = x;
    targetCamPosY = y;
}

export function draw() {
    let dx = (targetCamPosX - camPosX) / 5;
    let dy = (targetCamPosY - camPosY) / 5;
    camPosX += dx;
    camPosY += dy;

    input.translate(dx, dy);

    ctx.setTransform(
        1,
        0,
        0,
        1,
        -camPosX + halfWidth,
        -camPosY + halfHeight
    );
}

function init() {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    width = canvas.width;
    height = canvas.height;
    halfWidth = canvas.width / 2;
    halfHeight = canvas.height / 2;
    ctx = canvas.getContext("2d");
}

init();