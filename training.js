import {getDictionary} from './dictionary.js';
import {warningInput} from './index.js';
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

    checkAnswer.addEventListener ('click', () => {
        if (dictionary[trainingEnglish.value] == trainingRussia.value) {
            count++;
            rightAnswer++;
            arrEnglish.splice(arrEnglish.indexOf(), 1);
            warningInput ('YESSSsss', 'green', trainingRussia, trainingEnglish)
        } else {
            count++;
            arrEnglish.splice(arrEnglish.indexOf(), 1);
            warningInput (`Nope: ${dictionary[trainingEnglish.value]}`, 'red', trainingRussia, trainingEnglish); 
        }

        if (count == 3 || arrEnglish.length < 1) {
            showScore (rightAnswer, count);
        } else {
            trainingEnglish.value = arrEnglish[random (0, arrEnglish.length - 1)] 
        }
         
    })
       
}

