let img1;
let img2;
let img3; 

function preload(){
    img1 = loadImage('resources/media/testimage.png');
    img2 = loadImage('resources/media/planet-unscreen.gif');
    img3 = loadImage('resources/media/portal-unscreen.gif');
}


function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
    imageMode(CENTER);

    s = "bla bla bla"
}

function draw(){
    image(img1,width,height);
    text(s,0,40);

}
