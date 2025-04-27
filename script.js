// Yorum Sistemi
function submitComment() {
    const commentBox = document.getElementById('comment-box');
    const commentList = document.getElementById('comment-list');

    if (commentBox.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = commentBox.value;
        commentList.appendChild(li);
        commentBox.value = ''; // Clear the comment box
    }
}

// Fullscreen Modu
document.getElementById('fullscreen-toggle').addEventListener('click', function() {
    const iframe = document.getElementById('game-iframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
});
