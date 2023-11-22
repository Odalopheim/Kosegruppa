//Canvas
const canvas = document.getElementById("canvasfredrik");
const ctx = canvas.getContext("2d");

// Bakrunn
scale(1/2, 1/2)
drawRectangle(400, 400, 1, 1, "Solid", "white")

//cylinder skygge
scale(1, 1/2)

rot(13)
drawRectangle(140, 40, 225, 300,  "solid", "grey")
ellipse("grey", 0, 245, 300, 20, 12, 0, Math.PI * 2)
rot(-13)

scale(1, 2)

//cylinder
drawRectangle(140, 40, 120, 100,  "solid", "rgb(0, 0, 210)")
ellipse("rgb(0, 0, 153)", 0, 140, 100, 20, 12, 0, Math.PI * 2)
ellipse("rgb(0, 0, 210)", 0, 140, 240, 20, 12, 0, Math.PI * 2)
drawRectangle(120, 5, 130, 120, "solid", "rgba(255, 255, 255, 0.2)" )
scale(2, 2)

//svg
//bakgrunn
rectangleSVG("1", "1", "200", "200","fill:rgb(255, 255, 255)");

//Skygge
rectangleSVG(64, 90, 20, 40, "fill:grey", "solid", "13", "", "");
createEllipse(78, 91, 10, 3, "fill: grey; stroke: black; stroke-width: 0;", 13);

//Cylinder
rectangleSVG("60", "50", "20", "79","fill:rgb(0, 0, 210)");
rectangleSVG("65", "60", "3", "60","fill:rgba(255, 255, 255, 0.2)");
createEllipse(70, 50, 10, 6, "fill:rgb(0, 0, 153);");
createEllipse(70, 130, 10, 6, "fill:rgb(0, 0, 210);");