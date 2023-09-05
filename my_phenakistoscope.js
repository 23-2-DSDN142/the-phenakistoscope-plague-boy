const SLICE_COUNT = 10;

function setup_pScope(pScope){
 //pScope.output_mode(STATIC_DISK);
 pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Spiral" , "png")
  pScope.load_image("Ring" , "png")
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer4 = new PLayer(rocky);
  layer4.mode( SWIRL(5) );
  layer4.set_boundary( 200, 1000 );

  var layer3 = new PLayer(juice);
  layer3.mode(RING);
  layer3.set_boundary( 200, 800 );

  var layer2 = new PLayer(hands);
  layer2.mode( RING );
  layer2.set_boundary( 750, 1000 );

  var layer1 = new PLayer(swirl);
  layer1.mode( RING );
  layer1.set_boundary( 0, 50 );
}

function juice(x, y, animation, pScope){ //the chemicals dropping from the hands to make rocky
  pScope.set_direction(CW);
  scale(animation.frame);
  var line_R = 0;
  var line_Y = 0;
  var line_G = 0;
  var line_B = 0;
stroke(0)
strokeWeight(30)
//line(325,1200,20,200)
//line(120,1225,0,200)
//line(-120,1225,0,200)
//line(-325,1200,-20,200)

//

//Red Line
stroke(245, 66, 66)
strokeWeight(20)
line(325,1200,203,line_R+800)
if (line_R > 100){
  line_R = 0
}

//Yellow Line
stroke(245, 230, 66)
strokeWeight(20)
line(105,1100,59,line_Y+700)
if (line_Y > 100){
  line_Y = 0
}

//Green Line
stroke(117, 245, 66)
strokeWeight(20)
line(-93,1000,-47,line_G+600)

//Blue Line
stroke(66, 203, 245)
strokeWeight(20)
line(-234,900,-112,line_B+500)

}

function hands(x, y, animation, pScope){ //the muscle man being built in the center;
  noFill()
  strokeWeight(245)
  ellipse(0,0,1750,1750)

}

function rocky(x, y, animation, pScope){ //hands at the top of the design controlling the chemicals, 'juice'

}

function swirl(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 50 - angleOffset;
  let backgroundArcEnd = 50 + angleOffset;

  fill(0)
  arc(x,y,50,50,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

push()
scale(.5)
  pScope.draw_image("Spiral",0,0)
pop()

}
