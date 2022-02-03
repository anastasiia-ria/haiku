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
      this.haiku[0].lineArray.push(randomWord);
      this.haiku[0].countSyllables();
      if (this.haiku[0].sylCount > 5) {
        this.haiku[0].lineArray.pop();
        this.haiku[0].countSyllables();
        i--;
      } else if (this.haiku[0].sylCount === 5) {
        this.haiku[0].line = this.haiku[0].lineArray.join(" ");
        return true;
      }
    }
    return false;
  }

  randomLineTwo() {
    let randomWords = require('random-words');
    for ( let i = 0; i < 7; i++) {
      let randomWord = randomWords({exactly: 1}).join("");
      this.haiku[0].lineArray.push(randomWord);
      this.haiku[0].countSyllables();
      if (this.haiku[0].sylCount > 7) {
        this.haiku[0].lineArray.pop();
        this.haiku[0].countSyllables();
        i--;
      } else if (this.haiku[0].sylCount === 7) {
        this.haiku[0].line = this.haiku[0].lineArray.join(" ");
        return true;
      }
    }
    return false;
  }
}