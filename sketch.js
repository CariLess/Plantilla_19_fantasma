//1a crear varibles para la torre 
//1b crear variables para las puertas
//1c crear lo mismo para los barandales hasta el 4c
//1d crear variables para el fantasma 
var tower, towerImg;
var door, doorImg, doorsGroup; 
var climber, climberImg, climbersGroup;
var ghost, ghostImg;
//1F 
var invisibleBlock,invisibleBlock; 
//1G variable de estado inicializada en PLAY
var gameState= "play";
//1h variable para el sonido
var spookySound;
//I1 variable para el score
var score=0;


//2a precargar la imagen de la torre towerImg
//2b precargar las imagen de las puertas doorImg
//2c 
//2d 
//2h cargar sonido
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
 
 
  //3h reproducir el sonido cíclico

  
  //3a crear sprite, agregar imagen de la torre y darle una velocidad inicial
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  
  //4b crear grupo para puertas
  
  //4c
 
  //3F
  
  
  
  //3d crear sprite, agregar imágen y escalar el fantastma
  
  
}

function draw(){
  background("black");
  
    
  //2G estado de PLAY: mover todo a este estado
  
    
  //4a regresar la imagen de fondo
  if(tower.y > 400){
    tower.y = 300;
  }
  
  //4d Agregar movimiento de salto, izquierda y derecha al fantasma
  
  
  //4d agregar GRAVEDAD (caída) al fantasma
  
  
  //1e hacer que se caiga el fantasma si toca los barandales
  
  
  //4F
  
    //2G-2
    
 
  
  //5b invocarla función que crea las puertas
 
  
  drawSprites();
    //I2 actualizar score
    
    
  
  //3G estado de END, generar pantalla nueva y mensaje de GameOver
  
  
}

//3b crear función para generar puertas
function spawnDoors(){
  //3b-1 escribir condicional para hacer que las puertas salgan cada ciertos (240) cuadros
 
    //3b-2 crear sprite y agregar imagen
   
    //3c-1
   
    
    //2F-1
   
    
    //3b-3 hacer que la posición de las puertas en x sea random 
   
    //3b-4 darles una velocidad de bajada a las puertas
   
    
    //3c-2 poner los barandales a la par que las puertas
    
    //2F-2 
   
    
    //3b-5 asignar ciclo de vida a la variable
    
    //3c-3 
    
    //2F-3
    
  
    //5d
    
  
    //3b-6 agregar las puertas a un grupo
   
  
    //3c-4
    
    
    //2F-4
    
    

  
}