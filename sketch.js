function setup() {
  createCanvas(400, 400);

}
function draw(){

  background (165, 214, 255);


  //pistachio
  fill(218, 242, 203);
  arc(210, 340, 130, 130, PI, TWO_PI);

  //strawberry
  fill(255, 185, 216);
  arc(210, 300, 130, 130, PI, TWO_PI);

    //choco
  fill(253, 192, 156);
  arc(210, 260, 130, 130, PI, TWO_PI);



   if (mouseIsPressed){

//sprinkles
  fill(255, 60, 60)
  ellipse(210,190,20,20)

    fill(255, 255, 0)
  ellipse(170,210,20,20)

    fill(239, 0, 259)
  ellipse(250,210,20,20)


  }

  fill(255, 124, 67)
  //color of the square
  strokeWeight(0)
  //how thick the stroke around the square is
  square(145, 330, 130);


}
