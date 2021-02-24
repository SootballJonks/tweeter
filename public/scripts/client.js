/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

//------ Temporary database --------------


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
      <p>[date posted]</p>
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
    for (let obj of tweets) {
      const $tweet = createTweetElement(obj);
      $('#feed').prepend($tweet);
    }
  }

  renderTweets(data);


})