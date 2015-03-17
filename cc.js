var helloA = 100;
var helloB = 200;
 
function setup() {
  createCanvas( 800, 800);
  background(0);
  noFill();
 
}

function draw() {
   fill( helloB, random(200), 100 + helloA);
    
    stroke(random(20), (100 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    ellipse(0, i, mouseX, mouseY);
       
    stroke(random(20), (100 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    ellipse(800, i, mouseX, mouseY);
     
    stroke(random(200), (200 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    line(0, 400, i, width);
     
    stroke(random(200), (200 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    line(400, 0, i, width);
     
    stroke(random(200), (200 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    line(800, 400, i, width);
     
    stroke(random(200), (10 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    line(800, 200, i, width);
     
    stroke(random(200), (10 + helloA) , 255);
    for (var i = 0; i<=height; i+=15)
    line(0, 200, i, width);
}
