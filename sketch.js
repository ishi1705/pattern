function setup() {
  createCanvas(400, 400);
  noLoop(); 
  background(195, 250, 222);
  
  let flowerSize = 10;
  let spacing = 40; 
  let rows = height / spacing;
  let cols = width / spacing;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * spacing + spacing / 2;
      let y = i * spacing + spacing / 2;
      drawFlower(x, y, flowerSize);
    }
  }
}

function drawFlower(x, y, size) {
  push();
  translate(x, y);
  stroke(0);
  noFill();

  // Draw petals
  for (let i = 0; i < 6; i++) {
    ellipse(0, -size / 2, size, size * 1.5);
    rotate(PI / 3);
  }

  // Draw center
  fill(255, 200, 0);
  ellipse(0, 0, size, size);

  pop();
}


