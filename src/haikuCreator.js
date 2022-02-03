import Line from "../src/line";
export default class HaikuCreator {

  constructor() {
    this.haiku = [];
  }

  addLine(line) {
    this.haiku.push(line);
  }

  isAHaiku() {
    if (this.haiku[0].sylCount === 5 && this.haiku[1].sylCount === 7 && this.haiku[2].sylCount === 5) {
      return true;
    }
    return false;
  }

  randomLineOne() {
    let randomWords = require('random-words');
    for ( let i = 0; i < 5; i++) {
      let randomWord = randomWords({exactly: 1}).join("");
      console.log(randomWord);
      this.haiku[0].lineArray.push(randomWord);
      console.log(this.haiku[0].lineArray);
      console.log(this.haiku[0].sylCount);
      this.haiku[0].countSyllables();
      console.log(this.haiku[0].sylCount);
      if (this.haiku[0].sylCount > 5) {
        this.haiku[0].lineArray.pop();
        this.haiku[0].countSyllables();
        i--;
      } else if (this.haiku[0].sylCount === 5) {
        this.haiku[0].line = this.haiku[0].lineArray.join(" ");
        console.log(this.haiku[0].line);
        return true;
      }
    }
    return false;
  }
}