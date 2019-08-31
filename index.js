const x =  document.getElementById('display-img');

function fileReader(event){
  x.src = URL.createObjectURL(event.target.files[0]);
}

async function runModel(){
  console.log("Classify in progress...");
  const result = await net.classify(x);
  console.log("Classification completed");
  document.getElementById('output').innerText = 
    `Prediction: \n${result[0].className}\n
    Probability: \n${result[0].probability}\n`
}

async function App(){
  console.log('Loading Model');
  net = await mobilenet.load();
  console.log('Model Ready');
  document.getElementById('run_model').addEventListener("click", runModel);
}

App();
