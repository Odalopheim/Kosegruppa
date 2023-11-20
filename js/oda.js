//Canvas
// Bakrunn 
drawRectangle(200, 350, 1, 1, "Solid", "rgb(71, 175, 236") 
drawRectangle(70, 350, 1, 130, "Solid", "rgb(30, 95, 30)")
drawRectangle(40, 350, 1, 160, "Solid", "rgb(117, 118, 121)")
 // Sol
 circle(20,"solid","rgb(255,215,0)", 30, 30)
 // Sky
 circle(15,"solid","whitesmoke", 276, 30)
 circle(15,"solid","whitesmoke", 276, 40)
 circle(15,"solid","whitesmoke", 288, 40)
 circle(14,"solid","whitesmoke", 265, 40)
 //Yttre dekk 
 circle(25,"solid","black", 260, 170)
 circle(25,"solid","black", 140, 170)
 //Indre dekk 
 circle(10,"solid","whitesmoke", 260, 170)
 circle(10,"solid","whitesmoke", 140, 170)
 //Bil 
 drawRectangle(40, 200, 99, 120, "Solid", "blue")
 drawRectangle(30, 120, 140, 90, "Solid", "blue")

 //SVG
    //bakrunn 
    rectangleSVG("1", "1", "350", "200","fill:rgb(71, 175, 236)","solid");
    rectangleSVG("1", "130", "350", "70", "fill:rgb(30, 95, 30)", "solid");
   rectangleSVG("1", "160", "350", "40", "fill:rgb(117, 118, 121)","solid");
   //sol 
   circleSVG("30", "30" ,"20", "fill:rgb(247, 213, 24)");
    //Sky 
    circleSVG("276", "30" ,"15", "fill:whitesmoke");
    circleSVG("276", "40" ,"15", "fill:whitesmoke");
    circleSVG("288", "40" ,"15", "fill:whitesmoke");
    circleSVG("265", "40" ,"15", "fill:whitesmoke");
    //Ytre dekk 
    circleSVG("260", "170" ,"25", "fill:black");
    circleSVG("140", "170" ,"25", "fill:black");
    //Indre dekk
    circleSVG("260", "170" ,"10", "fill:whitesmoke");
    circleSVG("140", "170" ,"10", "fill:whitesmoke");
    //Bil
    rectangleSVG("99", "120", "200", "40", "fill:rgb(0, 0, 255)","solid");
    rectangleSVG("140", "90", "120", "30", "fill:rgb(0, 0, 255)","solid");
