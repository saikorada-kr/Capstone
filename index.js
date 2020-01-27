
//simple linear regression.

// async function learnLinear(){
    
//     const model= tf.sequential();
//     model.add(tf.layers.dense({units: 1, inputShape: [1]}));
//     model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
//     const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
//     const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

//     await model.fit(xs, ys, {epochs: 250});
//     document.getElementById('output_field').innerText = 
//     model.predict(tf.tensor2D([20], [1, 1])).print();
    
// }
// learnLinear();
 

// below code is working up to 35 line

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys, {epochs: 500}).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  document.getElementById('output_field').innerText = 
  model.predict(tf.tensor2d([5], [1, 1]));
  // Open the browser devtools to see the output
});



// import * as tf from '@tensorflow/tfjs';

// // Define a model for linear regression.
// const model = tf.sequential();
// model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// // Generate some synthetic data for training.
// const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// // Train the model using the data.
// model.fit(xs, ys, {epochs:500}).then(() => {
//   // Use the model to do inference on a data point the model hasn't seen before:
//   document.getElementById('output_field').innerText = 
//   model.predict(tf.tensor2d([5], [1, 1])).print();
//   // Open the browser devtools to see the output
// });



//testing code
// tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]).print();


//testing code
// function setup(){
     
//     const values = [];
//     for(let i=0; i < 30; i++){
//         values[i] = math.random(0, 100);
//     };
    
//     console.log(values);
//     const shape = [2, 5, 3];
//     const tense = tf.tensor3d(values, shape, 'int32');
//     // console.log(data.toString());
//     // console.log(data);
//     tense.data().then(function(stuff){
//         console.log(stuff)
//     })
//     };  
//     setup();