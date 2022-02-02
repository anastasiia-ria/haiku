export default class Haiku {

  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    console.log(this);
  }

  splitLine() {
    let array1 = this.line1.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
    this.line1 = array1;
    let array2 = this.line2.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
    this.line2 = array2;
    let array3 = this.line3.toLowerCase().replace(/[.,\/#?!$%\^&\*;:{}=\-_'`~()]/g,"").replace(/\s{2,}/g," ").split(" ");
    this.line3 = array3;
    console.log(this.line2);
  }
  
  subtractVowels() {
    const vowelArray = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < this.line1.length; i++) {
      console.log(this.line1[i]);
      let wordArray = this.line1[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
        console.log(wordArray);
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          wordArray.splice((i+1), 1);
          console.log(wordArray);
        }
      };
    };
    for (let i = 0; i < this.line2.length; i++) {
      console.log(this.line2[i]);
      let wordArray = this.line2[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          wordArray.splice((i+1), 1);
          console.log(wordArray);
        }
      };
    };
    for (let i = 0; i < this.line3.length; i++) {
      console.log(this.line3[i]);
      let wordArray = this.line3[i].split("");
      if ("e" === wordArray[wordArray.length-1]) {
        wordArray.pop();
      }
      for (let i = 0; i < wordArray.length; i ++) {
        if (vowelArray.includes(wordArray[i]) && vowelArray.includes(wordArray[i+1])) {
          wordArray.splice((i+1), 1);
          console.log(wordArray);
        }
      };
    };
  }

}
const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine");
myHaiku.splitLine();
myHaiku.subtractVowels();