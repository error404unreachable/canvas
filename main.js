let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var key = new Image(),
    x = canvas.width,
    y = 0;

key.onload = animate;
key.src = "Red.png";   // load image

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
  context.save();
  context.rotate(180*Math.PI/180);
  context.drawImage(key, x, y);               
  context.restore();
  x -= 4;
  if (x > 250) requestAnimationFrame(animate)  
    // draw image at current position
}
