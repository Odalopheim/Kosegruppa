const darkColor = "rgb(74, 84, 55)";
const lightColor = "rgb(156, 166, 138)";

drawRectangle(100, 100, 0, 0, "solid", darkColor);

function rotateSquare(side, x, y, color) {
    ctx.save();

    // Translate to the center of the rectangle
    ctx.translate(x + side / 2 , y + side / 2);

    // Rotate the canvas
    ctx.rotate(Math.PI / 4);

    // Draw the rectangle at its new position (after rotation)

    drawRectangle(side, side, -side / Math.sqrt(2), -side / Math.sqrt(2) , "outline", color);


    // Restore the canvas state to prevent affecting other drawings
    ctx.restore();
}

const side1 = 100 / Math.sqrt(2);
rotateSquare(side1, 15, 35, lightColor);

const side2 = side1 / Math.sqrt(2);
drawRectangle(side2, side2, 25, 25, "outline", lightColor);

const side3 = side2 / Math.sqrt(2);
rotateSquare(side3, 33, 43, lightColor);

const side4 = side3 / Math.sqrt(2);
drawRectangle(side4, side4, 38, 38, "outline", lightColor);

const side5 = side4 / Math.sqrt(2);
rotateSquare(side5, 42, 46, lightColor);

rectangleSVG(15, 35, 100, 100, "", "solid", "0", "rgb(74, 84, 55)", "");
rectangleSVG(30, 50, side1, side1, "", "outline", "45", "", "rgb(156, 166, 138)");
rectangleSVG(40, 60, side2, side2, "", "outline", "0", "", "rgb(156, 166, 138)");
rectangleSVG(48, 68, side3, side3, "", "outline", "45", "", "rgb(156, 166, 138)");
rectangleSVG(53, 73, side4, side4, "", "outline", "0", "", "rgb(156, 166, 138)");
rectangleSVG(57, 77, side5, side5, "", "outline", "45", "", "rgb(156, 166, 138)");







