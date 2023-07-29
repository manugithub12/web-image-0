
difference = 0;
rightWristX = 0;
leftWristX = 0;





recognition.onresut = function(event) {

    console.log(event);

   
    if(content =="Name")
    {
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started increasing Height of the font name ";
       draw_rect = "set"; 
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Font increased. ";
        increase_name = "";
    }
    if(draw_rect == "set")
    {
        recognition(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectenangle is drawn. ";
        increase_name = "";
    }
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized!');
}

function draw() {
    background('#969A97');

    document.getElementById("Name_side").innerHTML = "Width And Height of a Name will be = " + difference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(handX, handY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}