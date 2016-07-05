// movement 
var xpos = 100;
var ypos = 100;
var xspeed = 1;
var yspeed = 0;
var maxSpeed = 5;

// boundary
var minx = 0;
var miny = 0;
var maxx = 1000; 
var maxy = 1000; 

// controller 
var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;

function slowDownX()
{
  if (xspeed > 0)
    xspeed = xspeed - 1;
  if (xspeed < 0)
    xspeed = xspeed + 1;
}

function slowDownY()
{
  if (yspeed > 0)
    yspeed = yspeed - 1;
  if (yspeed < 0)
    yspeed = yspeed + 1;
}

function gameLoop()
{
  
  xpos = Math.min(Math.max(xpos + xspeed,minx),maxx);
  ypos = Math.min(Math.max(ypos + yspeed,miny),maxy);


  document.getElementById('character').style.left = xpos;
  document.getElementById('character').style.top = ypos;

  if (upPressed == 1)
    yspeed = Math.max(yspeed - 1,-1*maxSpeed);
  if (downPressed == 1)
    yspeed = Math.min(yspeed + 1,1*maxSpeed)
  if (rightPressed == 1)
    xspeed = Math.min(xspeed + 1,1*maxSpeed);
  if (leftPressed == 1)
    xspeed = Math.max(xspeed - 1,-1*maxSpeed);

  if (upPressed == 0 && downPressed == 0)
     slowDownY();
  if (leftPressed == 0 && rightPressed == 0)
     slowDownX();

  setTimeout("gameLoop()",10);
}

function keyDown(e)
{
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 38)
    upPressed = 1;
  if (code == 40)
    downPressed = 1;
  if (code == 37)
    leftPressed = 1;
  if (code == 39)
    rightPressed = 1;
}

function keyUp(e)
{
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 38)
    upPressed = 0;
  if (code == 40)
    downPressed = 0;
  if (code == 37)
    leftPressed = 0;
  if (code == 39)
    rightPressed = 0;
}