import { TestWatcher } from "jest";
import Line from "../src/line";

describe("Line", () => {
  let line1;
  let line2;
  let line3;

  beforeEach(() => {
    line1 = new Line("Happy goes Francis!");
    line2 = new Line("How are you doing today?");
    line3 = new Line("I am fine thank you");
  });

  test("should create three lines objects ", () => {
    expect(line1.line).toEqual("Happy goes Francis!");
    expect(line2.line).toEqual("How are you doing today?");
    expect(line3.line).toEqual("I am fine thank you");
  });

  test("should create three arrays of words for each line", () => {
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    expect(line1.lineArray).toEqual(["happy", "goes", "francis"]);
    expect(line2.lineArray).toEqual(["how", "are", "you", "doing", "today"]);
    expect(line3.lineArray).toEqual(["i", "am", "fine", "thank", "you"]);
  });

  test("should remove silent vowels", () => {
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    line1.subtractVowels();
    line2.subtractVowels();
    line3.subtractVowels();
    expect(line1.lineArray).toEqual(["happy", "go", "francis"]);
    expect(line2.lineArray).toEqual(["how", "ar", "u", "doing", "tody"]);
    expect(line3.lineArray).toEqual(["i", "am", "fin", "thank", "u"]);
  });

  test("should return the count of vowels per each word for each line", () => {
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    line1.subtractVowels();
    line2.subtractVowels();
    line3.subtractVowels();
    line1.countVowels();
    line2.countVowels();
    line3.countVowels();
    expect(line1.sylCount).toEqual(5);
    expect(line2.sylCount).toEqual(7);
    expect(line3.sylCount).toEqual(5);
  });

  test("should continue to push new random words into line1 array, until 5 syllables are reached. if over 5 syllables, pop off word and try again until 5 syllables are reached", () => {
    let randomLine1 = new Line("");
    expect(randomLine1.randomHaiku(5)).toEqual(true);
  });

  test("should continue to push new random words into line2 array, until 7 syllables are reached. if over 7 syllables, pop off word and try again until 7 syllables are reached", () => {
    let randomLine2 = new Line("");
    expect(randomLine2.randomHaiku(7)).toEqual(true);
  });
});
