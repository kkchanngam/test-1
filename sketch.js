function setup() {
 // put setup code here
 createCanvas(1000, 1000);
 background(20);
 noStroke();
 frameRate(45);
}

function draw() {
  // put drawing code here
  background(20, 10);
  let mx = mouseX;
  let my = mouseY;

  let o = random(width/4);
  let r = random(100, 200);
  let g = random(20);
  let b = random(100, 200);
  let t = random(170);
  console.log(o);

  fill(r, g, b, t);
  //rect(mx, my, o);
  ellipse(mx, my, o, o);
}
