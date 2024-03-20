let oddOrEven
let img
let img1
let img2
let img3
let img4
let img5
let clockHeight = 165
let clockWidth = 470

//images
function preload() {
  img = loadImage('assets/flower.png')
  img1 = loadImage('assets/table.png')
  img2 = loadImage('assets/noteDue.png')
  img3 = loadImage('assets/kitt.png')
  img4 = loadImage('assets/cup.png')
  img5 = loadImage('assets/whitecat.png')

}
/*
 * use p5.js to draw a clock on a 960x500 canvas
 */


function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  background(255, 230, 230)
  angleMode(DEGREES)

  //maps
  let hours = map(obj.hours, 0, 23, 0, 23)
  let minutes = map(obj.minutes, 0, 59, 0, 59)
  let seconds = map(obj.seconds, 0, 59, 0, 59)


  // 15 - 0 when set 
  // -1 when inactive
  //------
  //Draws functions
  workspace(1, 1, 1)
  flower(1, 1, 1)
  wallDecorations(1, 1, 1)
  comp(250, 40, 1.5)


  if (obj.seconds_until_alarm == -1) {  // if alarm is not set
    stroke(116, 105, 182)
    backgroundCirle(470, 165, 2)
    firstCircle(470, 165, 2)
    middleCircle(470, 165, 2)
    smallestCircle(470, 165, 2)
  }
  else if (obj.seconds_until_alarm == 0 && obj.seconds % 2 == 1) { // if alarm rings
    // let countAlarm = map(obj.seconds_until_alarm, 5, 0, 0, 1.5)
    // let countAlarm2 = map(obj.seconds_until_alarm, 1, 10, 2, 3)
    stroke(116, 105, 182)
    backgroundCirle(470, 165, 2)
    firstCircle(470, 165, 2)
    middleCircle(470, 165, 2)
    smallestCircle(470, 165, 2)
  
  } else if (obj.seconds_until_alarm > 0 && obj.seconds_until_alarm <= 5) { // if alarm is set and 5 seconds left
    let colourAlarm = map(obj.seconds_until_alarm, 5, 0, 0, 255)
    // console.log("obj " + obj.seconds_until_alarm + " Map " + colourAlarm)
    stroke(66,88,137, colourAlarm)
    backgroundCirle(470, 165, 2)
    firstCircle(470, 165, 2)
    middleCircle(470, 165, 2)
    smallestCircle(470, 165, 2)
  } else { // othewise always execute this path [Max Timer -> seconds left > 5]
    stroke(66,88,137)
    backgroundCirle(470, 165, 2)
    firstCircle(470, 165, 2)
    middleCircle(470, 165, 2)
    smallestCircle(470, 165, 2)

  }

  //line sections on the clock 
  hoursLine(1, 1, 1)
  minutesLine(1, 1, 1)
  secondsLine(1, 1, 1)

  //console.log("Hours: " + hours + "Minutes: " + minutes)
  //stickmen 
  hoursCircle(1, 1, 1, (hours % 12) * 30 + minutes * 0.5)
  minutesCircle(1, 1, 1, minutes * 6)
  secondsCircle(1, 1, 1, seconds * 6, seconds)
  //Spilled coffee image
  coffee(1, 1, 1)

  let meridiem = obj.hours < 12 ? "AM" : "PM";

  // Different images based on AM or PM
  if (meridiem === "AM") {
    backgroundImg = whiteKitty(1, 1, 1);
  } else {
    backgroundImg = kitty(1, 1, 1);
  }

}


//table image
function workspace(x, y, size) {
  push()
  //computer desk
  scale(1.15)
  image(img1, 1, 350)
  pop()


}

//flower pot image 
function flower() {
  push()
  //flower pot
  scale(0.9)
  image(img, 750, 50)

  pop()

}


//note on the wall
function wallDecorations(x, y, size) {
  push()
  scale(0.2)
  image(img2, 1, 1)
  pop()

}


//draws computer
function comp(x, y, size) {
  push()

  noStroke()
  //frame shadow
  fill(0, 0, 0, 20)
  rect(x + (size * 3), y + (size * 1), (size * 300), (size * 200), (10), (10))

  //purple frame
  fill(204, 203, 230)
  rect(x + (size * 1), y + (size * 1), (size * 300), (size * 200), (10), (10))
  //white frame
  fill(250)
  rect(x + (size * 1), y + (size * 1), (size * 300), (size * 170), (10), (10), (0))
  //display
  fill(225, 175, 209)
  rect(x + (size * 10), y + (size * 10), (size * 280), (size * 150))
  //stand shdaow
  fill(0, 0, 0, 30)
  quad(x + (size * 130), y + (size * 201), x + (size * 190), y + (size * 201), x + (size * 185), y + (size * 250), x + (size * 125), y + (size * 240))
  quad(x + (size * 130), y + (size * 240), x + (size * 185), y + (size * 250), x + (size * 190), y + (size * 270), x + (size * 120), y + (size * 270))
  //purple stand
  fill(204, 203, 230)
  quad(x + (size * 120), y + (size * 200), x + (size * 180), y + (size * 200), x + (size * 175), y + (size * 250), x + (size * 125), y + (size * 250))
  quad(x + (size * 125), y + (size * 250), x + (size * 175), y + (size * 250), x + (size * 180), y + (size * 270), x + (size * 120), y + (size * 270))
  rect(x + (size * 120), y + (size * 270), (size * 60), (size * 7))

  //top shadow, below the display
  fill(0, 0, 0, 15)
  rect(x + (size * 120), y + (size * 201), (size * 60), (size * 1))

  //corner shadow
  fill(0, 0, 0, 5)
  rect(x + (size * 125), y + (size * 250), (size * 50), (size * 1))

  //white corner brightness
  fill(255, 255, 255, 30)
  rect(x + (size * 120), y + (size * 270), (size * 60), (size * 1))


  fill(0, 0, 0, 10)
  rect(x + (size * 120), y + (size * 276), (size * 60), (size * 1))

  pop()
}


//target circle
function clock(x, y, size) {
  push()
  fill(255)
  ellipse(x + (size * 1), y + (size * 1), (size * 90))
  noFill()
  stroke(193, 108, 59)
  strokeWeight(20)
  ellipse(x + (size * 1), y + (size * 1), (size * 90))
  ellipse(x + (size * 1), y + (size * 1), (size * 60))
  ellipse(x + (size * 1), y + (size * 1), (size * 30))

  pop()
}

//line sections
//indicates hours
function hoursLine(x, y, size) {
  push()

  for (let i = 0; i < 12; i++) {
    translate(x + (470 * size), y + (165 * size))
    rotate(360 / 12)
    translate(-x - (470 * size), -y - (165 * size))
    stroke(255, 255, 255, 80)
    strokeWeight(3)
    line(x + (size * 470), y + (size * 67), x + (size * 470), y + (size * 84))

  }
  pop()
}

//indicates minutes
function minutesLine(x, y, size) {
  push()

  for (let i = 0; i < 60; i++) {
    translate(x + (470 * size), y + (165 * size))
    rotate(360 / 60)
    translate(-x - (470 * size), -y - (165 * size))
    fill(0)
    stroke(255, 255, 255, 80)
    strokeWeight(1)
    line(x + (size * 470), y + (size * 93), x + (size * 470), y + (size * 108))

  }
  pop()

  //bold line
  push()

  for (let i = 0; i < 12; i++) {
    translate(x + (470 * size), y + (165 * size))
    rotate(360 / 12)
    translate(-x - (470 * size), -y - (165 * size))
    fill(0)
    stroke(255, 255, 255, 80)
    strokeWeight(1.5)
    line(x + (size * 470), y + (size * 97), x + (size * 470), y + (size * 115))

  }
  pop()
}

//indicates seconds 
function secondsLine(x, y, size) {
  push()

  for (let i = 0; i < 60; i++) {
    translate(x + (470 * size), y + (165 * size))
    rotate(360 / 60)
    translate(-x - (470 * size), -y - (165 * size))
    fill(0)
    stroke(255, 255, 255, 80)
    strokeWeight(1)
    line(x + (size * 470), y + (size * 123), x + (size * 470), y + (size * 131))

  }
  pop()



}

//orange target circles
function backgroundCirle(x, y, size, alarm) {
  fill(255)
  ellipse(x + (size * 1), y + (size * 1), (size * 90))

}

function firstCircle(x, y, size) {
  push()
  noFill()
  //stroke(193, 108, 59)
  strokeWeight(20)
  ellipse(x + (size * 1), y + (size * 1), (size * 90))
  pop()
}

function middleCircle(x, y, size) {
  push()
  noFill()
  //stroke(193, 108, 59)
  strokeWeight(20)
  ellipse(x + (size * 1), y + (size * 1), (size * 60))
  pop()
}

function smallestCircle(x, y, size) {
  push()
  noFill()
  //stroke(193, 108, 59)
  strokeWeight(20)
  ellipse(x + (size * 1), y + (size * 1), (size * 30))
  pop()
}

//draws hours stickman 
function stickmanHours(x, y, size) {
  push()

  //walking stickman
  stroke(0)
  strokeWeight(size * 20)
  noFill()
  ellipse(x + (size * 1), y + (size * 5), (size * 80))
  //body
  line(x + (size * 1), y + (size * 55), x + (size * 1), y + (size * 180))
  //arms
  line(x + (size * 1), y + (size * 70), x + (size * -25), y + (size * 120))
  line(x + (size * 1), y + (size * 90), x + (size * 25), y + (size * 120))
  //legs
  line(x + (size * 1), y + (size * 180), x + (size * 25), y + (size * 230))
  line(x + (size * 1), y + (size * 180), x + (size * -10), y + (size * 210))
  line(x + (size * -10), y + (size * 210), x + (size * -29), y + (size * 230))

  pop()
}

//draws minutes stickman 
function stickmanMinutes(x, y, size) {
  push()

  stroke(0)
  strokeWeight(size * 20)
  noFill()
  ellipse(x + (size * 1), y + (size * 5), (size * 80))
  //body
  line(x + (size * 1), y + (size * 55), x + (size * 1), y + (size * 180))
  //arms
  line(x + (size * 1), y + (size * 75), x + (size * -35), y + (size * 100))
  line(x + (size * 1), y + (size * 90), x + (size * 30), y + (size * 120))
  //legs
  line(x + (size * 1), y + (size * 180), x + (size * 40), y + (size * 230))
  line(x + (size * 1), y + (size * 180), x + (size * -10), y + (size * 210))
  line(x + (size * -10), y + (size * 210), x + (size * -29), y + (size * 230))

  pop()
}

//draws seconds stickman
function stickmanSeconds(x, y, size, secCounter) {
  push()
  //head
  stroke(0)
  strokeWeight(size * 20)
  noFill()
  ellipse(x + (size * 1), y + (size * 5), (size * 80))

  //body
  line(x + (size * 1), y + (size * 55), x + (size * 1), y + (size * 180))
  pop()
  //armS
  push()
  stroke(0)
  strokeWeight(size * 20)
  //changes arms & legs when odd seconds
  if (secCounter % 2 == 1) {
    //left arm
    line(x + (size * 1), y + (size * 75), x + (size * -55), y + (size * 140))
    //right arm
    line(x + (size * 1), y + (size * 70), x + (size * 20), y + (size * 140))
  } else {
    //left arm
    line(x + (size * 1), y + (size * 75), x + (size * -25), y + (size * 150))
    //right arm
    line(x + (size * 1), y + (size * 90), x + (size * 30), y + (size * 130))
  }
  pop()

  //legs
  push()
  stroke(0)
  strokeWeight(size * 20)
  if (secCounter % 2 == 1) {
    //right leg
    line(x + (size * 1), y + (size * 180), x + (size * 30), y + (size * 210))
    line(x + (size * 30), y + (size * 210), x + (size * 40), y + (size * 250))
    //left leg
    line(x + (size * 1), y + (size * 180), x + (size * -1), y + (size * 220))
    line(x + (size * -1), y + (size * 220), x + (size * -10), y + (size * 250))
  } else {
    //right leg
    line(x + (size * 1), y + (size * 180), x + (size * -10), y + (size * 220))
    line(x + (size * -10), y + (size * 220), x + (size * -45), y + (size * 250))
    //left leg
    line(x + (size * 1), y + (size * 180), x + (size * 26), y + (size * 240))
    line(x + (size * 26), y + (size * 240), x + (size * 29), y + (size * 260))
  }
  pop()
}

//hours stickman position
function hoursCircle(x, y, size, hours) {
  push()
  translate(x + (clockWidth * size), y + (clockHeight * size))
  rotate(hours)
  translate(-x - (clockWidth * size), -y - (clockHeight * size))


  stickmanHours(470, 63, 0.09)

  pop()
}

//minutes stickman position
function minutesCircle(x, y, size, minutes) {
  push()
  translate(x + (clockWidth * size), y + (clockHeight * size))
  rotate(minutes)
  translate(-x - (clockWidth * size), -y - (clockHeight * size))

  stickmanMinutes(470, 93, 0.09)

  pop()
}

//seconds stickman position
function secondsCircle(x, y, size, seconds, secCounter) {
  push()
  translate(x + (clockWidth * size), y + (clockHeight * size))
  rotate(seconds)
  translate(-x - (clockWidth * size), -y - (clockHeight * size))

  stickmanSeconds(470, 123, 0.09, secCounter)

  pop()
}
//black PM Cat
function kitty(x, y, size) {
  push()
  image(img3, 1, 100)
  pop()
}

//cspilled coffee image
function coffee(x, y, size) {
  push()
  scale(0.4)
  image(img4, 1100, 950)
  pop()
}

//White AM cat
function whiteKitty(x, y, size) {
  push()
  scale(1)
  image(img5, 32, 82)
  pop()
}
