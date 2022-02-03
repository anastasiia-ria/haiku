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
}