let planeSize = 283;
let planeSize2 = 383;
let camY=0;
let camX=0;
let camZ= 190;

let x = 0;
let y = 0;
let z = -500;

function setup() {
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);    

  fill(255,255,255);
  noStroke();
  fill(255,177,188);
  lights();


  //højre
  push();
  translate(142,0,0);
  rotateY(90);
  plane(planeSize2,planeSize);
  pop();

  //venstre
  push();
  translate(-142,0,0);
  rotateY(-90);
  plane(planeSize2,planeSize);
  pop();

  //øverste
  push();
  translate(0,-142,0);
  rotateX(-90);
  plane(planeSize,planeSize2);
  pop();

  //nederste
  push();
  translate(0,142,0);
  rotateX(90);
  plane(planeSize,planeSize2);
  pop();

  //midt
  push();
  translate(0,0,-142);
  rotate(0);
  plane(planeSize,planeSize);
  pop();

//   //midt2
//   push();
//   translate(0,0,190);
//   rotate(0);
//   plane(planeSize,planeSize);
//   pop();

  camera(camX,camY,camZ+sin(frameCount * 0.01)*10,camX,camY,camZ,0,1,0);
  box(camera,camera,camera);

  if (keyIsDown(87)){
    camZ += -10;
  }
  if (keyIsDown(83)){
    camZ +=+ 10;
  }
  if(keyIsDown(65)){
    camX+=-10;
  }
  if(keyIsDown(68)){
    camX +=+ 10;
  }
  if(keyIsDown(16)){
    camY +=- 10;
  }
  if(keyIsDown(32)){
    camY +=+ 10;
  }

  minBox(x,y,z);
  z = z + 20;

  if (z == 400) {
    x = random(-140);
    y = random(-140);
    z = -500;
  }
}
function minBox(x,y,z,r){
    push();
    translate(x,y,z);
    fill(180,255,180);
    sphere(10,10,10);
    pop();
}
