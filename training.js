import {getDictionary} from './dictionary.js';
import {warningInput, buttonGo, clear} from './index.js';
import {showScore} from './showScore.js';

function random (min, max) {
    return Math.round(min + Math.random() * (max - min));
}
let trainingHelp;
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
let dictionary = getDictionary();

let cbf = event => {
    let start = event.clientX;
    document.addEventListener ('pointermove', pointerMove)

    document.addEventListener ('pointerup', () => {
        document.removeEventListener ('pointermove', pointerMove);
    },{once : true})

    function pointerMove (event) {
        if (event.clientX > start + 250) {         
            clear ();
            document.removeEventListener ('pointermove', pointerMove);
            document.removeEventListener ('pointerdown', cbf);                
            training ('russia');
        }
    }
}

function languageTrainin () {
    document.addEventListener ('pointerdown', cbf)
}

export function training (languageTraining) {
    let count = 0;   
    let rightAnswer = 0;
    let arrWrongAnswer = [];
    let arrWords = languageTraining == "english" ? Object.keys(dictionary) : Object.values (dictionary);
    let str = `
        <input id="trainingEnglish" disabled type='text' value='${arrWords[random (0, arrWords.length - 1)]}'>
        <input id="trainingRussia" type='text' placeholder="Enter Answer">
        <button id="checkAnswer">Check</button>
    `
    main.insertAdjacentHTML ('beforeend', str );

    trainingHelp = () => {
        //check words
        console.log (getKeyByValue (dictionary, trainingEnglish.value), trainingRussia.value.toLowerCase())
        if (dictionary[trainingEnglish.value] == trainingRussia.value.toLowerCase() || getKeyByValue (dictionary, trainingEnglish.value) == trainingRussia.value.toLowerCase()) {
            count++;
            rightAnswer++;
            arrWords.splice(arrWords.indexOf(trainingEnglish.value), 1);
            warningInput ('YESSSsss', 'green', trainingRussia, trainingEnglish)
        } else {
            count++;
            arrWrongAnswer.push (trainingEnglish.value)
            arrWords.splice(arrWords.indexOf(trainingEnglish.value), 1);
            warningInput (`Nope`, 'red', trainingRussia, trainingEnglish); 
        }

        //check count
        if (count == 10 || arrWords.length < 1) {
            arrWords = Object.keys(dictionary);
            showScore (rightAnswer, count, arrWrongAnswer);
        } else {
            trainingEnglish.value = arrWords[random (0, arrWords.length - 1)] 
        } 

    }
    checkAnswer.addEventListener ('click', trainingHelp)
    buttonGo (trainingHelp, cbf)
    languageTrainin();
}

