import {addInDictionary} from './dictionary.js';
import {warningInput} from './index.js';

let str = `
    <input id='englishAdd' placeholder='English'></input>
    <input id='russianAdd' placeholder='Russian'></input>
    <button id='buttonSave'>Save</button>
`

export function add () {
    main.insertAdjacentHTML ('beforeend', str );

    buttonSave.addEventListener ('click', () => {
        if (addInDictionary (englishAdd.value, russianAdd.value)) {
            warningInput ("Good", 'green', englishAdd, russianAdd);
        } else {
            warningInput ("Already have or empty ", 'red', englishAdd, russianAdd);
        }
    })
}
