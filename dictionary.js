

export function addInDictionary (english, russian) {
    let dictionary = checkExisting ();

    if (checkSimilarityEmpty (english, russian)) {
        return false;
    } else {
        dictionary.push ([english, russian]);
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
    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i][0] == english) {
            dictionary.splice (i, 1)
            localStorage.dictionary = JSON.stringify (dictionary)
            return true;
        } 
    }     
    return false
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
function checkExisting () {
    let dictionary;
    if (localStorage.dictionary) {
        return dictionary = JSON.parse (localStorage.dictionary)
    } else {
        return dictionary = [
            ['dog', 'собака']
            ['cat', 'кот']
            ['home', 'дом']
            ['phone', 'телефон']
            ['go', 'идти']
            ['ice', 'лёд']
            ['TV', 'телевизор']
            ['music', 'музыка']
            ['water', 'вода']
            ['money', 'деньги']
        ];
    }
}

function checkSimilarityEmpty (english, russian) {
    let dictionary = getDictionary()
    for (let key of dictionary) {
        if (key[0] == english || russian == key[1] || english == '' || russian == ''){
            console.log('test')
            return true;
        }
    }
}
