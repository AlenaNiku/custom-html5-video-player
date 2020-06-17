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

// function that will switch the look of our button from play to pause
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'
    // console.log(icon)
    toggle.textContent = icon
}

// look at the html data-skip property => that's how you understand how much to skip
function skip() {
    // console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    // value and name are both values on the video
    video[this.name] = this.value
    // console.log(this.value)
    // console.log(this.name)
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    // console.log(e)
    video.currentTime = scrubTime
}

// Step 3 - hook up the event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', togglePlay)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

progress.addEventListener('click', scrub)