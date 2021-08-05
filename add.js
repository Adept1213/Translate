import {addInStore} from './store.js';

let str = `
    <input id='englishAdd' placeholder='English'></input>
    <input id='russianAdd' placeholder='Russian'></input>
    <button id='buttonSave'>Save</button>
`

export function add () {
    main.insertAdjacentHTML ('beforeend', str );

    buttonSave.addEventListener ('click', () => {
        if (addInStore (englishAdd.value, russianAdd.value)) {
            englishAdd.value = '';
            russianAdd.value = '';
        } else {
            warningWrongInput ();
        }
    })
}

function warningWrongInput () {
    englishAdd.value = 'wrong word';
    englishAdd.style.color = 'red';
    setTimeout (() => {
        englishAdd.value = '';
        russianAdd.value = '';
        englishAdd.style.color = 'white ';   
    }, 1000)
}