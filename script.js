// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var today = dayjs();
var currentHour = dayjs().hour();
var message = $("<p>").addClass("msg").text("Your item has been saved to local storage!! ✔️");

$("#msg").prepend(message);


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  message.hide()

  $('.saveBtn').click(function () {
    var textBlock = $(this).closest('.time-block').find('.description');
    var eventTime = $(this).closest('.time-block').attr('id');
    var eventTxt = textBlock.val();

    localStorage.setItem(eventTime, eventTxt);

    if (textBlock.val() != "") {
      message.fadeIn();

      setTimeout(function () {
        message.fadeOut();
      }, 5000);
    }

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
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));

  // TODO: Add code to display the current date in the header of the page.
  $(currentDay).text(today.format("dddd, MMMM D, YYYY"));
});
