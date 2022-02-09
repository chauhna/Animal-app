function startClassification(){
    navigator.meadiaDevices.getUserMeadia({ audio: true });
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}
function modelReady(){
    classifer.classify(gotResultS);
}