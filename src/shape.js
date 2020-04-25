import { ctx, halfWidth, halfHeight } from './canvas';

export default class Shape {

    angle = 0;
    randLineLength = 0;
    randCornerRadius = 0;

    constructor(lineLength, cornerRadius, cornerAngle) {
        ctx.fillStyle = "black"
        ctx.strokeStyle = "#29ff7e"
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        this.lineLength = lineLength;
        this.cornerRadius = cornerRadius;
        this.cornerAngle = cornerAngle;
        this.randCornerAngle = 0;
        this.colorChangeRate = 50;
        this.fade = 0.07;

        //start position
        this.startX = halfWidth;
        this.startY = halfHeight;

        this.x = startX;
        this.y = startY;

        //points to calculate center
        this.points = [];

        //"cam"
        this.camPosX = startX;
        this.targetCamPosX = 300;

        this.camPosY = startY;
        this.targetCamPosY = 300;
    }

    static drawPoint(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 15, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    draw() {

    }
}