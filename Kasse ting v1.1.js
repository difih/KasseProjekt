let planeSize = 283;
let camY=0;
let camX=0;
let camZ= 400;

function setup() {
  createCanvas(400, 400,WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // myPlane(400,400,200,0,-100,90);
    
  fill(255,255,255);

 noStroke();
 fill(255,177,188);
 lights();
  //højre
  push();
  translate(142,0,0);
  rotateY(90);
  plane(planeSize,planeSize);
  pop();

  //venstre
  push();
  translate(-142,0,0);
  rotateY(-90);
  plane(planeSize,planeSize);
  pop();

  //øverste
  push();
  translate(0,-142,0);
  rotateX(-90);
  plane(planeSize,planeSize);
  pop();

  //nederste
  push();
  translate(0,142,0);
  rotateX(90);
  plane(planeSize,planeSize);
  pop();

  //midt
  push();
  translate(0,0,-142);
  rotate(0);
  plane(planeSize,planeSize);
  pop();

    //midt2
  push();
  translate(0,0,142);
  rotate(0);
  plane(planeSize,planeSize);
  pop();

  camera(camX,camY,camZ+sin(frameCount * 0.01)*10,camX,camY,camZ,0,1,0);
  
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

  for(var t= -100; t< 100; t++){
    x = 4+7*t;
    y=15+(-27)*t;
    z = 20 + (-5)*t;
    minBox(x,y,z);
  }

}
function minBox(x,y,z,r){
    push();
    translate(x,y,z);
    fill(180,255,180);
    box(30,30,30);
    pop();
}
