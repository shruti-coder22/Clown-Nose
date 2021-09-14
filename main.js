nose_x = 0;
nose_y = 0;


function preload() {
    clown_nose = loadImage("https://i.postimg.cc/63XK84nL/clown-nose.png");
}

function setup() {
    var canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    poseNet_var = ml5.poseNet(video, modelLoaded);
    poseNet_var.on("pose", gotPoses);
}

function gotPoses(results) {
    if ( results.length > 0 ) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log( "Nose X = " + nose_x);
        console.log("Nose Y = " + nose_y);
        
    }
}

function modelLoaded() {
    console.log("The poseNet model has been intialised");
}

function draw() {
    image(video, 0, 0, 500, 400);

//    fill("#ff0051");
//    stroke("#ff0051");
//    circle(nose_x, nose_y, 40);

    image(clown_nose, nose_x - 35, nose_y - 25, 70, 50);
}

function takeSnapshot() {
    save("I_am_a_clownnnn_loooooooook_at_meeeeeeee.jpeg");
}