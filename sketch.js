const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var chao,teto,paredeE,paredeD;
var bola;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var bola_options = {
    restitution: 0.9
  }

  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);

  //criando novos chaos da classe Chao
  chao = new Chao(200,390,400,20);
  teto = new Chao(200,10,400,20);
  paredeE = new Chao(10,200,20,400);
  paredeD = new Chao(390,200,20,400);
  
}

function draw(){
  background(51);
  Engine.update(engine);

  //apenas a bola vai ficar amarela usando push e pop
  push();
  fill("gold");
  ellipse(bola.position.x,bola.position.y,20);
  pop();


  //mostra os objetos na tela
  chao.display();
  teto.display();
  paredeE.display();
  paredeD.display();

}

