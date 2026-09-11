var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var angle = 0

requestAnimationFrame(mainLoop)

function mainLoop() {
    update();
    draw();

    requestAnimationFrame(mainLoop);
}

function update() {
    angle = angle + 0.03;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);//clear out drawing


    context.beginPath(); //start new drawing path
    context.arc(250, 250, 25, 0, 1 * Math.PI, false); // x,y,radius,draw start angle,draw end angle
    context.fillStyle = "yellow";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "yellow";
    context.stroke();

    context.beginPath(); //start new drawing path
    context.arc(250, 250, 25, 1 * Math.PI, 2 * Math.PI, false); // x,y,radius,draw start angle,draw end angle
    context.fillStyle = "orange";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "orange";
    context.stroke();

    context.save();
    context.translate(250, 250);
    context.rotate(angle);
    context.translate(-250, -250);

    context.beginPath();
    context.moveTo(280, 225);
    context.lineTo(280, 275);
    context.lineTo(320, 250);
    context.closePath();
    context.fillStyle = "red";
    context.fill();
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.moveTo(225, 220);
    context.lineTo(275, 220);
    context.lineTo(250, 180);
    context.closePath();
    context.fillStyle = "blue";
    context.fill();
    context.strokeStyle = "blue";
    context.stroke();

    context.beginPath();
    context.moveTo(220, 225);
    context.lineTo(220, 275);
    context.lineTo(180, 250);
    context.closePath();
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = "green";
    context.stroke();

    context.beginPath();
    context.moveTo(225, 280);
    context.lineTo(275, 280);
    context.lineTo(250, 320);
    context.closePath();
    context.fillStyle = "pink";
    context.fill();
    context.strokeStyle = "pink";
    context.stroke();

    context.restore();
}

// draw()