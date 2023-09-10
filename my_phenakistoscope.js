const SLICE_COUNT = 10;

function setup_pScope(pScope){
 pScope.output_mode(STATIC_DISK);
 //pScope.output_mode(STATIC_FRAME);
 //pScope.output_mode(ANIMATED_DISK);
 //pScope.output_mode(OUTPUT_GIF(200))
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Spiral" , "png");
  pScope.load_image("Ring" , "png");
  pScope.load_image_sequence("rocky", "png", 10);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer4 = new PLayer(clouds);
  layer4.mode( RING );
  layer4.set_boundary( 200, 1500 );

  var layer3 = new PLayer(lightning);
  layer3.mode(RING);
  layer3.set_boundary( 200, 1000 );
  
  var layer2 = new PLayer(ext_clouds);
  layer2.mode( RING );
  layer2.set_boundary( 0, 50 );

  var layer1 = new PLayer(zeus);
  layer1.mode( RING );
  layer1.set_boundary( 0, 50 );
}


function lightning(x, y, animation, pScope){ //the lightning bolts shooting from zeus's hands
  pScope.set_direction(CCW);
  scale(animation.frame)*15;
stroke(0)

push()
strokeWeight(20)
stroke(102)
//line(325,1200,20,200)
//line(120,1225,0,200)
//line(-120,1225,0,200)
//line(-325,1200,-20,200)
pop()

push()
strokeWeight(20)
stroke(255, 200, 0)
fill(255, 223, 105)
beginShape()
vertex(28,1000)
vertex(-102,1000)
vertex(-47,875)
vertex(-117,875)
vertex(0,600) //Bottom Point
vertex(-2,800)
vertex(68,800)
vertex(28,1000)
endShape()
pop()
}

function clouds(x, y, animation, pScope){ //smaller floating clouds spinning in the design
  stroke(255)
  fill(255)
  ellipse(50,390-animation.wave()*20,100,100)
  ellipse(135,350-animation.wave()*20,50,50)
  ellipse(100,375-animation.wave()*20,85,85)
  ellipse(0,375-animation.wave()*20,60,60)
}

function ext_clouds(x, y, animation, pScope){ //the clouds around the edge of the disk
  stroke(255)
  fill(255)
  ellipse(0,1050-animation.wave()*50,500,500)
  ellipse(250,1050-animation.wave()*50,300,300)
  ellipse(-200,1050-animation.wave()*50,250,250)
}

function zeus(x, y, animation, pScope){;
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 50 - angleOffset;
  let backgroundArcEnd = 50 + angleOffset;

  fill(0)
  arc(x,y,50,50,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

push()
scale(.5)
 // pScope.draw_image("Spiral",0,0)
pop()

}
