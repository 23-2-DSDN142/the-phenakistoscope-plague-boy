const SLICE_COUNT = 10;

function setup_pScope(pScope){
 //pScope.output_mode(STATIC_DISK);
 //pScope.output_mode(STATIC_FRAME);
 pScope.output_mode(ANIMATED_DISK);
 //pScope.output_mode(OUTPUT_GIF(200))
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
  
  var layer1 = new PLayer(sky);
  layer1.mode( SWIRL(20) );
  layer1.set_boundary( 0, 2000 );
  
  var layer4 = new PLayer(clouds);
  layer4.mode( RING );
  layer4.set_boundary( 300, 1500 );

  var layer3 = new PLayer(lightning);
  layer3.mode(RING);
  layer3.set_boundary( 300, 1000 );
  
  var layer2 = new PLayer(ext_clouds);
  layer2.mode( RING );
  layer2.set_boundary( 750, 1000 );

  var layer5 = new PLayer(zeus);
  layer5.mode( RING );
  layer5.set_boundary( 0, 300 );
}
function sky(x, y, animation, pScope){; //back most layer, creating a pretty background
  let StartColour = color(255, 140, 0) //Bright Orange Hue
  let endColour = color(0, 153, 255) //Bright Blue, inbetween turguoise and dark blue

  let animatingColour = lerpColor(StartColour, endColour, animation.frame)
  stroke(255)
  strokeWeight(2)
  fill(animatingColour)
  ellipse(0,0,900,900)

}

function lightning(x, y, animation, pScope){ //the lightning bolts shooting from zeus's hands
  pScope.set_direction(CCW);
  scale(animation.frame)*20;
stroke(0)

push() //guide lines
strokeWeight(20)
stroke(102)
//line(325,1200,20,200)
//line(120,1225,0,200)
//line(-120,1225,0,200)
//line(-325,1200,-20,200)
pop()

push() //lightning bolt design
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
  //inner-most ring of clouds
  ellipse(50-animation.frame*150,390-animation.frame*20,100,100) //middle cloud
  ellipse(135-animation.frame*150,350-animation.frame*20,50,50)
  ellipse(100-animation.frame*150,375-animation.frame*20,85,85)
  ellipse(0-animation.frame*150,375-animation.frame*20,60,60)
  //middle ring of clouds
  ellipse(250-animation.frame*100,620-animation.frame*20,150,150) //middle cloud
  ellipse(370-animation.frame*100,580-animation.frame*20,100,100)
  ellipse(335-animation.frame*100,605-animation.frame*20,135,135)
  ellipse(165-animation.frame*100,605-animation.frame*20,110,110)
 //center cloud
  ellipse(70-animation.frame*100,180-animation.frame*10,150,150)
  ellipse(0-animation.frame*100,180-animation.frame*10,100,100)
}

function ext_clouds(x, y, animation, pScope){ //the clouds around the edge of the disk
  stroke(255)
  fill(255)
  ellipse(0,1050-animation.wave()*50,500,500) //middle cloud
  ellipse(250,1050-animation.wave()*50,300,300)
  ellipse(-200,1050-animation.wave()*50,250,250)
}

function zeus(x, y, animation, pScope){;
  stroke(255)
  fill(255)
  ellipse(0,0,400,400)
push()
scale(.5)
 // pScope.draw_image("Spiral",0,0)
pop()

}
