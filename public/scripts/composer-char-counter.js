$(document).ready(() => {
  const counter = $("output.counter");

  $("#tweet-text").on('input', () => {
    counter[0].value = 140 - $("#tweet-text").val().length;
    if (counter[0].value < 0) {
      counter.addClass("counter-negative");
    } else {
      counter.removeClass("counter-negative");
    }
  });
})



