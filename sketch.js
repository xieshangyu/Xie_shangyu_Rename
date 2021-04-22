let data;
function preload() {
  data = loadJSON("pose.json");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

    // fill(random(255), random(255), random(255));
    // text(c.text, c.x, c.y + 5);

}

function draw() {
  background(200);
  for (let j = 0; j <100; j++){
    for (let i = 0; i < data.bodypoints.length; i++) {
      let c = data.bodypoints[i];
      
      fill(random(255), random(255), random(255));
      ellipse(c.x+width / 4, c.y+ height / 4, 10, 10);
      
    }
    translate(10,0)
    // translate(width / 2-j*100, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1400, 100));

  }
  // for (let i = 0; i < data.bodypoints.length; i++) {
  //   let c = data.bodypoints[i];
    
  //   fill(random(255), random(255), random(255));
  //   ellipse(c.x, c.y, 10, 10);
  // }

}
