
var saveCanvas;


let a = 0;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  saveCanvas = createGraphics(600, 600);
  angleMode(DEGREES)
  background("#F8F8FF");
  noFill();
  strokeWeight(2);
  stroke("#DCDCDC");

  rect(20, 20, 200, 200)

  //button = createButton('click me');
  button2 = createButton('save');
  //button.position(300, 0);
  button2.position(300, 100);

  fill("#5F9EA0")
  //button.mousePressed(changeStroke);
//  function changeStroke() {
    //Big(options2);
  //}
  button2.mousePressed(printtext);

  function printtext() {

    let c = get(width / 9, height / 4.3, width, height);
    saveCanvas.image(c, 0, 0);
    save(saveCanvas, frameCount + ".png");

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

function Big (){
  let d = windowWidth / 6;
  scale(0.7)
  for (let x = a - windowWidth / 24; x < width * 2; x += d) {
    for (let y = d; y < width * 2; y += d) {


      let Z = mouseX;
      let K = mouseY;


      if (mouseIsPressed === true && Z > 20 && Z < 220 && K > 20 && K < 220) {
        stroke("#5F9EA0");
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
stroke("#483D8B");
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
