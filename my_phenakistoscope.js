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
  pScope.load_image_sequence("zeus" , "png", 14)
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries
  
  var layer1 = new PLayer(sky);
  layer1.mode( SWIRL(25) );
  layer1.set_boundary( 0, 2000 );

  var layer2 = new PLayer(ext_clouds);
  layer2.mode( RING );
  layer2.set_boundary( 750, 1000 );

  var layer3 = new PLayer(clouds);
  layer3.mode( RING );
  layer3.set_boundary( 300, 1500 );

  var layer4 = new PLayer(lightning);
  layer4.mode(RING);
  layer4.set_boundary( 300, 1000 );

  var layer5 = new PLayer(center_cloud);
  layer5.mode( RING );
  layer5.set_boundary( 0, 300 );

  var layer6 = new PLayer(zeus);
  layer6.mode( RING );
  layer6.set_boundary( 0, 300 );
}
function sky(x, y, animation, pScope){; //back most layer, creating a pretty geometric 'sunrise' background  
let StartColour = color("#F28729") //Bright Orange Hue
let endColour = color(0, 153, 255) //Bright Blue, inbetween turguoise and dark blue
  let animatingColour = lerpColor(StartColour, endColour, animation.frame)
  stroke(255)
  strokeWeight(1.5)
  fill(animatingColour)
    ellipse(0,0,600,600) //small circles used to make gradient effect, mimicking a sunrise.

}

function lightning(x, y, animation, pScope){ //the lightning bolts shooting from zeus's hands
  pScope.set_direction(CCW);
  scale(animation.frame)*30;

push() //lightning bolt design
strokeWeight(20)
stroke(255, 200, 0)
fill(255, 223, 105)
  beginShape()
    vertex(28,1000) //Top left point
    vertex(-102,1000) //Top Right point
    vertex(-47,875)
    vertex(-117,875)
    vertex(0,600) //Bottom Point of the bolt
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
  push()
  scale()
    ellipse(50-animation.frame*30,440-animation.frame*50,100,100) //middle cloud
    ellipse(135-animation.frame*30,400-animation.frame*50,50,50)
    ellipse(100-animation.frame*30,425-animation.frame*50,85,85)
    ellipse(0-animation.frame*30,425-animation.frame*50,60,60)
  pop()
  //middle ring of clouds
    ellipse(250-animation.frame*100,680-animation.frame*50,150,150) //middle cloud
    ellipse(370-animation.frame*100,630-animation.frame*50,100,100)
    ellipse(335-animation.frame*100,655-animation.frame*50,135,135)
    ellipse(165-animation.frame*100,680-animation.frame*50,110,110)

}

function ext_clouds(x, y, animation, pScope){ //the clouds around the edge of the disk
  stroke(255)
  fill(255)
    ellipse(0,1100-animation.wave()*50,500,500) //middle cloud
    ellipse(250,1100-animation.wave()*50,300,300)
    ellipse(-200,1100-animation.wave()*50,250,250)
}

function center_cloud(x, y, animation, pScope){ //cloud in the center of the design zeus is standing on
  stroke(255)
  fill(255)
  ellipse(0,0,400,400); //center cloud innermost spot
   //center cloud spinning aspect
   ellipse(70-animation.frame*100,180,150,150)
   ellipse(0-animation.frame*100,180,100,100)
}

function zeus(x, y, animation, pScope){ //drawing of zeus spinning in the center
//Zeus throwing a bolt animation
push();
translate(0, -400);
scale(.2);
  pScope.draw_image_from_sequence("zeus", 0, 0, animation.frame)
pop()
}
