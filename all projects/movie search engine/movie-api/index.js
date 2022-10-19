let url = `https://api.themoviedb.org/3/search/movie?query=moon&api_key=58f80e50b7e31f11334091c645181f83`;
let querySearch = [];

const btnPrev = document.querySelector('.buttons__prev')
const allert = document.querySelector('.allert')
const btnSearchQuery = document.querySelector('.search-query')
const btnNext = document.querySelector('.buttons__next')
const btnInput = document.querySelector('.buttons__input')
const btnInputAll = document.querySelector('.buttons__input-all')
const contentGallery = document.querySelector('.content')
const input = document.querySelector('.search__input')
const allertBtn = document.querySelector('.allert__btn')
const allertText = document.querySelector('.allert__text')
const spanInfo = document.querySelector('.about-span')
const numberPosts = document.querySelector('.pages__input')
const buttonSearch = document.querySelector('.search__button')
const githubbbMg = document.querySelector('.githubb-mg')
const github = document.querySelector('.github')
const githubbb = document.querySelector('.githubb')

input.focus();
input.select();

buttonSearch.addEventListener('click', () => searchFilms(1))
btnNext.addEventListener('click', nextPages)
btnPrev.addEventListener('click', prevPages)
window.addEventListener('keypress', aaa)
allertBtn.addEventListener('click', () => allert.classList.add('none'))
github.addEventListener('mouseover', githubMorg)
github.addEventListener('mouseout', githubInMorg)



function githubMorg() {
    githubbbMg.classList.remove('none')
    githubbb.classList.add('none')
}
function githubInMorg() {
    githubbbMg.classList.add('none')
    githubbb.classList.remove('none')
}

function allertTextF(t) {
    allert.classList.remove('none')
    if (t) {
        allertText.innerHTML = `У нас нет страниц меньше ${btnInput.value}`;
    } else {
        allertText.innerHTML = `По запросу " ${input.value} " нет страниц после ${btnInputAll.value}`
    }

}

function aaa(e) {
    if (e.keyCode == 13) {
        searchFilms(1)
    }
}

function nextPages() {
    btnInput.value++
    if (+btnInput.value <= +btnInputAll.value) {
        searchFilms(0)
    } else {
        allertTextF(0)
        btnInput.value = btnInputAll.value
    }
}

function prevPages() {
    btnInput.value--
    if (+btnInput.value > 0) {
        searchFilms(0)
    } else {
        btnInput.value = 1
        allertTextF(1)
    }
}

// function showInfo() {
//     spanInfo.classList.toggle('show-info')
// }

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    let posNnumber = numberPosts.value

    showData(data, posNnumber)
}
getData();

function searchFilms(x) {
    if (x) {
        btnInput.value = 1
    }
    if (!input.value) {
        url = `https://api.themoviedb.org/3/search/movie?query=moon&page=${btnInput.value}&api_key=58f80e50b7e31f11334091c645181f83`
    } else {
        querySearch.push(input.value);
        url = `https://api.themoviedb.org/3/search/movie?query=${input.value}&page=${btnInput.value}&api_key=58f80e50b7e31f11334091c645181f83`
    }

    btnSearchQuery.innerHTML = input.value
    getData()
}

function showData(d, n) {
    let elem = document.querySelectorAll('.wrapper-img')
    elem.forEach(el => el.remove())
    let base = (n <= d.results.length) ? n : d.results.length
    for (let i = 0; i < base; i++) {
        const title = document.createElement('h2')
        title.classList.add('title-img')
        const average = document.createElement('p')
        average.classList.add('average-img')
        const div = document.createElement('div')
        div.classList.add('wrapper-img')
        const divAbout = document.createElement('div')
        divAbout.classList.add('about-img')
        const aboutBtn = document.createElement('button')
        aboutBtn.classList.add('about-btn')
        const span = document.createElement('span')
        span.classList.add('about-span')
        const img = document.createElement('img');
        img.classList.add('gallery-img')

        img.src = (d.results[i].poster_path) ? `https://image.tmdb.org/t/p/w1280${d.results[i].poster_path}` : '../img/no-no.jpg';

        img.alt = `image`;
        contentGallery.append(div);
        div.append(img)
        // div.append(aboutBtn)
        div.append(span)
        div.append(divAbout)
        divAbout.append(title)
        divAbout.append(average)
        title.innerHTML = `${d.results[i].original_title}`
        average.innerHTML = `${d.results[i].vote_average}`
        span.innerHTML = `${d.results[i].overview} <br> Дата выхода на экран: <br> ${d.results[i].release_date}`
        btnInputAll.value = d.total_pages
        // aboutBtn.innerHTML = `about`

    }
    window.scroll(0, 0);
}
//============local storage================

function setLocalStorage() {

    localStorage.setItem(`query+${querySearch.length}`, JSON.stringify(querySearch));
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {

    if (localStorage.getItem('query')) {
        const querry = JSON.parse(localStorage.getItem('query'));
        console.log(querry);
    }
}
window.addEventListener('load', getLocalStorage)


