import {add} from './add.js';
import {showDictionary} from './dictionary.js'

// ---------------------------------------------------------------------------------------
let menu = `<nav id="navigation">
                <button >Add</button>
                <button >Remove</button>
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
} 

export function clear () {
    while (main.children.length > 0) main.firstChild.remove ()
}
