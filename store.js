

export function addInStore (english, russian) {
    let store = checkExisting ();
    store.push ([english, russian]);
    localStorage.store = JSON.stringify (store)
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
}


function checkExisting () {
    let store;
    if (localStorage.store) {
        return store = JSON.parse (localStorage.store)
    } else {
        return store = [];
    }
}