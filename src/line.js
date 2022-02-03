export default class Line {

  constructor(line) {
    this.line = line;
    this.lineArray = [];
    this.count = 0;
  }

  splitLine() {
    this.lineArray = this.line.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
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
      };
      this.lineArray[i] = wordArray.join("");
    };
  }

  countVowels() {
    let vowels = /[aeiou]/gi;
    let that = this;
    const vowelArray = ["a", "e", "i", "o", "u"];

    this.lineArray.forEach(function(word) {
      let result = word.match(vowels);
      that.count += result.length;
      let wordArray = word.split("");
      if (wordArray[wordArray.length-1] === "y" && !vowelArray.includes(wordArray[wordArray.length-2])) {
        that.count ++;
      }
    });
  }

  countSyllables() {
    this.splitLine();
    this.subtractVowels();
    this.countVowels();
  }
}