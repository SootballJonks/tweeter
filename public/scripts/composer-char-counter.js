$(document).ready(() => {
  const counter = $("output.counter");

  $("#tweet-text").on('input', () => {
    counter[0].value = 140 - $("#tweet-text").val().length;
    if (counter[0].value < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
  });
})



