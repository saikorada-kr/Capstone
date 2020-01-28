let mobilenet;
let classifier;
let video;
let label;
let ukeButton;
let whistleButton;
let trainButton;
let saveButton;

//model will load and starts
function modelReady() {
  console.log('Model is ready!!!');
}

//webcam will starts
function videoReady() {
  console.log('Video is ready!!!');
}

//while training 
function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
}

//it will shows result in the from of text
function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}


//video size and transferring images(features)
function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

//custom button
  ukeButton = createButton('hello');
  ukeButton.mousePressed(function() {
    classifier.addImage('hello');
  });


//custom button
  whistleButton = createButton('how are u!!');
  whistleButton.mousePressed(function() {
    classifier.addImage('how are u!!');
  });

//train button
  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

//for saving dataset()
saveButton = createButton('save');
  saveButton.mousePressed(function() {
    classifier.save();
  });
}

//text area
function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}
