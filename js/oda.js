//Canvas
// Bakrunn 
 rectangle(200, 350, 1, 1, "Solid", "rgb(71, 175, 236")
 rectangle(70, 350, 1, 130, "Solid", "rgb(30, 95, 30)")
 rectangle(40, 350, 1, 160, "Solid", "rgb(117, 118, 121)")
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
 rectangle(40, 200, 99, 120, "Solid", "blue")
 rectangle(30, 120, 140, 90, "Solid", "blue")

 //SVG
    //bakrunn 
    rectangleSVG("1", "1", "350", "200","fill:rgb(71, 175, 236)");
    rectangleSVG("1", "130", "350", "70", "fill:rgb(30, 95, 30)" );
   rectangleSVG("1", "160", "350", "40", "fill:rgb(117, 118, 121)");
   //sol 
   circleSVG("30", "30" ,"20", "solid", "fill:rgb(247, 213, 24)");
    //Sky 
    circleSVG("276", "30" ,"15", "solid", "fill:white");
    circleSVG("276", "40" ,"15", "solid", "fill:rgb(245, 245, 245)");
    circleSVG("288", "40" ,"15", "solid", "fill:rgb(245, 245, 245)");
    circleSVG("265", "40" ,"15", "solid", "fill:rgb(245, 245, 245)");
    //Ytre dekk 
    circleSVG("260", "170" ,"25", "solid", "fill:black");
    circleSVG("140", "170" ,"25", "solid", "fill:black");
    //Indre dekk
    circleSVG("260", "170" ,"10", "solid", "fill:rgba(245,245,245,1)");
    circleSVG("140", "170" ,"10", "solid", "fill:)");
    //Bil
    rectangleSVG("99", "120", "200", "40", "fill:rgb(0, 0, 255)");
    rectangleSVG("140", "90", "120", "30", "fill:rgb(0, 0, 255)");
