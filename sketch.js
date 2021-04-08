var canvas;
var music;

var colorChanger;
var color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12;

function preload(){
    
    music = loadSound("music.mp3");

    

}


function setup(){
    canvas = createCanvas(800,600);

    colorChanger = createSprite(400, 300, 30,30);
    
    color1 = createSprite(115, 570, 190, 20);
    color2 = createSprite(310, 570, 170, 20);
    color3 = createSprite(490, 570, 160, 20);
    color4 = createSprite(680, 570, 190, 20);

    color5 = createSprite(115, 30, 190, 20);
    color6 = createSprite(310, 30, 170, 20);
    color7 = createSprite(490, 30, 160, 20);
    color8 = createSprite(680, 30, 190, 20);

    color9 = createSprite(30, 170, 20, 220);
    color10 = createSprite(30, 420, 20, 220);

    color11 = createSprite(770, 170, 20, 220);
    color12 = createSprite(770, 420, 20, 220);

    colorChanger.shapeColor = "white";

    colorChanger.velocityX = -3;
    colorChanger.velocityY = 8;

}

function draw() {
    background("#7d7d7d");
    createEdgeSprites();

    color1.shapeColor = "#ff9e9e";
    color2.shapeColor = "#ffb34f";
    color3.shapeColor = "#fcf52b";
    color4.shapeColor = "#c8ff9e";
    color5.shapeColor = "#9effcf";
    color6.shapeColor = "#2a96d4";
    color7.shapeColor = "#df9eff";
    color8.shapeColor = "#b84ebf";
    color9.shapeColor = "#6bd42a";
    color10.shapeColor = "#f0ff82";
    color11.shapeColor = "#253dd9";
    color12.shapeColor = "#25d9cd";

    //play.music();

    
    if(color1.isTouching(colorChanger)){
      
      colorChanger.shapeColor = "#ff9e9e";
      colorChanger.bounceOff(color1);

    }

    if(color2.isTouching(colorChanger)){
       
        colorChanger.shapeColor = "#ffb34f";
        colorChanger.bounceOff(color2);

    }

    if(color3.isTouching(colorChanger)){
      
        colorChanger.shapeColor = "#fcf52b";
        colorChanger.bounceOff(color3);

    }

    if(color4.isTouching(colorChanger)){
       
        colorChanger.shapeColor = "#c8ff9e";
        colorChanger.bounceOff(color4);

    }

    if(color5.isTouching(colorChanger)){
      
        colorChanger.shapeColor = "#9effcf";
        colorChanger.bounceOff(color5);

    }

    if(color6.isTouching(colorChanger)){
      
        colorChanger.shapeColor = "#2a96d4";
        colorChanger.bounceOff(color6);
        
    }
    
    if(color7.isTouching(colorChanger)){
     
        colorChanger.shapeColor = "#df9eff";
        colorChanger.bounceOff(color7);

    }

    if(color8.isTouching(colorChanger)){
      
        colorChanger.shapeColor = "#b84ebf";
        colorChanger.bounceOff(color8);

    }

    if(color9.isTouching(colorChanger)){
       
        colorChanger.shapeColor = "#6bd42a";
        colorChanger.bounceOff(color9);
        
    }

    if(color10.isTouching(colorChanger)){
     
        colorChanger.shapeColor = "#f0ff82";
        colorChanger.bounceOff(color10);
        colorChanger.velocityX = 0;
        colorChanger.velocityY = 0;

    }

    if(color11.isTouching(colorChanger)){
     
        colorChanger.shapeColor = "#253dd9";
        colorChanger.bounceOff(color11);

    }

    if(color12.isTouching(colorChanger)){
       
        colorChanger.shapeColor = "#25d9cd";
        colorChanger.bounceOff(color12);

    }

    drawSprites();
}
