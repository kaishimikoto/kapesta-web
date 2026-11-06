// ---------- Cafe Spotlight slider ----------
const track = document.querySelector('.slider-track');

if (track) {
    const prev = document.querySelector('.slider-btn.prev');
    const next = document.querySelector('.slider-btn.next');

    const slideAmount = () => {
        const card = track.querySelector('.videos');
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        return card.offsetWidth + gap;
    };

    next.addEventListener('click', () => {
        track.scrollBy({ left: slideAmount(), behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
        track.scrollBy({ left: -slideAmount(), behavior: 'smooth' });
    });

    // Only one video plays at a time
    const allVideos = track.querySelectorAll('video');
    allVideos.forEach(video => {
        video.addEventListener('play', () => {
            allVideos.forEach(other => {
                if (other !== video) other.pause();
            });
        });
    });
}