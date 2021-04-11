var currentDateEl = $('#currentDay');
var timeblocksEl = $('.time-block');

function todayDate() {
    /** Displays current Date */
    var thisDay = moment().format("MMM DD, YYYY");
    currentDateEl.text("Today's Date: " + thisDay);
}
todayDate();


