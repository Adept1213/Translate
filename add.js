import {addInStore} from './store.js';

let str = `
    <input id='englishAdd' placeholder='English'></input>
    <input id='russianAdd' placeholder='Russian'></input>
    <button id='buttonSave'>Save</button>
`

export function add () {
    main.insertAdjacentHTML ('beforeend', str );

    buttonSave.addEventListener ('click', () => {
        addInStore (englishAdd.value, russianAdd.value);
        englishAdd.value = '';
        russianAdd.value = '';
    })
}
