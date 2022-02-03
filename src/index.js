import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import Haiku from './haiku';
import Line from './line';
import HaikuCreator from './haikuCreator';

let checkHaiku = new HaikuCreator();
let randomHaiku = new HaikuCreator();

$(document).ready(function () {
  $("form#haiku-checker").submit(function(event) {
    event.preventDefault();

    const inputtedLineOne = $("input#line-one").val();
    const inputtedLineTwo = $("input#line-two").val();
    const inputtedLineThree = $("input#line-three").val();

    $("input#line-one").val("");
    $("input#line-two").val("");
    $("input#line-three").val("");

    checkHaiku.haiku = [];
    let lineOne = new Line (inputtedLineOne);
    let lineTwo = new Line (inputtedLineTwo);
    let lineThree = new Line (inputtedLineThree);
    checkHaiku.addLine(lineOne);
    checkHaiku.addLine(lineTwo);
    checkHaiku.addLine(lineThree);
    lineOne.splitLine();
    lineTwo.splitLine();
    lineThree.splitLine();
    lineOne.countSyllables();
    lineTwo.countSyllables();
    lineThree.countSyllables();

    $('#check-result').empty();
    if (checkHaiku.isAHaiku()) {
      $('#check-result').html("It is a haiku");
    } else {
      $('#check-result').html("It is not a haiku");
    }
  });

  $("#random").click(function() {
    let randomOne = new Line ("");
    let randomTwo = new Line ("");
    let randomThree = new Line ("");
    randomOne.randomFive();
    randomTwo.randomSeven();
    randomThree.randomFive();
    randomHaiku.addLine(randomOne);
    randomHaiku.addLine(randomTwo);
    randomHaiku.addLine(randomThree);

    $('ul#random-haiku').empty();
    $('ul#random-haiku').append("<li>" + randomOne.line + "</li>");
    $('ul#random-haiku').append("<li>" + randomTwo.line + "</li>");
    $('ul#random-haiku').append("<li>" + randomThree.line + "</li>");
  });

});