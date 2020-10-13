var saveCanvas;
let a = 0;
const BG = ["#405E84", "#15616D", "#632B30", "#675068", "#A53860", "#945600", "#507255"]
const color = ["#A288A6", "#FFECD1", "#F4F1BB", "#E6EBE0", "#E6AF2E", "#C6D2CA", "#FFA9A3"]

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  saveCanvas = createGraphics(600, 600);
  angleMode(DEGREES)

  let BG_col = random(BG);
  let col = random(color);
  background(BG_col);
  noFill();
  strokeWeight(2);
  stroke(col);

  rect(20, 20, 200, 200)
  push();
  noStroke();
  fill(col);
  textSize(46);
  text('draw in the square', 300, 70);


  pop();
  //button = createButton('click me');
  button2 = createButton('save!');
  //  button.position(300, 0);
  button2.position(300, 100);
  button2.style('background-color', BG_col);
  button2.style('border', "0");
  button2.style('border-radius', " 0.25rem");
  button2.style('font-size', "2em");

  button2.style('color', col);
  fill("#5F9EA0")

  button2.mousePressed(printtext);

  function printtext() {

    let c = get(width / 9, height / 4.3, width, height);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, frameCount + ".png");
    redraw();
  }
}

function draw() {



  let Z = mouseX;
  let K = mouseY;



  if (mouseIsPressed === true && Z > 20 && Z < 220 && K > 20 && K < 220) {

    strokeWeight(1)

    line(mouseX, mouseY, pmouseX, pmouseY)
  }

  Big();

}

function Big() {
  let d = windowWidth / 6;
  scale(0.7)
  for (let x = a - windowWidth / 24; x < width * 2; x += d) {
    for (let y = d; y < width * 2; y += d) {


      let Z = mouseX;
      let K = mouseY;


      if (mouseIsPressed === true && Z > 20 && Z < 220 && K > 20 && K < 220) {




        strokeWeight(noise(frameCount / 20) * 20)

        line(mouseX + x, mouseY + y, pmouseX + x, pmouseY + y)

        line(mouseX + x + 10, mouseY + y - 10, pmouseX + x + 10, pmouseY + y - 10)
        line(mouseX + x + 20, mouseY + y + 20, pmouseX + x + 20, pmouseY + y + 20)


        ;
      }
    }
  }

  scale(2)
  for (let x = a - windowWidth / 12; x < width; x += d / 2) {
    for (let y = d / 1.7; y < width; y += d / 2) {


      let Z = mouseX;
      let K = mouseY;


      if (mouseIsPressed === true && Z > 20 && Z < 220 && K > 20 && K < 220) {

        strokeWeight(noise(frameCount / 20) * 15)

        line(mouseX + x, mouseY + y, pmouseX + x, pmouseY + y)

        line(mouseX + x + 10, mouseY + y - 10, pmouseX + x + 10, pmouseY + y - 10)
        line(mouseX + x + 20, mouseY + y + 20, pmouseX + x + 20, pmouseY + y + 20)


        ;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
