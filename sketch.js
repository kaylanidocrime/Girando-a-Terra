function setup() {
  createCanvas(400, 400, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(200, 200,200); //cor de fundo
  rotateY(millis()/1000); //rotação da terra
  texture(terra); //textura da terra, imgem.
  sphere(150, 180); //esfra 3D
  
  
  }
