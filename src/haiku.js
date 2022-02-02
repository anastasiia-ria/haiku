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
}
const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine");
myHaiku.splitLine();
// let string = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// let finalString = punctuationless.replace(/\s{2,}/g," ");