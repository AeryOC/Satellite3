let img1;
let img2;
let img3; 
let img4;
let img5;

function preload(){
    img1 = loadImage('resources/media/testimage.png');
    img2 = loadImage('resources/media/planet-unscreen.gif');
    img3 = loadImage('resources/media/portal-unscreen.gif');
    img4 = loadImage('resources/media/sattransparent.gif');
    img5 = loadImage('resources/media/planet1.gif');
}


function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
 

}

function draw(){
    imageMode(CENTER);
    image(img3,1600,400,700,700); //portal
    image(img5,300,700,500,500); //planet
    image(img4,990,500,480,270); //satellite
    

}
