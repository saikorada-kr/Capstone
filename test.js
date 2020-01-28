
// Grab elements, create settings, etc.
const video = document.getElementById('video');

// Create a webcam capture
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })

// Initialize the Image Classifier method with MobileNet passing the video as the
// second argument and the getClassification function as the third
ml5.imageClassifier('MobileNet', video)
  .then(classifier => loop(classifier))

const loop = (classifier) => {
  classifier.classify()
    .then(results => {
      result.innerText = results[0].label;
      probability.innerText = results[0].confidence.toFixed(4);
      loop(classifier) // Call again to create a loop
    })
}