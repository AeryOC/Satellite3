let img1;
let img2;
let img3; 
let img4;
let img5;

function preload(){
    img1 = loadImage('resources/media/testimage.png'); //placeholder
    img2 = loadImage('resources/media/planet-unscreen.gif'); //Sam's planet
    img3 = loadImage('resources/media/portal-unscreen.gif'); //Sam's portal
    img4 = loadImage('resources/media/sattransparent.gif'); //Aery's satellite
   // img5 = loadImage('resources/media/planet1.gif'); // Aiden's planet
}


function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
 

}

function draw(){
    imageMode(CENTER);
    //scale(-1,1);
    image(img3,400,400,700,700);//portal
    image(img4,990,500,960,540); //satellite
    //scale(1,1);
    image(img2,1700,700); //planet
    

}
