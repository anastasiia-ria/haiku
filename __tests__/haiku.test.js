import { TestWatcher } from "jest";
import Haiku from "../src/js/haiku";
import Line from "../src/js/line";

describe("Haiku", () => {
  let line1;
  let line2;
  let line3;
  let haiku;

  beforeEach(() => {
    line1 = new Line("Happy there Francis!");
    line2 = new Line("How are you doing today?");
    line3 = new Line("I am fine thank you");
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    haiku = new Haiku();
  });

  test("should create a haiku object ", () => {
    haiku.addLine(line1);
    haiku.addLine(line2);
    haiku.addLine(line3);
    expect(haiku.haiku[0].line).toEqual("Happy there Francis!");
    expect(haiku.haiku[1].line).toEqual("How are you doing today?");
    expect(haiku.haiku[2].line).toEqual("I am fine thank you");
  });

  test("should return true if line 1 is 5 syllables, line 2 is 7 syllables and line 3 is 5 syllables", () => {
    haiku.addLine(line1);
    haiku.addLine(line2);
    haiku.addLine(line3);
    haiku.haiku[0].countSyllables();
    haiku.haiku[1].countSyllables();
    haiku.haiku[2].countSyllables();
    expect(haiku.isAHaiku()).toEqual(true);
  });

  test("should return false if it is not a haiku", () => {
    let line4 = new Line("I'm fine thank you");
    haiku.addLine(line1);
    haiku.addLine(line2);
    haiku.addLine(line4);
    haiku.haiku[0].countSyllables();
    haiku.haiku[1].countSyllables();
    haiku.haiku[2].countSyllables();
    expect(haiku.isAHaiku()).toEqual(false);
  });
});
