const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Bodies
var engine ,world;
var block, block2, block3 , block4 , block5, block6, block7, block8, block9, block10;
var ground;
var p;
var sling;







function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create(engine);
    world = engine.world; 
    block = new Box(700,300,50,50);
    block2  = new Box(700-50,300,50,50);
    block3 = new Box(700-100,300,50,50);
    block4 = new Box(700+50,300,50,50);
    block5 = new Box(700-75,300-50,50,50);
    block6 = new Box(700-25,300-50,50,50);
    block7 = new Box(700+25,300-50,50,50);
    block8 = new Box(700-50,300-100,50,50);
    block9 = new Box(700,300-100,50,50);
    block10 = new Box(250,300,50,50);
    p = new Box(700-25,150,50,50);
    ground = new Ground(width/2,550,width,30);
    //p = new Polygon(700,200,50,50);
    sling = new Slingshot(block10.body,{x:250,y:300});

    
    
    
 
  
    

    
}

function draw(){
    background(0);
    Engine.update(engine);
   
  
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    p.display();
    ground.display();
    sling.display();
    
    drawSprites();
}
function mouseDragged(){
 Matter.Body.setPosition(block10.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
    sling.fly();
}
