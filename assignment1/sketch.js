function setup() {
  createCanvas(900, 506);
}

function draw() {
  background(22, 53, 83);

  // bed
  noStroke();
  fill(200, 200, 223);
  rect(0, 170, width, height - 170);

  // cat
  fill(30);
  ellipse(630, 215, 600, 250);
  triangle(370, 160, 450, 120, 400, 80);
  triangle(485, 120, 580, 120, 540, 50);
  ellipse(320, 270, 250, 90);
  fill(245);
  ellipse(450, 135, 35, 25);
  ellipse(505, 120, 35, 25);
  fill(30);
  ellipse(452, 137, 25, 20);
  ellipse(507, 122, 25, 20);

  //shark tail
  fill(80, 157, 179);
  triangle(450, 460, 270, 390, 450, 360);
  triangle(450, 410, 320, 490, 340, 390);


  // donut
  fill(217, 167, 120);
  translate(520, 365);
  rotate(radians(15));
  ellipse(0, 0, 370, 240);
  fill(66, 187, 221);
  ellipse(0, -25, 295, 160);

  rotate(radians(-15));
  translate(-520, -365);

  // Sprinkles
  strokeWeight(5);
  stroke(230, 55, 55); line(430, 320, 445, 327);
  stroke(255, 210, 40); line(470, 370, 486, 365);
  stroke(40, 145, 80); line(515, 316, 525, 330);
  stroke(245); line(550, 380, 562, 370);
  stroke(50, 80, 160); line(600, 335, 615, 343);
  stroke(230, 55, 55); line(625, 375, 640, 365);

  // shark
  noStroke();
  translate(600, 210);
  rotate(radians(35));
  fill(80, 157, 179);
  ellipse(0, 0, 190, 350);
  fill(220, 224, 210);
  ellipse(20, 15, 115, 300);

  rotate(radians(-35));
  translate(-600, -210);

  fill(80, 157, 179);
  triangle(520, 220, 430, 210, 500, 300);
  triangle(500, 220, 580, 150, 560, 300);
  triangle(620, 310, 660, 270, 710, 320);

  fill(30);
  ellipse(630, 100, 19, 19);
  fill(245);
  ellipse(625, 100, 6, 6);

  // Teeth
  triangle(630, 130, 640, 150, 650, 130);
  triangle(650, 130, 660, 150, 670, 130);
  triangle(670, 130, 680, 150, 690, 130);
  triangle(690, 130, 700, 150, 710, 130);

}
