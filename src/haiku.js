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
          wordArray.splice((i+1), 1);
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
          wordArray.splice((i+1), 1);
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
          wordArray.splice((i+1), 1);
        }
      };
      this.line3[i] = wordArray.join("");
    };
  }

  countVowels() {
    
  }
}
const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine");
myHaiku.splitLine();
myHaiku.subtractVowels();