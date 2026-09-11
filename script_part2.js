var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var angle = 0;
var shapeangle = Math.PI;
var orbitangle1 = 0;
var orbitangle2 = Math.PI / 3;
var orbitangle3 = Math.PI / 6;
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
    shapeangle = shapeangle + 0.05;
    orbitangle1 = orbitangle1 - 0.03;
    orbitangle2 = orbitangle2 - 0.05;
    orbitangle3 = orbitangle3 - 0.02;

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
    context.rotate(orbitangle1);
    draworbit1();
    context.restore();

    context.save();
    context.rotate(orbitangle2);
    draworbit2();
    context.restore();

    context.save();
    context.rotate(orbitangle3);
    draworbit3();
    context.restore();

    context.rotate(shapeangle);

    drawshapes("red", 0);
    drawshapes("pink", Math.PI / 2);
    drawshapes("green", Math.PI);
    drawshapes("blue", -Math.PI / 2);

    context.restore();
    //context.restore();

}

function drawsuncenter() {
    context.save();
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
    context.restore();
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

function draworbit1() {
    context.save();

    context.beginPath();

    context.arc(0, 0, 100, 0, 2 * Math.PI);

    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.arc(100, 0, 5, 0, 2 * Math.PI);
    context.strokeStyle = "white";
    context.stroke();
    context.fillStyle = "white";
    context.fill();

    context.restore();
}

function draworbit2() {
    context.save();

    context.beginPath();

    context.arc(0, 0, 115, 0, 2 * Math.PI);

    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.arc(115, 0, 5, 0, 2 * Math.PI);
    context.strokeStyle = "white";
    context.stroke();
    context.fillStyle = "white";
    context.fill();

    context.restore();
}

function draworbit3() {
    context.save();

    context.beginPath();

    context.arc(0, 0, 125, 0, 2 * Math.PI);

    context.strokeStyle = "black";
    context.stroke();

    context.beginPath();
    context.arc(125, 0, 5, 0, 2 * Math.PI);
    context.strokeStyle = "white";
    context.stroke();
    context.fillStyle = "white";
    context.fill();

    context.restore();
}