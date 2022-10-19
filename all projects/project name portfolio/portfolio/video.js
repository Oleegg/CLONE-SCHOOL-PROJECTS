let isPlay = false;
let isVolume = 0.5;
let isRepeat = false;

const video = document.querySelector('.video-play')
const btnPlay = document.querySelector('.video-btn')
const divControls = document.querySelector('.controls')
const playControls = document.querySelector('.btn-play-controls')
const pauseControls = document.querySelector('.btn-pause-controls')
const volumeControls = document.querySelector('.btn-volume-controls')
const muteControls = document.querySelector('.btn-mute-controls')
const progress = document.querySelector('.progress')
const volumeProgress = document.querySelector('.volume')
const time = document.querySelector('.current-time')
const allTime = document.querySelector('.all-time')
const progressBar = document.querySelector('.progress-bar')
const volumeBar = document.querySelector('.volume-bar')
const btnStop = document.querySelector('.btn-stop-controls')
const btnRepeat = document.querySelector('.btn-repeat-controls')
const btnFullScreen = document.querySelector('.btn-expand-controls')
const divVideo = document.querySelector('.video-player')

btnPlay.addEventListener('click', playVideo)
pauseControls.addEventListener('click', playVideo)
playControls.addEventListener('click', playVideo)
video.addEventListener('click', playVideo)
progressBar.addEventListener('click', ontimeUpdate)
volumeBar.addEventListener('click', changVvolumeInput)
volumeControls.addEventListener('click', muteVolume)
muteControls.addEventListener('click', addVolume)
btnStop.addEventListener('click', stopVideo)
btnRepeat.addEventListener('click', repeatVideo)
btnFullScreen.addEventListener('click', fullScreen)

video.addEventListener('timeupdate', changeProgress);
video.addEventListener('timeupdate', timeVideoCurrent);
video.addEventListener('mousemove', addControls)
// divControls.addEventListener('mouseout', removeControls)
divControls.addEventListener('mousemove', addControls)

function addControls() {
    divControls.classList.add('z-index')
    divControls.classList.remove('cursor')
    video.classList.remove('cursor')
}

function playVideo() {
    if (isPlay == false) {
        divVideo.classList.add('border')
        video.play()
        btnPlay.classList.add('none')
        divControls.classList.remove('none')
        playControls.classList.add('none')
        pauseControls.classList.remove('none')
        isPlay = !isPlay
    } else {
        video.pause()
        btnPlay.classList.remove('none')
        playControls.classList.remove('none')
        pauseControls.classList.add('none')
        isPlay = !isPlay
    }
}

function stopVideo() {
    video.pause()
    video.currentTime = 0
    btnPlay.classList.remove('none')
    playControls.classList.remove('none')
    pauseControls.classList.add('none')
    isPlay = !isPlay
}

function repeatVideo() {
    isRepeat = !isRepeat
    btnRepeat.classList.toggle('activ-repeat')
}

function fullScreen() {
    video.webkitEnterFullScreen()
}

function changVvolume() {
    volumeControls.classList.remove('none')
    muteControls.classList.add('none')
    let v = video.volume;
    console.log(v);
    volumeProgress.style.width = `${v * 100}%`
    isVolume = v
}

function changVvolumeInput(e) {
    let w = volumeBar.clientWidth
    let d = e.offsetX
    video.volume = d / w
    changVvolume()
}

function muteVolume() {
    video.volume = 0
    volumeControls.classList.add('none')
    muteControls.classList.remove('none')
}

function addVolume() {
    video.volume = isVolume
    volumeControls.classList.remove('none')
    muteControls.classList.add('none')
}

function changeProgress() {
    let t = video.currentTime;
    let o = video.duration;
    let w = t / o * 100
    progress.style.width = `${w}%`
    if (w == 100) {
        stopVideo()
        if (isRepeat) {
            playVideo()
        }
    }
}

function ontimeUpdate(event) {
    let w = progressBar.clientWidth
    let d = event.offsetX
    video.currentTime = video.duration * d / w
}

function timeVideoCurrent() {
    let currentMin = Math.floor(video.currentTime / 60)
    if (currentMin < 10) {
        currentMin = `0${currentMin}`
    }
    let currentSec = Math.floor(video.currentTime % 60)
    if (currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    let allMin = Math.floor(video.duration / 60)
    // if (isNaN(allMin)) {
    //     allMin = 0
    // }
    if (allMin < 10) {
        allMin = `0${allMin}`
    }
    let allSec = Math.floor(video.duration % 60)
    // if (isNaN(allSec)) {
    //     allSec = 0
    // }
    if (allSec < 10) {
        allSec = `0${allSec}`
    }
    time.innerHTML = `${currentMin}:${currentSec}`
    allTime.innerHTML = `${allMin}:${allSec}`
}







