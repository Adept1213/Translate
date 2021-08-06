import {deleteFromStore} from './store.js';
import {warningInput} from './index.js';

let str = `
    <input id='englishDelete' placeholder='English'></input>
    <button id='deleteButton'>Delete world</button>
`

export function deleteWord () {
    main.insertAdjacentHTML ('beforeend', str );

    deleteButton.addEventListener ('click', () => {
        if(!deleteFromStore(englishDelete.value)) {
            warningInput('Nope', 'red', englishDelete)
        } else warningInput (`\"${englishDelete.value}\" was remove`, 'green', englishDelete);
         
    })
}

