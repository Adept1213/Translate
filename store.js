export function addInStore (english, russian) {
    let store;
    if (localStorage.store) {
        store = JSON.parse (localStorage.store)
    } else {
        store = [];
    }
    store.push ([english, russian]);
    localStorage.store = JSON.stringify (store)
}