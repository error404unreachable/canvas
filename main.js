let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");


var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";


context.fillRect(0, 0, 100, 100);
