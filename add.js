import {addInDictionary} from './dictionary.js';
import {warningInput} from './index.js';

let str = `
    <input id='englishAdd' placeholder='English'></input>
    <input id='russianAdd' placeholder='Russian'></input>
    <button id='buttonSave'>Save</button>
`

export function add () {
    main.insertAdjacentHTML ('beforeend', str );
    buttonSave.addEventListener ('click', addHelp);
    document.addEventListener ('keydown', addHelp);

    document.addEventListener ('click', function cbf2 (event) {
        if (event.target.textContent == 'Kraken Translate' || event.target.textContent == 'Home') {
            document.removeEventListener ('click', cbf2);
            document.removeEventListener ('keydown', addHelp);
        }  
    })
}

function addHelp () {
    if (event.keyCode !== 13 && event.target.textContent != 'Save') return;
    if (addInDictionary (englishAdd.value.toLowerCase(), russianAdd.value.toLowerCase()) ) {
        warningInput ("Good", 'green', englishAdd, russianAdd);
    } else {
        warningInput ("Already have or empty ", 'red', englishAdd, russianAdd);
    }
}