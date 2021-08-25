import {deleteFromDictionary} from './dictionary.js';
import {warningInput} from './index.js';


let str = `
    <input id='englishDelete' placeholder='English'></input>
    <button id='deleteButton'>Delete world</button>
`

export function deleteWord () {
    main.insertAdjacentHTML ('beforeend', str );
    deleteButton.addEventListener ('click', deleteWorldHelp);
    document.addEventListener ('keydown', deleteWorldHelp);

    document.addEventListener ('click', function cbf2 (event) {
        if (event.target.textContent == 'Kraken Translate' || event.target.textContent == 'Home') {
            document.removeEventListener ('click', cbf2);
            document.removeEventListener ('keydown', deleteWorldHelp);
        }  
    })
}

function deleteWorldHelp () {
    if (event.keyCode !== 13 && event.target.textContent != 'Delete world') return;
    if (!deleteFromDictionary (englishDelete.value.toLowerCase () )) {
        warningInput('Nope', 'red', englishDelete)
    } else {
        warningInput (`\"${englishDelete.value.toLowerCase()}\" was remove`, 'green', englishDelete);
    }
}
