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

//funksjon for trekant
function triangles(hx1, hy1, hx2, hy2, hx3, hy3, length, color, retning, skygge){
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  if (retning == "v") {
    let height = length * Math.cos(Math.PI / 6);
    
    ctx.beginPath();
    ctx.moveTo(hx1 - height, hy1);
    ctx.lineTo(hx2, hy2);
    ctx.lineTo(hx3, hy3);
    ctx.closePath();
  }
  else{
    let width = length * Math.cos(Math.PI / 6);
        
    ctx.beginPath();
    ctx.moveTo(hx1, hy1);
    ctx.lineTo(hx2 - width, hy1 + (length/2) );
    ctx.lineTo(hx3 - width, hy1 - (length/2));
    ctx.closePath();
  }
if (skygge == "j"){
  ctx.beginPath();
  ctx.moveTo(hx1, hy1);
  ctx.lineTo(hx2, hy2);
  ctx.lineTo(hx3, hy3);
  ctx.closePath();
}
else{

}
  ctx.fill();
  ctx.stroke();
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
