function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(200, 200,200); //cor de fundo
  rotateY(millis()/1000); //rotação da terra
  texture(terra); //textura da terra, imgem.
  sphere(199, 199); //esfra 3D
  
  
  }
