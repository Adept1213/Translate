

export function addInDictionary (english, russian) {
    let dictionary = checkExisting ();

    if (dictionary[english] || english == '' || russian == '') {
        return false
    } else {
        dictionary[english] = russian;
        localStorage.dictionary = JSON.stringify (dictionary);
        return true; 
    }
}

export function getDictionary () {
    let dictionary = checkExisting ();
    return dictionary;
}

export function deleteFromDictionary (english) {
    let dictionary = checkExisting ();

    if (!dictionary[english]) {
        return false;
    } else {
        delete dictionary[english]
        localStorage.dictionary = JSON.stringify (dictionary);
        return true
    }  
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
function checkExisting () {
    let dictionary;
    if (localStorage.dictionary) {
        return dictionary = JSON.parse (localStorage.dictionary)
    } else {
        return dictionary = {
            'dog': 'собака',
            'cat': 'кот',
            'home': 'дом',
            'phone': 'телефон',
            'go': 'идти',
            'ice': 'лёд',
            'music': 'музыка',
            'water': 'вода',
            'money': 'деньги',
        };
    }
}

