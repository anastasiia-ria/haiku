export default class Line {
  constructor(line) {
    this.line = line;
    this.lineArray = [];
    this.lineArrayTest = [];
    this.sylCount = 0;
  }

  splitLine() {
    this.lineArray = this.line
      .toLowerCase()
      .replace(/[.,/#?!$%^&*;:{}=\-_'`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .split(" ");
  }

  subtractVowels() {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < this.lineArray.length; i++) {
      let vowelCheck = 0;
      let wordArray = this.lineArray[i].split("");

      for (let j = 0; j < wordArray.length; j++) {
        if (vowelArray.includes(wordArray[j])) {
          vowelCheck++;
        }
      }

      let eEnding = wordArray[wordArray.length - 1] === "e" && vowelCheck > 1;
      let esEdEnding = (wordArray[wordArray.length - 1] === "s" || wordArray[wordArray.length - 1] === "d") && wordArray[wordArray.length - 2] === "e" && vowelCheck > 1;

      if (eEnding) {
        wordArray.pop();
      }
      if (esEdEnding) {
        wordArray.pop();
        wordArray.pop();
      }

      for (let j = 0; j < wordArray.length; j++) {
        let doubleVowel = vowelArray.includes(wordArray[j]) && vowelArray.includes(wordArray[j + 1]);
        let ingEnding = wordArray[j + 1] === "i" && wordArray[j + 2] === "n" && wordArray[j + 3] === "g";

        if (vowelArray.includes(wordArray[j])) {
          vowelCheck++;
        }

        if (doubleVowel) {
          if (!ingEnding) {
            wordArray.splice(j, 1);
            j--;
          }
        }
      }
      this.lineArray[i] = wordArray.join("");
    }
  }

  countVowels() {
    let vowels = /[aeiouy]/gi;
    let that = this;
    that.sylCount = 0;

    this.lineArray.forEach(function (word) {
      let result = word.match(vowels);
      if (result !== null) {
        that.sylCount += result.length;
      }
    });
  }

  countSyllables() {
    this.subtractVowels();
    this.countVowels();
  }

  randomHaiku(syllables) {
    let randomWords = require("random-words");
    for (let i = 0; i < syllables; i++) {
      let randomWord = randomWords({ exactly: 1 }).join("");
      this.lineArray.push(randomWord);
      this.lineArrayTest.push(randomWord);
      this.countSyllables();
      console.log(this.sylCount);
      if (this.sylCount > syllables) {
        this.lineArray.pop();
        this.lineArrayTest.pop();
        this.countSyllables();
        i--;
      } else if (this.sylCount === syllables) {
        this.line = this.lineArrayTest.join(" ");
        return true;
      }
    }
  }
}
