import {getDictionary} from './dictionary.js';

function random (min, max) {
    return Math.round(min + Math.random() * (max - min));
}
let dictionary = getDictionary();
let str = `
    <input disabled type='text' value='${dictionary[random(0, dictionary.length)][0]}'>
    <input type='text'>
    <button>Check</button>
`

export function training () {

    main.insertAdjacentHTML ('beforeend', str );

}
