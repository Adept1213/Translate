import {deleteFromDictionary} from './dictionary.js';
import {warningInput} from './index.js';

let str = `
    <input id='englishDelete' placeholder='English'></input>
    <button id='deleteButton'>Delete world</button>
`

export function deleteWord () {
    main.insertAdjacentHTML ('beforeend', str );

    deleteButton.addEventListener ('click', () => {
        if(!deleteFromDictionary(englishDelete.value.toLowerCase())) {
            warningInput('Nope', 'red', englishDelete)
        } else warningInput (`\"${englishDelete.value.toLowerCase()}\" was remove`, 'green', englishDelete);
         
    })
}

