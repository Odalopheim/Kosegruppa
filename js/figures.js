const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// funksjon for rektangel
rectangle = function(height, width, x, y, mode, color) {
  ctx.fillStyle = color, mode;
  ctx.fillRect(x, y, width, height);
}
//funksjon for sirkel
circle = function(radius, mode, color, x, y) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true); // Outer circle
  if (mode == "solid") {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}
//svg circle
const svg = document.getElementById("svg");
svg.setAttribute("width", "350");
svg.setAttribute("height", "200");

function circle(radius, mode, color) {
console.log("tegn en sirkel");
const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
circle.setAttribute("cx",radius);
circle.setAttribute("cy",radius);
circle.setAttribute("r",radius);
if (mode == "outline") {
    circle.setAttribute("stroke", color);
} else {
    circle.setAttribute("fill",color);
}

return circle;
}
// svg rectangle
function rectangle(x, y, width, height, style) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("style", style);

    document.getElementById("svg").appendChild(rect);
}
