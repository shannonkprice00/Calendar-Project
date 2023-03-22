// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var today = dayjs();
var currentHour = dayjs().hour();
var calEventArr = [];


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.saveBtn').click(function () {
    var textBlock = $(this).closest('.time-block').find('.description');
    var eventTime = $(this).closest('.time-block').attr('id');
    var eventTxt = textBlock.val();

    var values = {
      time: eventTime,
      text: eventTxt
    };

    if (calEventArr) {
      calEventArr.push(values);
    } else {
      calEventArr = [values];
    }

    localStorage.setItem("calEvent", JSON.stringify(calEventArr));
    textBlock.val(" ");
    

  });

  // Dynamically adds classes to hour divs based on their relation to the current hour. 
  for (var i = 8; i <= 20; i++) {
    var indexEl = $("#hour-" + i);
    if (currentHour > i) {
      indexEl.addClass("past");
    } else if (currentHour === i) {
      indexEl.addClass("present");
    } else if (currentHour < i) {
      indexEl.addClass("future")
    };
  };
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  if (calEventArr) {
    calEventArr = JSON.parse(localStorage.getItem("calEvent"));
    for (var i = 0; i < calEventArr.length; i++) {
      var divID = calEventArr[i].time;
      var divText = calEventArr[i].text;
      var textArea = $("#" + divID).children().eq(1);
      textArea.val(divText);
    }
  }

  // TODO: Add code to display the current date in the header of the page.
  $(currentDay).text(today.format("dddd, MMMM D, YYYY"));
});
