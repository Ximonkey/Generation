
let string = "bocina";
const words = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'papel', 'Cacahuates', 'pistaches', 'chicharrones'];

let stringLength = string.length;

function bigWords(inputString, wordsArray) {
    const resultArray = [];

    for (const word of wordsArray) {
        if (word.length > inputString.length) {
            resultArray.push(word);
        }
    }

    return resultArray;
}

const result = bigWords(string, words);
console.log(result);

function printArrayInHTML(stringArray) {
    const ulElement = document.createElement('ul');

    stringArray.forEach(word => {
        const liElement = document.createElement('li');
        liElement.textContent = word;
        ulElement.appendChild(liElement);
    });

    document.body.appendChild(ulElement);
}

printArrayInHTML(result);