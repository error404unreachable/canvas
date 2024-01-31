const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

function paintRect() {
c.fillStyle = "red";
c.fillRect(0, 0, 10, 10);
}
