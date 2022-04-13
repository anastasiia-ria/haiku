function removeE(word) {
  let lastChar = word.slice(-1);
  if (lastChar === "e") {
    return word.slice(0, -1);
  } else {
    return word;
  }
}

function removeESED(word, vowelCheck) {
  let lastChar = word.slice(-2);
  if ((lastChar === "es" || lastChar === "ed") && vowelCheck > 1) {
    return word.slice(0, -2);
  } else {
    return word;
  }
}

function doubles(word) {
  let wordArray = word.split("");
  const vowelArray = ["a", "e", "i", "o", "u", "y"];
  for (let x = 0; x < wordArray.length; x++) {
    if (vowelArray.includes(wordArray[x]) && vowelArray.includes(wordArray[x + 1])) {
      word = word.substr(0, x) + word.substr(x + 1, word.length - 1);
    }
  }
  return word;
}

function subtractVowels(line) {
  const words = line.split(" ");
  words.forEach(function (word) {
    const vowelsMatch = word.match(/[aeiuoy]/gi);
    let vowelsCheck = 0;
    if (vowelsMatch) {
      vowelsCheck = vowelsMatch.length;
    }
    word = removeE(word, vowelsCheck);
    word = removeESED(word, vowelsCheck);
    word = doubles(word);
  });
  const letters = words.join(" ").split("");
  return countVowels(letters, 0, 0);
}

function countVowels(letters, vowelCount, index) {
  const vowelArray = ["a", "e", "i", "o", "u", "y"];
  if (vowelArray.includes(letters[index])) {
    vowelCount++;
  }
  if (index === letters.length - 1) {
    return vowelCount;
  }
  index++;
  return countVowels(letters, vowelCount, index);
}

export default class Line {
  constructor(line) {
    this.line = line;
    this.lineArray = [];
    this.letters = [];
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

  countSyllables() {
    this.sylCount = subtractVowels(this.line);
  }

  randomHaiku(syllables) {
    let randomWords = require("random-words");
    for (let i = 0; i < syllables; i++) {
      let randomWord = randomWords({ exactly: 1 }).join("");
      this.lineArray.push(randomWord);
      this.lineArrayTest.push(randomWord);
      this.line = this.lineArray.join(" ");
      this.countSyllables();
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
