import { TestWatcher } from "jest";
import Haiku from "../src/haiku";

describe("Haiku", () => {

  test("should create a haiku object with lines 1, 2, and 3", () => {
    const myHaiku = new Haiku("Hello There", "How are you", "I'm fine"); 
    expect(myHaiku.line1).toEqual("Hello There");
    expect(myHaiku.line2).toEqual("How are you");
    expect(myHaiku.line3).toEqual("I'm fine");
  });
});