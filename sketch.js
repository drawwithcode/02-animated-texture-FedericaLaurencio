var saveCanvas;
let d = 400;
let a = 0;
let c = 50;
function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  saveCanvas = createGraphics(400, 600);
  angleMode(DEGREES)
  fill(255);

  rect(0, 0, 200, 200)
  button = createButton('click me');
  button.position(300, 0);
  button.mousePressed(changeStroke);


  function changeStroke() {
    let val = random(255, 255, 255);
    stroke(val);
  }
}

function draw() {



  for (let x = a; x < width; x += d) {
    for (let y = d-150; y < width; y += d) {


      let Z = mouseX;
      let K = mouseY;


      if (mouseIsPressed === true && Z < 200 && K < 200) {

        strokeWeight(noise(frameCount / 20) * 20)

        line(mouseX + x, mouseY + y, pmouseX + x, pmouseY + y)

        line(mouseX + x + 10, mouseY + y - 10, pmouseX + x + 10, pmouseY + y - 10)
        line(mouseX + x + 20, mouseY + y + 20, pmouseX + x + 20, pmouseY + y + 20)


        ;
      }
    }
  }
  scale(2)
  for (let x = c; x < width; x += d/2) {
    for (let y = d/2; y < width; y += d/2) {


      let Z = mouseX;
      let K = mouseY;


      if (mouseIsPressed === true && Z < 200 && K < 200) {

        strokeWeight(noise(frameCount / 20) * 15)

        line(mouseX + x, mouseY + y, pmouseX + x, pmouseY + y)

        line(mouseX + x + 10, mouseY + y - 10, pmouseX + x + 10, pmouseY + y - 10)
        line(mouseX + x + 20, mouseY + y + 20, pmouseX + x + 20, pmouseY + y + 20)


        ;
      }
    }
  }
}

function keyPressed() {
  if (key == 's') {
    let c = get(width / 2 - height / 2, 0, height, height);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, frameCount + ".png");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
