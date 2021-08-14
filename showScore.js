import { clear } from "./index.js";



export function showScore (rightAnswer, count) {

let str = `<span>Your score - ${rightAnswer}/${count}<span> ` 
    
    clear ();
    main.insertAdjacentHTML ('beforeend', str );
}