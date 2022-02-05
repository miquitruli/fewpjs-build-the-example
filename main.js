// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal')
const likeButtons = document.getElementsByClassName('like-glyph')

modal.className = "hidden"

for (const heart of likeButtons) {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(()=> {
      heart.className = "activated-heart"
    })
    .catch(() => {
      modal.style.visibility = "visible"
    })
  })
}
document.addEventListener('DOMContentLoaded', function() {

})
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
