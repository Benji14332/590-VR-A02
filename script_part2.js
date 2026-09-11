var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var angle = 0;
var xsun = 250;
var ysun = 250;
// var speed = 3;

requestAnimationFrame(mainLoop);

function mainLoop() {
    update();
    draw();

    requestAnimationFrame(mainLoop);
}

function update() {
    angle = angle + 0.03;

    xsun = 250 + 100 * Math.cos(angle);
    ysun = 250 + 100 * Math.sin(angle);

}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);//clear out drawing
    context.fillStyle = "#4B9CD3"; //carolina Blue!
    context.fillRect(0, 0, canvas.width, canvas.height); //fill backgournd with color

    context.save();
    context.translate(xsun, ysun);

    drawsuncenter();

    context.save();

    context.rotate(angle);
    drawshapes("red", 0);
    drawshapes("pink", Math.PI / 2);
    drawshapes("green", Math.PI);
    drawshapes("blue", -Math.PI / 2);

    context.restore();
    context.restore();

}

function drawsuncenter() {
    context.beginPath();

    context.arc(0, 0, 25, 0, Math.PI, false);

    context.fillStyle = "Yellow";
    context.fill();

    context.lineWidth = 1;
    context.strokeStyle = "Yellow";
    context.stroke();

    context.beginPath();

    context.arc(0, 0, 25, Math.PI, 2 * Math.PI, false);

    context.fillStyle = "Orange";
    context.fill();

    context.lineWidth = 1;
    context.strokeStyle = "Orange";
    context.stroke();
}

function drawshapes(color, rotation) {
    context.save();
    context.rotate(rotation);

    context.beginPath();

    context.moveTo(30, -25);
    context.lineTo(30, 25);
    context.lineTo(70, 0);

    context.closePath();

    context.fillStyle = color;
    context.fill();

    context.strokeStyle = color;
    context.stroke();

    context.restore();
}