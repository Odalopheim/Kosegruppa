//Canvas
// Bakrunn 
drawRectangle(400, 400, 1, 1, "Solid", "white")

//cylinder skygge
scale(1, 1/2)

rot(13)
//drawRectangle(70, 40, 170, 135,  "solid", "grey")
//ellipse("grey", 0, 190, 136, 20, 6, 0, Math.PI * 2)
drawRectangle(140, 40, 225, 300,  "solid", "grey")
ellipse("grey", 0, 245, 300, 20, 12, 0, Math.PI * 2)
rot(-13)

scale(1, 2)

//cylinder
drawRectangle(140, 40, 120, 100,  "solid", "rgb(0, 0, 210)")
ellipse("rgb(0, 0, 153)", 0, 140, 100, 20, 12, 0, Math.PI * 2)
ellipse("rgb(0, 0, 210)", 0, 140, 240, 20, 12, 0, Math.PI * 2)
drawRectangle(120, 5, 130, 120, "solid", "rgba(255, 255, 255, 0.2)" )

//triangle
triangles(300, 267, 300, 227, 300, 317, 80, "rgb(224, 0, 0)", "v")
triangles(300, 180, 300, 140, 300, 220, 80, "rgb(153, 0, 0)", "v")
triangles(299, 224, 299, 184, 299, 264, 80, "rgb(224, 0, 0)", "h")


triangles(304, 309, 340, 160, 304, 170, 80, "grey", "v", "j")





