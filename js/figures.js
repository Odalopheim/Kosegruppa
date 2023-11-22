

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// funksjon for rektangel
function drawRectangle(height, width, x, y, mode, color) {
  ctx.fillStyle = color;
  if (mode === "outline") {
  // Set the outline color
      ctx.strokeStyle = color;
  // Draw the rectangle's outline
      ctx.strokeRect(x, y, width, height);
  } else {
  // Draw the filled rectangle
      ctx.fillRect(x, y, width, height);
  }}
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

  // funksjon for rotering
function rot(deg) {
      ctx.rotate((deg * Math.PI) / 180);
  }

  //funksjon for skalering
  function scale(x, y){
    ctx.scale(x, y);
  }


//funsjon for elipse
function ellipse(color, lineWidth, x, y, stretchX, stretchY, startAngle, endAngle) {
  for (var angle = startAngle; angle < endAngle; angle += Math.PI / 180) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + Math.cos(angle) * stretchX, y + Math.sin(angle) * stretchY)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = color
    ctx.stroke()
    ctx.closePath()
  }
}

//svg circle
const svg = document.getElementById("svg");
svg.setAttribute("width", "350");
svg.setAttribute("height", "200");

function circleSVG(x, y, r, style){
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", r);
  circle.setAttribute("style", style);
  

  document.getElementById("svg").appendChild(circle);
  
}
//SVG rectangle
function rectangleSVG(x, y, width, height, style, mode, rotation, fillColor, strokeColor) {
  var svgns = "http://www.w3.org/2000/svg";
  var svg = document.getElementById("svg");

  var rect = document.createElementNS(svgns, "rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("style", style);
  rect.setAttribute("transform", `rotate(${rotation} ${x + width / 2} ${y + height / 2})`);

  if (mode === "solid") {
      rect.setAttribute("fill", fillColor);
  } else {
      rect.setAttribute("stroke", strokeColor);
      rect.setAttribute("fill", "none");
  }

  svg.appendChild(rect);
}

//elipse svg
const ellipseContainer = document.getElementById("svg");
ellipseContainer.setAttribute("width", "350");
ellipseContainer.setAttribute("height", "200");

function createEllipse(x, y, rx, ry, style, rotation) {
  var ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  ellipse.setAttribute("cx", x);
  ellipse.setAttribute("cy", y);
  ellipse.setAttribute("rx", rx);
  ellipse.setAttribute("ry", ry);

  if (rotation) {
    ellipse.setAttribute("transform", `rotate(${rotation} ${x} ${y})`);
  }

  ellipse.setAttribute("style", style);

  document.getElementById("svg").appendChild(ellipse);
}