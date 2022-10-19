const audio = new Audio();
audio.src = './song/forest.mp3'
let isPlay = false;

const btnPlay = document.querySelector('.button')

const main = document.querySelector('.main-container')
const btnIcon = document.querySelector('.icon')
const btnBird = document.querySelectorAll('.bird')
const btnSolovey = document.querySelector('.solovey')
const btnDrozd = document.querySelector('.drozd')
const btnZarinka = document.querySelector('.zarynka')
const btnJavoronok = document.querySelector('.javoronok')
const btnSlavka = document.querySelector('.slavka')



btnPlay.addEventListener('click', playSong)
btnIcon.addEventListener('click', forestSong)
btnSolovey.addEventListener('click', soloveySong)
btnDrozd.addEventListener('click', drozdSong)
btnZarinka.addEventListener('click', zarynkaSong)
btnJavoronok.addEventListener('click', javoronokSong)
btnSlavka.addEventListener('click', slavkaSong)




function playSong() {
    if (!isPlay) {

        audio.play()
        btnPlay.classList.add('play')
        isPlay = !isPlay
    } else {
        audio.pause()
        audio.currentTime = 0
        btnPlay.classList.remove('play')
        isPlay = !isPlay
    }
}
function stopSong() {
    audio.pause()
    btnPlay.classList.add('play')
    isPlay = false
    audio.currentTime = 0
}


function forestSong() {
    stopSong()
    audio.src = './song/forest.mp3'
    main.style.backgroundImage = "url('./img/forest.jpg')";
    playSong()
    btnBird.forEach(el => el.classList.remove('activ-bird'))
    btnIcon.classList.add('activ-bird')
}
function soloveySong() {
    stopSong()
    audio.src = './song/solovey.mp3'
    main.style.backgroundImage = "url('./img/solovey.jpg')";
    playSong()
    btnBird.forEach(el => el.classList.remove('activ-bird'))
    btnSolovey.classList.add('activ-bird')
}
function drozdSong() {
    stopSong()
    audio.src = './song/drozd.mp3'
    main.style.backgroundImage = "url('./img/drozd.jpg')";
    playSong()
    btnBird.forEach(el => el.classList.remove('activ-bird'))
    btnDrozd.classList.add('activ-bird')
}
function zarynkaSong() {
    stopSong()
    audio.src = './song/zarynka.mp3'
    main.style.backgroundImage = "url('./img/zarynka.jpg')";
    playSong()
    btnBird.forEach(el => el.classList.remove('activ-bird'))
    btnZarinka.classList.add('activ-bird')
}
function javoronokSong() {
    stopSong()
    audio.src = './song/javoronok.mp3'
    main.style.backgroundImage = "url('./img/javoronok.jpg')";
    playSong()
    btnBird.forEach(el => el.classList.remove('activ-bird'))
    btnJavoronok.classList.add('activ-bird')
}
function slavkaSong() {
    stopSong()
    audio.src = './song/slavka.mp3'
    main.style.backgroundImage = "url('./img/slavka.jpg')";
    playSong()
    btnBird.forEach(el => el.classList.remove('activ-bird'))
    btnSlavka.classList.add('activ-bird')
}
