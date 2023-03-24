// variables needed in global scope
var currentDay = $("#currentDay");
var today = dayjs();
var currentHour = dayjs().hour();
var message = $("<p>").addClass("msg").text("Your item has been saved to local storage!! ✔️");
// adds save confirmation message to the page
$("#msg").prepend(message);

$(function () {
  // initially hides confirmation message
  message.hide()
// event listener function to save text to local storage on click of save button
  $('.saveBtn').click(function () {
    var textBlock = $(this).closest('.time-block').find('.description');
    var eventTime = $(this).closest('.time-block').attr('id');
    var eventTxt = textBlock.val();

    localStorage.setItem(eventTime, eventTxt);
    // checks to make sure text is not empty in order to display message
    // on click (if text is present in textarea) message will show
    if (textBlock.val() != "") {
      message.fadeIn();
      // fades message out after 3 seconds
      setTimeout(function () {
        message.fadeOut();
      }, 3000);
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
  // For each used to iterate through each <textarea> element with class .description in order to dynamically
  // apply the value in local storage by using the parentID (which matches the key in storage).
  $(".description").each(function (index, textarea) {
    var parentID = $(this).parent().attr('id');
    $(this).val(localStorage.getItem(parentID));
  })
  // Displays the current date in the header of the page.
  $(currentDay).text(today.format("dddd, MMMM D, YYYY"));
});
