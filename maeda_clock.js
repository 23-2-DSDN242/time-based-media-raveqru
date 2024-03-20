let angle = 0; // Initial angle
let radius = 200; // Radius of the circular path

// Update this function to draw your own Maeda clock on a 960x500 canvas
function draw_clock(obj) {
  background(124, 140, 209); // Set background color

  //Maps
  let hours = obj.hours; 
  let minutes = obj.minutes; 
  let seconds = obj.seconds; 

  fill(124, 140, 209); // White fill color
  strokeWeight(10)
  stroke(255); // No outline

  // Calculate position based on angle
  let x = 960 / 2 + cos(angle) * radius;
  let y = 500 / 2 + sin(angle) * radius;

  //clock
  textSize(100);
  textAlign(CENTER, CENTER);
  textFont("Helvetica");
  text(nf(hours, 2) + ':' + nf(minutes, 2) + ':' + nf(seconds, 2), x, y);

  // Icreasing angle for the next frame
  angle += 0.01; // Adjust the speed of rotation as needed
  // Resets angle when < 360 degrees
  if (angle > TWO_PI) {
    angle = 0;
  }
}
