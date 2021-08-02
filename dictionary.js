// import {getStore} from './store.js';

export function showDictionary () {
    let table = document.createElement ('table');
    let thE = document.createElement ('th')
    thE.textContent = 'English';
    let thR = document.createElement ('th');
    thR.textContent = 'Russian';
    table.append (thE, thR)
    main.append (table);
}