var randomWords = require('random-words');
export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
  }

  splitLine() {
    let array1 = this.line1.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
    this.line1 = array1;
    let array2 = this.line2.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
    this.line2 = array2;
    let array3 = this.line3.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
    this.line3 = array3;
  }
  
  subtractVowels() {
    const vowelArray = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < this.line1.length; i++) {
      let wordArray = this.line1[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          if (wordArray[i+3] !== "g" && wordArray[i+2] !== "n" && wordArray[i+1] !== "i") {
            wordArray.splice((i+1), 1);
          }
        } 
      };
      this.line1[i] = wordArray.join("");
    };
    for (let i = 0; i < this.line2.length; i++) {
      let wordArray = this.line2[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          if (wordArray[i+3] !== "g" && wordArray[i+2] !== "n" && wordArray[i+1] !== "i") {
            wordArray.splice((i+1), 1);
          }
        }
      };
      this.line2[i] = wordArray.join("");
    };
    for (let i = 0; i < this.line3.length; i++) {
      let wordArray = this.line3[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          if (wordArray[i+3] !== "g" && wordArray[i+2] !== "n" && wordArray[i+1] !== "i") {
            wordArray.splice((i+1), 1);
          }
        }
      };
      this.line3[i] = wordArray.join("");
    };
  }

  countVowels() {
    let vowels = /[aeiou]/gi;
    let that = this;
    const vowelArray = ["a", "e", "i", "o", "u"];

    this.line1.forEach(function(word) {
      let result = word.match(vowels);
      that.count1 += result.length;
      let wordArray = word.split("");
      if (wordArray[wordArray.length-1] === "y" && vowelArray.includes(wordArray[wordArray.length-2])) {
        that.count1 ++;
      }
    })

    this.line2.forEach(function(word) {
      let result = word.match(vowels);
      that.count2 += result.length;
      let wordArray = word.split("");
      if (wordArray[wordArray.length-1] === "y" && vowelArray.includes(wordArray[wordArray.length-2])) {
        that.count1 ++;
      }
    })

    this.line3.forEach(function(word) {
      let result = word.match(vowels);
      that.count3 += result.length;
      let wordArray = word.split("");
      if (wordArray[wordArray.length-1] === "y" && vowelArray.includes(wordArray[wordArray.length-2])) {
        that.count1 ++;
      }
    })
  };

  isAHaiku() {
    if (this.count1 === 5 && this.count2 === 7 && this.count3 === 5) {
      return true;
    }
    return false;
  }
}
const myHaiku = new Haiku("Happy there Francis!", "How are you doing today?", "I'm fine thank you sir"); 
myHaiku.splitLine();
myHaiku.subtractVowels();
myHaiku.countVowels();
myHaiku.isAHaiku();
var randomWords = require('random-words');
randomWords(5);



// for (let i = 0; i < this.line1.length; i++) {
    //   let result = this.line1[i].match(vowels);
    //   this.count1 += result.length;
    // };