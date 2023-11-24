//Draw3ing Basics

//setuup the cancvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// store i,ages in variables
let htmlimg = document.getElementById("html-img");

// lets draw some stuff using the graphics context (ctx)

// draw rectangles
//set the outline (stroke) and fill colors
// use any valid css colors: name rgb(), rgba(, hex #FF0033)

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50); // Draw an outlined rctangle

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50); // Draw a filled square

//draw text
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "red";
ctx.fillText("Hello Canvas!", 350, 100); // outlined text

ctx.font = "30px Arial";
ctx.strokeStyle = "blue";
ctx.strokeText = ("Hello Canvas!", 350, 100); //outlined text

// draw lines
ctx.lineWidth = 4;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(500, 200); // set drawing location
ctx.lineTo(700, 150); // draw a line from the current location to (700, 150)
ctx.lineTo(600, 100);
ctx.stroke(); // Draw the specified path

// DRAW POLYGON  {
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(500, 400);
ctx.lineTo(700, 350);
ctx.lineTo(600, 300);
ctx.closePath(); // Go back to start of path
ctx.fill(); // Draw the specified path

// CIRCLES / ARCS
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI); // circle ( 0 to 2*pi) with center (100, 500) and radius 50
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(200, 500, 20, 0, 2 * Math.PI); //circle ( 0 to 2*pi) with center (250, 500) and radius 30
ctx.fill();

ctx.fillStyle = "FFFF00";
ctx.beginPath();
ctx.arc(250, 500, 30, 0, Math.PI); // half circle ( 0 to pi) with center (250,500) and radius 20
ctx.fill();

// draw images
ctx.drawImage(htmlimg, 200, 200); // draw image with top left corner of (200,200)
ctx.drawImage(htmlimg, 200, 350, 50, 50); // Draw image with the top left corner of (200, 350) scale to 50 x 50
