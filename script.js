// Yıldız puanlama sistemi
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.stars .star');  // Yıldızları seçiyoruz
    const userRating = document.getElementById('user-rating'); // Kullanıcı puanını göstereceğiz
    let rating = 0;  // Başlangıçta puan sıfır

    // Yıldızlara tıklama olayını ekliyoruz
    stars.forEach(star => {
        star.addEventListener('click', function () {
            rating = parseInt(this.getAttribute('data-value'));  // Tıklanan yıldızın değerini alıyoruz
            userRating.textContent = rating;  // Puanı ekranda gösteriyoruz

            // Tüm yıldızları "aktif" yapıyoruz
            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= rating) {
                    star.classList.add('active');  // Eğer yıldız tıklanan puan değerine eşitse aktif yapıyoruz
                } else {
                    star.classList.remove('active');  // Aksi takdirde aktifliği kaldırıyoruz
                }
            });
        });

        // Hover efekti için
        star.addEventListener('mouseenter', function () {
            const hoverRating = parseInt(this.getAttribute('data-value'));
            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= hoverRating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        });

        // Fareyi yıldızlardan uzaklaştırınca hover efektini kaldırma
        star.addEventListener('mouseleave', function () {
            stars.forEach(star => {
                star.classList.remove('active');
            });
            // Tıklanan yıldızlara göre son durumunu geri yükleyelim
            stars.forEach(star => {
                if (parseInt(star.getAttribute('data-value')) <= rating) {
                    star.classList.add('active');
                }
            });
        });
    });
});
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
