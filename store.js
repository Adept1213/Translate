

export function addInStore (english, russian) {
    let store = checkExisting ();

    if (checkSimilarityEmpty (english, russian)) {
        return false;
    } else {
        store.push ([english, russian]);
        localStorage.store = JSON.stringify (store);
        return true;        
    }

}

export function getStore () {
    let store = checkExisting ();
    return store;
}

export function deleteFromStore (english) {
    let store = checkExisting ();
    for (let i = 0; i < store.length; i++) {
        if (store[i][0] == english) {
            store.splice (i, 1)
            localStorage.store = JSON.stringify (store)
            return true;
        } 
    }     
    return false
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
function checkExisting () {
    let store;
    if (localStorage.store) {
        return store = JSON.parse (localStorage.store)
    } else {
        return store = [];
    }
}

function checkSimilarityEmpty (english, russian) {
    let store = getStore()
    for (let key of store) {
        if (key[0] == english || russian == key[1] || english == '' || russian == ''){
            console.log('test')
            return true;
        }
    }
}
