import { clear } from "./index.js";



export function showScore (rightAnswer, count, arrWrongAnswer) {

    let str = `<span>Your score - ${rightAnswer}/${count}<span> ` 
    clear ();
    main.insertAdjacentHTML ('beforeend', str );

    let table = document.createElement ('table');
    let th = document.createElement ('th')
    th.textContent = 'Problem words';
    table.append (th)

    for (let key of arrWrongAnswer) table.append(createTr (key))

    main.append (table);
    
}

function createTr (english) {
    let tr = document.createElement ('tr');
    let td = document.createElement ('td');
    td.textContent = english;
    tr.append (td)
    return tr
}