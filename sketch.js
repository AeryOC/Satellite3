let img1;
let img2;
let img3; 
let img4;

function preload(){
    img1 = loadImage('resources/media/testimage.png');
    img2 = loadImage('resources/media/planet-unscreen.gif');
    img3 = loadImage('resources/media/portal-unscreen.gif');
    img4 = loadImage('resources/media/sat1.gif');
}


function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
    imageMode(CENTER);


    s = "bla bla bla"
}

function draw(){
    background(255);
    image(img1,width,height);
    image(img4,0,0);
    text(s,0,40);

}
