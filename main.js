let canvas = document.getElementById("canvas");
let count = 0;
let context = canvas.getContext("2d");

for (count == 4) {
var img = new Image(),
    x = canvas.width,
    y = 0,
    count += 1;
}

img.onload = randomizer;
img.src = "Red.png";   // load image

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  context.drawImage(img, x, y);               
if (x > 0) {
    randomizer();
}
    // draw image at current position
}

function randomizer() {
    x -= 10;
    requestAnimationFrame(animate);
}
