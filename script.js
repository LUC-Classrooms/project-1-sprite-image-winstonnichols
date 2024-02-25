User
/**
 * Project 1 - Interactive Image
 * Name: Winston NIchols
 * Date: 2/25/2024
  Description: I made a spider move in circles, when clicked the background should change colors and the spider should stop.
*/


// Global Variables go here
var x; // Position horizontally 
var y; // Posistion vertically
var d; // Diameter 
var r; // Background color 1
var g; // Background color 2
var b; // Background color 3
var isMoving = true; // Means the spider is moving 

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas

}

function draw(){
  // this function runs again and again (60x per second)
  background(r, g, b); // Random color displayed when clicked
  if(isMoving) {
  spider(x, y,d, r);
  x += -.05; // Negative Horizontal speed
  r += -.05; // Counter clock wise rotate speed
  y += -.05; // Negative Vertical speed
 
 
  if(x > width){ // When goes passed 600, it resets
    x = 0
}
if(y < 0){ // When goes passed 400, it resets
  y = height;


}

  }
}

function spider(tempX, tempY, tempD, tempR){
 let r = tempR; // Value of tempR is assigned to (r)
 let d = tempD; // Value of tempD is assigned to (d)
 translate(tempX, tempY); // Allows movement
 rotate(r); // Allows rotation

  // add your image drawing code here
ellipse(width/2, height/2, 150, 150);  // Abdomen
ellipse(300, 280, 80, 80);  //  Head
ellipse(280, 280, 20, 20); //  Left Eye
ellipse(320, 280, 20, 20); // Right Eye
arc(300, 300, 45, 30, 0, PI); //  Mouth
line(230, 225, 150, 245);  //  Long Arm 1 Bottom Left
line(150, 300, 150, 245); //  Short Arm 1 Bottom Left
line(90, 215, 229, 180); //  Long Arm 2 Middle Left
line(90, 215, 70, 300); //  Short Arm 2 Middle Left
line(255, 140, 45, 180); // Long Arm 3 Top Left
line(25, 250, 45, 180); // Short Arm 3 Top Left
line(width - 230, 225, width - 150, 245); // Long Arm 1 Bottom Right
line(width - 150, 300, width - 150, 245);  // Short Arm 1 Bottom Right
line(width - 90, 215, width - 229, 180); // Long Arm 2 Middle Right
line(width - 90, 215, width - 70, 300); // Short Arm 2 MIddle Right
line(width - 255, 140, width - 45, 180); // Long Arm 3 Top Right
line(width- 25, 250, width - 45, 180); // Short Arm 3 Top Right
fill("black"); // Black Ellipse (Abdomen & Head)
strokeWeight(7); // Line Girth
stroke("white"); // Line Color

/*
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){ // Checks to see if mouse is pressed down, if pressed down it does something in the curly brackets
  } else { // If not pressing down, it does whatever is in the curly brackets
   
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){ // When clicked
  // add code here if you want something to execute once each time the mouse is pressed
r = random(255); // When clicked, any number between 0 & 255 is shown
g = random(255); // When clicked, any number between 0 & 255 is shown
b = random(255); // When clicked, any number between 0 & 255 is shown
isMoving = !isMoving; // Stops spider when clicked 

}