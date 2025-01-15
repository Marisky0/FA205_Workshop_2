let counter = 0;

let countInterval = setInterval(makeghost, 7000);


function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  function makeghost ( x, y,) {
    fill (255);
    noStroke ();
    ellipse(x , y, 200, 250);
    
    fill(0);
    ellipse(x - 50, y - 50,40,40);
    ellipse(x + 50, y - 50,40,40);
    
    fill(0)
    ellipse(x , y + 50, 80, 100);

    counter++;
    if (counter > 8){
      clearInterval(countInterval);
      counter = 0;
    }
    
  }
  
    for (x = 0; x < 5; x ++) {
    makeghost(random(0, width), random(0,height), random(0,200));

  }
function mousePressed() {
  countInterval = setInterval(makeghost, 7000);
}
}
