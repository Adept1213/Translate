import {getDictionary} from './dictionary.js';
import {warningInput, buttonGo} from './index.js';
import {showScore} from './showScore.js';

function random (min, max) {
    return Math.round(min + Math.random() * (max - min));
}
let dictionary = getDictionary();
let arrEnglish = Object.keys(dictionary);
let str = `
    <input id="trainingEnglish" disabled type='text' value='${arrEnglish[random (0, arrEnglish.length - 1)]}'>
    <input id="trainingRussia" type='text' placeholder="Enter Answer">
    <button id="checkAnswer">Check</button>
`

export function training () {
    main.insertAdjacentHTML ('beforeend', str );
    let count = 0;   
    let rightAnswer = 0;

    let trainingHelp = () => {
        console.log (arrEnglish)
        if (dictionary[trainingEnglish.value] == trainingRussia.value.toLowerCase()) {
            count++;
            rightAnswer++;
            arrEnglish.splice(arrEnglish.indexOf(trainingEnglish.value), 1);
            warningInput ('YESSSsss', 'green', trainingRussia, trainingEnglish)
        } else {
            count++;
            arrEnglish.splice(arrEnglish.indexOf(trainingEnglish.value), 1);
            warningInput (`Nope: ${dictionary[trainingEnglish.value]}`, 'red', trainingRussia, trainingEnglish); 
        }

        if (count == 10 || arrEnglish.length < 1) {
            arrEnglish = Object.keys(dictionary);
            showScore (rightAnswer, count);
        } else {
            trainingEnglish.value = arrEnglish[random (0, arrEnglish.length - 1)] 
        } 
        console.log (arrEnglish)
    }

    checkAnswer.addEventListener ('click', trainingHelp)
    buttonGo (trainingHelp)
}

