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
      let wordArray = this.lineArray[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          if (wordArray[i+3] !== "g" && wordArray[i+2] !== "n" && wordArray[i+1] !== "i") {
            wordArray.splice((i+1), 1);
          }
        } 
      }
      this.lineArray[i] = wordArray.join("");
    }
  }

  countVowels() {
    let vowels = /[aeiou]/gi;
    let that = this;
    const vowelArray = ["a", "e", "i", "o", "u"];
    that.sylCount = 0;

    this.lineArray.forEach(function(word) {
      let result = word.match(vowels);
      if (result !== null) {
        that.sylCount += result.length;
      }
      let wordArray = word.split("");
      if (wordArray[wordArray.length-1] === "y" && !vowelArray.includes(wordArray[wordArray.length-2])) {
        that.sylCount ++;
      }
    });
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