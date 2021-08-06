import {add} from './add.js';
import { deleteWord } from './delete.js';
import {showDictionary} from './dictionary.js'

// ---------------------------------------------------------------------------------------
let menu = `<nav id="navigation">
                <button >Add</button>
                <button >Delete</button>
                <button >Translate</button>
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

    if (target.textContent == 'Kraken Translate'){ 
        clear ()        
        main.insertAdjacentHTML ('beforeend', menu );
    }  
    
    if (target.textContent == 'Add'){
        clear ();
        add();
    }

    if (target.textContent == 'Dictionary') {
        clear ();
        showDictionary();
    }

    if (target.textContent == 'Delete') {
        clear ();
        deleteWord ();
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