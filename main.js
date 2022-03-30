function setup() {
  canvas =createCanvas(600,500);
  canvas.center();

  video =createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 500)
}

function preload() {
  music =loadSound("Music.mp3");
  music1 =loadSound("Music1.mp3")
}



  