function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  noFill();
  ellipse(mouseX, mouseY, size, size);

  if (size > 100) {
    size = 0;
  }else if (size > 60) {
    size = size + 10;
  }else {
    size = size + 1;
  }
//myShape(mouseX, mouseY);
}

function myShape(x, y) {
  fill(255, 0, 0);
  ellipse(x, y, 50);
  fill(0, 255, 0);
  rect(x + 25, y + 25, 20, 30);
}