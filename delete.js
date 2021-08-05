import {deleteFromStore} from './store.js';

let str = `
    <input id='englishDelete' placeholder='English'></input>
    <button id='deleteButton'>Delete</button>
`

export function deleteWord () {
    main.insertAdjacentHTML ('beforeend', str );

    deleteButton.addEventListener ('click', () => {
        deleteFromStore (englishDelete.value)
    })
}
