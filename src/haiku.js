export default class Haiku {
  constructor (line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  splitLine() {

  }
}


// let string = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// let finalString = punctuationless.replace(/\s{2,}/g," ");