let img1;
let img2;
let img3; 
let img4;

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
 


    s = "bla bla bla"
}

function draw(){
    image(img5,0,500,500,1080);
    image(img4,400,100,880,370);
    text(s,0,40);

}
