import $ from "jquery";
import "./css/styles.css";
import Line from "./js/line";
import Haiku from "./js/haiku";

let checkHaiku = new Haiku();

function showHaiku(haikuToDisplay) {
  $("ul#display-haiku").empty();
  for (let i = 0; i < 3; i++) {
    $("ul#display-haiku").append("<li>" + haikuToDisplay.haiku[i].line.toLowerCase().replace(/[.,/#?!$%^&*;:{}=\-_'`~()]/g, "") + "</li>");
  }
}

function randomFunction() {
  let randomOne = new Line("");
  let randomTwo = new Line("");
  let randomThree = new Line("");
  let randomHaiku = new Haiku();
  randomOne.randomHaiku(5);
  randomTwo.randomHaiku(7);
  randomThree.randomHaiku(5);
  randomHaiku.addLine(randomOne);
  randomHaiku.addLine(randomTwo);
  randomHaiku.addLine(randomThree);

  showHaiku(randomHaiku);
}

// randomFunction();

$(document).ready(function () {
  $("form#haiku-checker").submit(function (event) {
    event.preventDefault();
    const inputtedLineOne = $("input#line-one").val();
    const inputtedLineTwo = $("input#line-two").val();
    const inputtedLineThree = $("input#line-three").val();
    $("input#line-one").val("");
    $("input#line-two").val("");
    $("input#line-three").val("");
    checkHaiku.haiku = [];
    let lineOne = new Line(inputtedLineOne);
    let lineTwo = new Line(inputtedLineTwo);
    let lineThree = new Line(inputtedLineThree);
    checkHaiku.addLine(lineOne);
    checkHaiku.addLine(lineTwo);
    checkHaiku.addLine(lineThree);
    lineOne.splitLine();
    lineTwo.splitLine();
    lineThree.splitLine();
    lineOne.countSyllables();
    lineTwo.countSyllables();
    lineThree.countSyllables();
    $("#check-result").empty();
    if (checkHaiku.isAHaiku()) {
      showHaiku(checkHaiku);
      $("#check-result").html("It is a haiku");
    } else {
      showHaiku(checkHaiku);
      $("#check-result").html("It is not a haiku");
    }
    setTimeout(function () {
      $("#check-result").empty();
    }, 1500);
  });
  $("#random").click(function () {
    randomFunction();
  });
});
