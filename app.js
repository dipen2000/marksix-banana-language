const button = document.querySelector(".btn");
const txtArea = document.querySelector(".txtInput");
const outputSection = document.querySelector(".out-section");
const url = "https://api.funtranslations.com/translate/minion.json";
button.addEventListener("click" , function clickTranslateHandler(){
    let txtInput = txtArea.value;
    let urlConstructed = urlConstructor(txtInput);
    fetch(urlConstructed)
        .then((response) => response.json())
        .then(json => printOutput(json))
        .catch(errorHandler)
});

function urlConstructor(text){
    return url + "?text=" + text;
}

function errorHandler(error){
    console.log("An error occured " + error);
}

function printOutput(json){
    let translation = json.contents.translated;
    outputSection.innerText = translation;
}