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

  test("should return the count of vowels for each line", () => {
    const myHaiku = new Haiku("Hello There!", "How are you?", "I'm fine"); 
    myHaiku.splitLine();
    myHaiku.subtractVowels();
    expect(myHaiku.line1).toEqual(["hello","ther"]);
    expect(myHaiku.line2).toEqual(["how","ar","yo"]);
    expect(myHaiku.line3).toEqual(["im","fin"]);
  });
});