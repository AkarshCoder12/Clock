var canvas
function setup() {
  canvas  =createCanvas(400,400);
  canvas.position(450,150)

}

function draw() {
  background("black"); 

  let hr = hour();
  let min = minute();
  let sec = second();

  push()
  translate(200,200)
  rotate(-90)


  noFill()
  stroke("red")
  strokeWeight(10)
  let SecondAngle =  map(sec , 0, 60,0 ,360)
  arc(0,0,300,300,0,SecondAngle)

  noFill()
  stroke(78,224,30)
  strokeWeight(10)
  let MinuteAngle=  map(min, 0, 60, 0 ,360)
  arc(0,0,280,280,0,MinuteAngle)

  noFill()
  stroke("Blue")
  strokeWeight(10)
  let HrAngle =  map(hr%12, 0, 12, 0 ,360)
  arc(0,0,260,260,0,HrAngle)


  push()
  rotate(SecondAngle)
  strokeWeight(10)
  stroke("red")
  line(0,0,110,0)
  pop()

  push()
  rotate(MinuteAngle)
  strokeWeight(10)
  stroke(78,224,30)
  line(0,0,90,0)
  pop()

  push()
  rotate(HrAngle)
  strokeWeight(10)
  stroke("blue")
  line(0,0,60,0)
  pop()

  pop()

  fill("White")

  text(hr + " :"  + min +" :"  +sec ,180,390)

  fill("red")
  text("red",70,20)

  fill("White")
  text("is the seconds",100,20)



  fill(78,224,30)
  text("green",200,20)

  fill("White")
  text("is the Minutes",240,20)

  fill("blue")
  text("blue",150,40)

  fill("White")
  text("is the Hours",180,40)


  drawSprites();

  
}