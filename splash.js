document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');

    // Wait for the video to finish playing
    video.onended = function() {
        // Fade out the splash screen
        document.querySelector('.splash').classList.add('fade-out');
    };
});
