// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var hourDiv = [{
  div: $("#hour-8a"),
  hour: 8
}, {
  div: $("#hour-9a"),
  hour: 9
}, {
  div: $("#hour-10a"),
  hour: 10
}, {
  div: $("#hour-11a"),
  hour: 11
}, {
  div: $("#hour-12p"),
  hour: 12
}, {
  div: $("#hour-1p"),
  hour: 13
}, {
  div: $("#hour-2p"),
  hour: 14
}, {
  div: $("#hour-3p"),
  hour: 15
}, {
  div: $("#hour-4p"),
  hour: 16
}, {
  div: $("#hour-5p"),
  hour: 17
}, {
  div: $("#hour-6p"),
  hour: 18
}, {
  div: $("#hour-7p"),
  hour: 19
}, {
  div: $("#hour-8p"),
  hour: 20
}]
var today = dayjs();
var currentHour = dayjs().hour();



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (var i = 0; i < hourDiv.length; i++) {
    var indexEl = $(hourDiv[i].div);
    console.log("Index Div:")
    console.log(indexEl);
    var indexHour = $(hourDiv[i].hour);
    console.log("Index Hour:")
    console.log(indexHour);
    if (currentHour > indexHour) {
      indexEl.addClass("past");
    } else if (currentHour === indexHour) {
      indexEl.addClass("present");
    } else if (currentHour < indexHour) {
      indexEl.addClass("future")
    };
  };
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $(currentDay).text(today.format("dddd, MMMM D"));
});
