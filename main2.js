function preload(){
    petimg = loadImage("Rizzcat.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    ObjectDetech = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("Status").innerHTML = "Status: Detecting for objects";
}

function draw(){
        image(petimg,0,0,500,400);
        text("Cat",35,75);
        stroke("blue");
        noFill();
        rect(10,40,450,250);
}

function back(){
    window.location = "index.html";
}

function modelloaded(){
    console.log("Model has loaded!");
    ObjectDetech.detect(petimg,gotresults);
}

function gotresults(error,results){
 if(error){
 console.error(error);
}
else{
    console.log(results);
}
}