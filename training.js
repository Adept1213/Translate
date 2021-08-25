import {getDictionary} from './dictionary.js';
import {warningInput, clear} from './index.js';
import {showScore} from './showScore.js';
//support  function
function random (min, max) {
    return Math.round(min + Math.random() * (max - min));
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}



let dictionary = getDictionary();
let trainingHelp;

//function for swipe and  change language
let changeLanguage = (event) => {
    let start = event.clientX;
    document.addEventListener ('pointermove', pointerMove)

    document.addEventListener ('pointerup', () => {
        document.removeEventListener ('pointermove', pointerMove);
    },{once : true})

    function pointerMove (event) {
        if (event.clientX > start + 250) {         
            clear ();
            document.removeEventListener ('pointermove', pointerMove);
            document.removeEventListener ('pointerdown', changeLanguage);
            document.removeEventListener ('keydown', trainingHelp);        
            training ('russia');
        } 
        if (event.clientX < start - 250) {         
            clear ();
            document.removeEventListener ('pointermove', pointerMove);
            document.removeEventListener ('pointerdown', changeLanguage);
            document.removeEventListener ('keydown', trainingHelp);        
            training ('english');
        } 
    }
}



export function training (languageTraining, bool = true) {
    let count = 0;   
    let rightAnswer = 0;
    let arrWrongAnswer = [];
    let arrWords = languageTraining == "english" ? Object.keys(dictionary) : Object.values (dictionary);


    
    //make page
    let str = `
        <input id="trainingEnglish" disabled type='text' value='${arrWords[random (0, arrWords.length - 1)]}'>
        <input id="trainingRussia" type='text' placeholder="Enter Answer">
        <button id="checkAnswer">Check</button>
    `
    main.insertAdjacentHTML ('beforeend', str );



    //callback for button check and go
    trainingHelp = () => {
        if (event.keyCode !== 13 && event.target.textContent != 'Check') return;
        //check words
        if (dictionary[trainingEnglish.value] == trainingRussia.value.toLowerCase() || getKeyByValue (dictionary, trainingEnglish.value) == trainingRussia.value.toLowerCase()) {
            count++;
            rightAnswer++;
            arrWords.splice(arrWords.indexOf(trainingEnglish.value), 1);
            warningInput ('YESSSsss', 'green', trainingRussia, trainingEnglish);
        } else {
            count++;
            arrWrongAnswer.push (trainingEnglish.value);
            arrWords.splice(arrWords.indexOf(trainingEnglish.value), 1);
            warningInput (`Nope`, 'red', trainingRussia, trainingEnglish); 
        }

        //check count
        if (bool) {
            if (count == 10 || arrWords.length < 1) {
                arrWords = Object.keys(dictionary);
                showScore (rightAnswer, count, arrWrongAnswer);
            } else {
                trainingEnglish.value = arrWords[random (0, arrWords.length - 1)] 
            } 
            //eternal 
        } else {
            if (arrWords.length < 1) {
                arrWords = Object.keys(dictionary);
                trainingEnglish.value = arrWords[random (0, arrWords.length - 1)] 
            } else trainingEnglish.value = arrWords[random (0, arrWords.length - 1)] 
        }
  

    }



    //set eventListener
    checkAnswer.addEventListener ('click', trainingHelp);
    document.addEventListener ('keydown', trainingHelp);
    document.addEventListener ('pointerdown', changeLanguage);
    //remove eventListeners 
    document.addEventListener ('click', function cbf2 (event) {
        if (event.target.textContent == 'Kraken Translate' || event.target.textContent == 'Home') {
            document.removeEventListener ('keydown', trainingHelp);
            document.removeEventListener ('click', cbf2);
            document.removeEventListener ('pointerdown', changeLanguage);
        }  
    })
}

