import { TestWatcher } from "jest";
import Haiku from "../src/haiku";

describe("Haiku", () => {

  test("should create a haiku object with lines 1, 2, and 3", () => {
    const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine"); 
    expect(myHaiku.line1).toEqual("Hello There!");
    expect(myHaiku.line2).toEqual("How are you?");
    expect(myHaiku.line3).toEqual("I'm fine");
  });

  test("should create three arrays of words for each line", () => {
    const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine"); 
    myHaiku.splitLine();
    expect(myHaiku.line1).toEqual(["hello","there"]);
    expect(myHaiku.line2).toEqual(["how","are","you"]);
    expect(myHaiku.line3).toEqual(["im","fine"]);
  });

  test("should remove silent vowels", () => {
    const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine"); 
    myHaiku.splitLine();
    myHaiku.subtractVowels();
    expect(myHaiku.line1).toEqual(["hello","ther"]);
    expect(myHaiku.line2).toEqual(["how","ar","yo"]);
    expect(myHaiku.line3).toEqual(["im","fin"]);
  });

  test("should return the count of vowels per each word for each line", () => {
    const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine"); 
    myHaiku.splitLine();
    myHaiku.subtractVowels();
    myHaiku.countVowels();
    expect(myHaiku.count1).toEqual(3);
    expect(myHaiku.count2).toEqual(3);
    expect(myHaiku.count3).toEqual(2);
  });

  test("should return true if line 1 is 5 syllables, line 2 is 7 syllables and line 3 is 5 syllables", () => {
    const myHaiku = new Haiku("Hello there Francis!", "How are you feeling today?", "I am fine thank you"); 
    myHaiku.splitLine();
    myHaiku.subtractVowels();
    myHaiku.countVowels();
    expect(myHaiku.isAHaiku()).toEqual(true);
  });
});