import {addInDictionary} from './dictionary.js';
import {warningInput, buttonGo} from './index.js';

let str = `
    <input id='englishAdd' placeholder='English'></input>
    <input id='russianAdd' placeholder='Russian'></input>
    <button id='buttonSave'>Save</button>
`

export function add () {
    main.insertAdjacentHTML ('beforeend', str );
    buttonSave.addEventListener ('click', addHelp)
    buttonGo (addHelp);
}

function addHelp () {
    if (addInDictionary (englishAdd.value.toLowerCase(), russianAdd.value.toLowerCase())) {
        warningInput ("Good", 'green', englishAdd, russianAdd);
    } else {
        warningInput ("Already have or empty ", 'red', englishAdd, russianAdd);
    }
}