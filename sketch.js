let img1;

function preload(){
    img1 = loadImage('resources/media/testimage.png')
}

function setup(){
    createCanvas (1920,1080);
    colorMode(HSB);
    imageMode(CENTER);

    s = "bla bla bla"
}

function draw(){
    //image(img1,0,0,1920,1080);
    text(s,0,40);
}
