/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


//------- HELPER FUNCTIONS (please consider moving these) ------

const resetTextArea = () => {
  $('output.counter')[0].value = 140;
  $('#tweet-text').val('');
};

const datePosted = (object) => {
  const time = (Date.now() - object.created_at) / 1000;

  if (time < 60) {
    return `${time.toFixed(0)} seconds ago`;
  } else if (time < 60 * 60) {
    return `${(time / 60).toFixed(0)} minutes ago`;
  } else if (time < 60 * 60 * 24) {
    return `${(time / 60 / 60).toFixed(0)} hours ago`;
  } else if (time < 60 * 60 * 60 * 365) {
    return `${(time / 60 / 60 / 24).toFixed(0)} days ago`;
  } else {
    return `${(time / 60 / 60 / 24 / 365).toFixed(0)} years ago`;
  } 
}


//-------------------------------------------

$(document).ready(() => {

  const createTweetElement = (object) => {
    const $element = `
    <article class="tweet">
    <header>
      <div>
        <!-- Author pfp/displayname -->
        <img src="${object.user.avatars}" name="pfp">
        <p>${object.user.name}</p>
      </div>
      <!-- handle -->
      <a href="#" class="username">${object.user.handle}</a>
    </header>
    <div class="tweet-content">
      <p>${object.content.text}</p>
    </div>
    <footer>
      <p>${datePosted(object)}</p>
      <div>
        <a href="">like</a>
        <a href="">share</a>
        <a href="">report</a>
      </div>
    </footer>
  </article>
    `;

    return $element;
  }

  const renderTweets = (tweets) => {
    $('#feed').empty();

    for (let obj of tweets) {
      const $tweet = createTweetElement(obj);
      $('#feed').prepend($tweet);
    }
  }

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    })
      .then((result) => {
        renderTweets(result)
      })
  }

  loadTweets();

  const postTweet = (content) => {

    $.ajax({url: '/tweets', method: 'POST', data: content})
      .then((result) => {
        console.log(result);
        loadTweets();
      })
  }

  $('#crush-ember').on('submit', (event) => {
    event.preventDefault();

    const tweetContent = $('#tweet-text');

    if (!tweetContent.val().length) {
      alert(`First thou must type a message before it may be heard...`);
    } else if (tweetContent.val().length > 140) {
      alert(`How gracious of thee, to provide more than what can be posted...`);
    } else {
      const text = tweetContent.serialize();
      postTweet(text);
      resetTextArea();
    }


  })
})