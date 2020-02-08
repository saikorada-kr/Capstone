let mobilenet;
let classifier;
let fabel;
let ukeButton;
let whistleButton;
let trainButton;
let saveButton;
let final = [""];
let accuracy;

var predictions = [];


  

//model will load and starts
// function modelReady() {
//   console.log('Model is ready!!!');
// }

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
    console.log(result)
     accuracy = result[0].confidence;
     if(accuracy>0.94){
    fabel=result[0].label;
    if (predictions.length > 0) {
      var lastPrediction = predictions[predictions.length - 1];
      if (lastPrediction !== fabel) {
        predictions.push(fabel);
      }
    } else {
      predictions.push(fabel);
    }
     }
   
    classifier.classify(gotResults);
   // document.querySelector('#hello').textContent=fabel;
    document.querySelector('#hello').textContent=predictions.join(" ");
  }
}

//video size and transferring images(features)
function setup() {
  noCanvas();
   //createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.parent('#video');
   // canvas.hide();
  // video.hide();
  // background(0);

  mobilenet = ml5.featureExtractor('MobileNet');
  const options = {numLabels: 6}
  classifier = mobilenet.classification(video, options);


  const button1 = document.querySelector('#btn1');

  button1.addEventListener('click', event => {
    classifier.addImage('I');
  });

  const button2 = document.querySelector('#btn2');

  button2.addEventListener('click', event => {
    classifier.addImage('NEED');
  });


  const button3 = document.querySelector('#btn3');

  button3.addEventListener('click', event => {
    classifier.addImage('HELP');
  });

  const button4 = document.querySelector('#btn4');

  button4.addEventListener('click', event => {
    classifier.addImage('HOW');
  });


  const button5 = document.querySelector('#btn5');

  button5.addEventListener('click', event => {
    classifier.addImage('ARE');
  });

  const button6 = document.querySelector('#btn6');

  button6.addEventListener('click', event => {
    classifier.addImage('YOU');
  });


  const button99 = document.querySelector('#btn99');

  button99.addEventListener('click', event => {
    classifier.train(whileTraining);
  });

  const button100 = document.querySelector('#btn100');

  button100.addEventListener('click', event => {
    classifier.save();
  });

  
}

//custom button
// ukeButton = createButton('hello');
// ukeButton.mousePressed(function() {
//   classifier.addImage('hello');
// });
// //custom button
//   whistleButton = createButton('how are u!!');
//   whistleButton.mousePressed(function() {
//     classifier.addImage('how are u!!');
//   });

// //train button
//   trainButton = createButton('train');
//   trainButton.mousePressed(function() {
//     classifier.train(whileTraining);
//   });

// //for saving dataset()
// saveButton = createButton('save');
//   saveButton.mousePressed(function() {
//     classifier.save();
//   });
// }

//text area
//function draw() {
  //background(0);
  //image(video, 0, 0, 320, 270);
  // fill(255);
  // textSize(16);
  //text(fabel, 10, height - 10);
//}
