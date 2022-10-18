

function newWord(word) {
    return word.split('').reverse().join('');
  }


  let reverseLetters = function (words){
    let newWord = "";

    for (let i = words.length - 1; i >=0; i--){
        let letter = words[i]
        newWord += letter
    }
    return newWord;
  }


console.log(newWord("elims"))
console.log(reverseLetters("esaelp"))