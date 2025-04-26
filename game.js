
function openFullscreen() {
  var iframe = document.querySelector('iframe');
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  }
}

function rateGame(rating) {
  localStorage.setItem('rating', rating);
  alert('Thanks for rating ' + rating + ' stars!');
}

function saveComment() {
  const comment = document.getElementById('comment').value;
  let comments = JSON.parse(localStorage.getItem('comments') || '[]');
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));
  displayComments();
}

function displayComments() {
  let comments = JSON.parse(localStorage.getItem('comments') || '[]');
  const commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML = '';
  comments.forEach(c => {
    const p = document.createElement('p');
    p.textContent = c;
    commentsDiv.appendChild(p);
  });
}

window.onload = displayComments;
