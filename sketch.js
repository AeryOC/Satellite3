let img1;

function preload(){
    img1 = loadImage('testimage.png')
}

function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
    imageMode(CENTER);

    s = "bla bla bla"
}

function draw(){
    backgroundImage(img1)
    text(s,0,40)
}
