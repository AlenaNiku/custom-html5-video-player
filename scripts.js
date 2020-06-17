// Step 1 - get our elements from the DOM
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Step 2 - build the functions

// function responsible for palying and pausing the video
// .paused is the property that lives on video
function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

// Step 3 - hook up the event listeners

video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)