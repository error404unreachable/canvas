let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let xPos = 0;

function drawKeys() {
 for (i = 0; i < 9; i++) {
  var key = new Image(),
    x = xPos;
    y = 0;
    xPos += 25;
 }
 key.src = "Red.png";
 key.onload => requestAnimationFrame("animate");
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  context.rotate(180);
  context.drawImage(key, x, y);
  // x -= 4;
  if (x > 250) requestAnimationFrame(animate)  
    // draw image at current position
}
