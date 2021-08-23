import {add} from './add.js';
import {deleteWord } from './delete.js';
import {showDictionary} from './showDictionary.js';
import {training} from './training.js'; 


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

        case 'Kraken Translate':
            clear ()        
            main.insertAdjacentHTML ('beforeend', menu );
            break;
        
        case 'Home' :
            clear ();
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
            training ('english');
            break;
    }
} 



export function clear () {
    while (main.children.length > 1) {
        main.lastElementChild.remove ()    
    }
}

export function warningInput (val, color, ...arr) {
    //remove another warning
    let warnings = document.getElementsByClassName ('warning');
    for (let key of warnings) key.remove();

    //add warning
    let str = `<input disabled class='warning' value='${val}' style="color : ${color}"'>`;
    main.insertAdjacentHTML ('beforeend', str);

    //clear inputs
    for (let key of arr) key.value = '';
    setTimeout (() => {
        try {
            document.querySelector ('.warning').remove()
        } catch (e) {
            if (e.name == 'TypeError') null;
        }     
    }, 2000)
}

export function buttonGo (f, f2) {
    function cbf (){ 
        event.keyCode === 13 ? f() : null;
    }
    document.addEventListener ('keydown', cbf)

    document.addEventListener ('click', event => {
        let target = event.target;

        if (target.textContent == 'Kraken Translate' || target.textContent == 'Home') {
            document.removeEventListener ('keydown', cbf);
            document.removeEventListener ('pointerdown', f2)
        }           
    }, {once : true})

}