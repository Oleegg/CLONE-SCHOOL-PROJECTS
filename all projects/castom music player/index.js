import { music1 } from "./music.js";

let isPlay = false;
let playNum = 0;
let isVolume = 0;

const audiofile = document.querySelector('.audio')
const wrapper = document.querySelector('.player-wrapper')
const btnPrev = document.querySelector('.btn-prev')
const btnPlay = document.querySelector('.btn-play')
const btnNext = document.querySelector('.btn-next')
const btnStop = document.querySelector('.btn-stop')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress-bar')
const volumeInput = document.querySelector('.renge-wrapper')
const title = document.querySelector('.title')
const volumeBtn = document.querySelector('.volume-btn')
const time = document.querySelector('.time')
const timeAll = document.querySelector('.time-all')
const volumeProgress = document.querySelector('.volume')
// const repeat = document.querySelector('.repeat')

volumeBtn.addEventListener('click', () => changVvolume(isVolume))

btnPlay.addEventListener('click', changePlaying)
btnStop.addEventListener('click', stopAudio)
btnNext.addEventListener('click', playNext)
btnPrev.addEventListener('click', playPrev)
volumeInput.addEventListener('click', changVvolumeInput)
progressBar.addEventListener('click', ontimeupdate)
// repeat.addEventListener('click', repeatSong)

audiofile.addEventListener('timeupdate', timeAudiocurrent)
audiofile.addEventListener('timeupdate', changeProgress);

function timeAudiocurrent() {
    let currentMin = Math.floor(audiofile.currentTime / 60)
    if (currentMin < 10) {
        currentMin = `0${currentMin}`
    }
    let currentSec = Math.floor(audiofile.currentTime % 60)
    if (currentSec < 10) {
        currentSec = `0${currentSec}`
    }
    let allMin = Math.floor(audiofile.duration / 60)
    if (isNaN(allMin)) {
        allMin = 0
    }
    if (allMin < 10) {
        allMin = `0${allMin}`
    }
    let allSec = Math.floor(audiofile.duration % 60)
    if (isNaN(allSec)) {
        allSec = 0
    }
    if (allSec < 10) {
        allSec = `0${allSec}`
    }

    time.innerHTML = `${currentMin}:${currentSec}`
    timeAll.innerHTML = `${allMin}:${allSec}`
}
function changePlaying() {
    if (!isPlay) {
        audiofile.play()
        isPlay = true
        btnPlay.classList.add('btn-pause')
        wrapper.classList.add('playing')
    } else {
        audiofile.pause();
        isPlay = false
        btnPlay.classList.remove('btn-pause')
        wrapper.classList.remove('playing')
    }
    title.innerHTML = music1[playNum]
}
function playNext() {
    isPlay = false;
    playNum++
    if (playNum > music1.length - 1) {
        playNum = 0
    }
    let congTitle = music1.filter((el, index) => index == playNum)
    audiofile.src = `./audio1/${congTitle}.mp3`
    changePlaying()
}
function playPrev() {
    isPlay = false;
    playNum--
    if (playNum < 0) {
        playNum = music1.length - 1
    }
    let congTitle = music1.filter((el, index) => index == playNum)
    audiofile.src = `./audio1/${congTitle}.mp3`
    changePlaying()
}
function stopAudio() {
    audiofile.pause();
    audiofile.currentTime = 0;
    isPlay = false;
    btnPlay.classList.remove('btn-pause')
}
function changeProgress(rep) {
    let t = audiofile.currentTime;
    let o = audiofile.duration;
    let w = t / o * 100
    progress.style.width = `${w}%`
    // if (rep === '1') {
    //     if (w === 99) {
    //         stopAudio()
    //         changePlaying()
    //     }
    // } else {
    if (w === 100) {
        playNext()
    }
    // }
}
// function repeatSong() {
//     repeat.classList.toggle('activ')
//     changeProgress('1')
// }
function ontimeupdate(event) {
    let w = progressBar.clientWidth
    let d = event.offsetX
    audiofile.currentTime = audiofile.duration * d / w
}
function changVvolume(i) {
    if (i !== 0) {
        let v = audiofile.volume;
        volumeProgress.style.width = `${v * 100}%`
        volumeBtn.classList.remove('mute')
        isVolume = 0
    } else {
        audiofile.volume = 0
        volumeBtn.classList.add('mute')
        isVolume = 1
    }
}
function changVvolumeInput(e) {
    let w = volumeInput.clientWidth
    let d = e.offsetX
    audiofile.volume = d / w
    changVvolume()
}
