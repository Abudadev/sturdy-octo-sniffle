function preload(){
    Food = loadImage("Shawarma.jpg");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    ObjectDetech = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("Status").innerHTML = "Status: Detecting for objects";
}

function draw(){
        image(Food,0,0,500,400);
        text("Food",55,50);
        stroke("blue");
        noFill();
        rect(30,30,450,350);
}

function back(){
    window.location = "index.html";
}

function modelloaded(){
    console.log("Model has loaded!");
    ObjectDetech.detect(Food,gotresults);
}

function gotresults(error,results){
 if(error){
 console.error(error);
}
else{
    console.log(results);
}
}