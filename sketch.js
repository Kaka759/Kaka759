function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("black");
    fill("red")
  }
  
  if (mouseIsPressed){
    rect(moudeX, mouseY, 28,35)
  }