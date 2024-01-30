
var a = 0;
var sponge = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  normalMaterial();
  var b = new Box(0, 0, 0, 200);
  sponge.push(b);
}


function mousePressed() {
  // generate next set of boxes
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(0);
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);

  for (var i = 0; i < sponge.length; i++) {
  sponge[i].show();
  }
  a += 0.01;
}