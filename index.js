import {add} from './add.js';
import {deleteWord } from './delete.js';
import {showDictionary} from './showDictionary.js';
import {training} from './training.js'; 

localStorage.removeItem ('dictionary')

// ---------------------------------------------------------------------------------------
let menu = `<nav id="navigation">
                <button >Add</button>
                <button >Delete</button>
                <button >Training</button>
                <button >Eternal</button>
                <button>Dictionary</button>
            </nav>`

document.addEventListener ('DOMContentLoaded', () => {
    main.insertAdjacentHTML ('beforeend', menu );
    document.addEventListener ('click', clickMenu)
})


//----------------------------------------------------------------------------------------

function clickMenu () {
    let target = event.target;

    switch (target.textContent) {
        case 'Kraken Translate' :
            clear ()        
            main.insertAdjacentHTML ('beforeend', menu );
            break;
        
        case 'Add' : 
            clear ();
            add();
            break;

        case 'Dictionary' : 
            clear ();
            showDictionary();
            break;
            
        case 'Delete' : 
            clear ();
            deleteWord();
            break;
        
        case 'Training' :
            clear ();
            training ();
            break;
    }
} 



export function clear () {
    while (main.children.length > 0) main.firstChild.remove ()
}

export function warningInput (val, color, ...arr) {
    let str = `<input disabled class='warning' value='${val}' style="color : ${color}"'>`;
    main.insertAdjacentHTML ('beforeend', str);
    for (let key of arr) key.value = '';
    setTimeout (() => document.querySelector ('.warning').remove(), 2000)
}