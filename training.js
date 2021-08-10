import {getDictionary} from './dictionary.js';
import {warningInput} from './index.js';

function random (min, max) {
    return Math.round(min + Math.random() * (max - min));
}
let dictionary = getDictionary();
let str = `
    <input id="trainingEnglish" disabled type='text' value='${dictionary[random(0, dictionary.length - 1)][0]}'>
    <input id="trainingRussia" type='text' placeholder="Enter Answer">
    <button id="checkAnswer">Check</button>
`

export function training () {

    main.insertAdjacentHTML ('beforeend', str );
    checkAnswer.addEventListener ('click', () => {
        let num;
        dictionary.forEach(element => {
            if (element[0] == trainingEnglish.value) num = element;
        });

        trainingRussia.value == num[1] ? 
            warningInput ('YESSSsss', 'green', trainingRussia) : 
            warningInput (`Nope, ${num[0]} - ${num[1]}`, 'red', trainingRussia);
    })

}
