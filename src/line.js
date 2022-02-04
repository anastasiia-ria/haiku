export default class Line {

  constructor(line) {
    this.line = line;
    this.lineArray = [];
    this.lineArrayTest = [];
    this.sylCount = 0;
  }

  splitLine() {
    this.lineArray = this.line.toLowerCase().replace(/[.,/#?!$%^&*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
  }

  subtractVowels() {
    const vowelArray = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < this.lineArray.length; i++) {
      let vowelCheck = 0;
      let wordArray = this.lineArray[i].split("");
      for (let j = 0; j < wordArray.length; j ++) {
        if (vowelArray.includes(wordArray[j])) {
          vowelCheck ++;
        }
        if (vowelArray.includes(wordArray[j]) && vowelArray.includes(wordArray[j+1])) {
          if ((wordArray[j+3] === "g") && wordArray[j+2] === "n" && wordArray[j+1] === "i") {
            return 0;
          } else {
            wordArray.splice((j+1), 1);
          }
        } 
        if (wordArray[j] === "y" && ((!vowelArray.includes(wordArray[j-1])) || wordArray[j-1] === undefined ) && ((!vowelArray.includes(wordArray[j+1])) || wordArray[j-1] === undefined )) {
          this.sylCount ++;
          console.log(wordArray[j-1]);
          console.log(wordArray[j+1]);
          console.log(vowelArray.includes(wordArray[j-1]));
          console.log(vowelArray.includes(wordArray[j+1]));
          console.log("yCount");
        }
      }
      if ("e" === wordArray[wordArray.length-1] && (vowelCheck > 1 || this.count === 1)) {
        wordArray.pop();
      }
      if (("s" === wordArray[wordArray.length-1] || "d" === wordArray[wordArray.length-1] )&& "e" === wordArray[wordArray.length-2] && vowelCheck > 1) {
        wordArray.pop();
        wordArray.pop();
      }
      this.lineArray[i] = wordArray.join("");
    }
  }

  countVowels() {
    let vowels = /[aeiou]/gi;
    let that = this;
    this.sylCount = 0;

    this.lineArray.forEach(function(word) {
      let result = word.match(vowels);
      if (result !== null) {
        that.sylCount += result.length;
      }
      console.log(word);
    });
    console.log(that.sylCount);
  }

  countSyllables() {
    this.subtractVowels();
    this.countVowels();
  }

  randomFive() {
    let randomWords = require('random-words');
    for ( let i = 0; i < 5; i++) {
      let randomWord = randomWords({exactly: 1}).join("");
      this.lineArray.push(randomWord);
      this.lineArrayTest.push(randomWord);
      this.countSyllables();
      if (this.sylCount > 5) {
        this.lineArray.pop();
        this.lineArrayTest.pop();
        this.countSyllables();
        i--;
      } else if (this.sylCount === 5) {
        this.line = this.lineArrayTest.join(" ");
        return true;
      }
    }
  }

  randomSeven() {
    let randomWords = require('random-words');
    for ( let i = 0; i < 7; i++) {
      let randomWord = randomWords({exactly: 1}).join("");
      this.lineArray.push(randomWord);
      this.lineArrayTest.push(randomWord);
      this.countSyllables();
      if (this.sylCount > 7) {
        this.lineArray.pop();
        this.lineArrayTest.pop();
        this.countSyllables();
        i--;
      } else if (this.sylCount === 7) {
        this.line = this.lineArrayTest.join(" ");
        return true;
      }
    }
  }
}