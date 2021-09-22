const input=document.querySelector('textarea');
const submitBtn=document.querySelector('#submit-btn')
const outputEl=document.querySelector('#output')

submitBtn.addEventListener('click', submitHandler);

let getUrl="https://api.funtranslations.com/translate/groot.json";

function getTranslation(text){
    return getUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("Something wrong with server! Try again after some time!😕")
}

function submitHandler(){
    const inputText=input.value;

    fetch(getTranslation(inputText))
    .then(response=>response.json())
    .then(json=>{
        var inputTranslator=json.contents.translated;
        outputEl.innerText=inputTranslator;

    })
    .catch(errorHandler);
}