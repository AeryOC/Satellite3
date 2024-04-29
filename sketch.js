let img1;
let img2;
let img3; 
let img4;

function preload(){
    img1 = loadImage('resources/media/testimage.png');
    img2 = loadImage('resources/media/planet-unscreen.gif');
    img3 = loadImage('resources/media/portal-unscreen.gif');
    img4 = loadImage('resources/media/sattransparent.gif');
}


function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
 


    s = "bla bla bla"
}

function draw(){
    background(130);
    image(img1,0,0,1920,1080);
    image(img4,0,0,250,250);
    text(s,0,40);

}
