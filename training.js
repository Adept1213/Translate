import {getDictionary} from './dictionary.js';
import {warningInput} from './index.js';

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
    checkAnswer.addEventListener ('click', () => {
        dictionary[trainingEnglish.value] == trainingRussia.value? 
            warningInput ('YESSSsss', 'green', trainingRussia, trainingEnglish) : 
            warningInput (`Nope: ${dictionary[trainingEnglish.value]}`, 'red', trainingRussia, trainingEnglish);

            trainingEnglish.value = arrEnglish[random (0, arrEnglish.length)]  
        })
       
}
