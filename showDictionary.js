import {getDictionary} from './dictionary.js';

export function showDictionary () {
    let table = document.createElement ('table');
    let thE = document.createElement ('th')
    thE.textContent = 'English';
    let thR = document.createElement ('th');
    thR.textContent = 'Russian';
    table.append (thE, thR)

    let store = getDictionary ();
    for (let key in store) table.append(createTr (key, store[key]))

    main.append (table);
}

function createTr (english, russian) {
    let tr = document.createElement ('tr');
    let tdE = document.createElement ('td');
    tdE.textContent = english;
    let tdR = document.createElement ('td');
    tdR.textContent = russian;
    tr.append (tdE, tdR)
    return tr
}