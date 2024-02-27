let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

var img = new Image(),
    x = canvas.width,
    y = 0;

img.onload = randomizer;
img.src = "Red.png";   // load image

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  context.drawImage(img, x, y);                       // draw image at current position
}

function randomizer() {
    x -= 50;
    requestAnimationFrame(animate);
}
