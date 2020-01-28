
//You are creating am image classifier over here and named it mobile net-- 
//because that is what you are using
let mobilenet;
let classifier;
let video;
//let puffin;
let fabel;
let ukeButton;
let trainButton;
let penButton;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function modelReady(){
    console.log('Model is ready!!!!');
   mobilenet.predict(gotResults);
}

function videoReady(){
    console.log('video is ready');
}

function whileTraining(loss){ 
    if (loss==null){
        console.log('training complete');
        classifier.classify(gotResults);
    } else{
        console.log(loss);
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////
function gotResults(error,results){
    if(error){
        console.log(error);
    }else{
        fabel = results[0].label
        classifier.classify(gotResults);
        //console.log(results);
        // let fabel = results[0].label;
        // fill(0);
        // textSize(64);
        //text(fabel, 10, height-100);
        //****creating a dom element for the label
        //createP(fabel);
       //*** */ accessing DOM
        document.querySelector('#hello').textContent = label;
         //**the line below helps to predict contineously */
         //mobilenet.predict(gotResults);
    }
}

//**this function is used to display image to the canvas
// function imageReady(){
//     image(puffin, 0, 0, width, height);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////

function setup (){
    //createCanvas(640,480);
    document.querySelector('#canva')
    //**createImg is function from p5 liberary to draw image on dom element
   // puffin = createImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vdc5uaRFoQ7wOJziy3ZmtwUm_eKX5RC_CzUas-ZD95-WP0tnfA&s',imageReady);
   //**create video or record video */ 
   video = createCapture(VIDEO);
   video.hide(0);
   background(0);
    //**Hide the image using p5 liberary
    // puffin.hide(0);
    // image(puffin, 0, 0);

    // **generates image classifier object and stores it in the image--
    //**classifier object you are using the first element MobileNet as a pre trained model
    //mobilenet = ml5.imageClassifier('MobileNet',video,modelReady);
    mobilenet = ml5.featureExtractor('MobileNet',modelReady);
    classifier = mobilenet.classification(video,videoReady);
     
    //**setup button */
    ukeButton = createButton('guitar');
    ukeButton.mousePressed(function(){
        classifier.addImage('guitar');
    });

    penButton = createButton('pen');
    penButton.mousePressed(function(){
        classifier.addImage('pen');
    });

    trainButton = createButton('train');
    trainButton.mousePressed(function(){
        classifier.train(whileTraining);
    });

}
/////////////////////////////////////////////////////////////////////////////////////
function draw(){
    background(0);
    image(video, 0, 0, 320, 240);
    fill(255);
    textSize(16);
    text(fabel, 10, height-10);
}
