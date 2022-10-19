let url = `https://api.unsplash.com/search/photos?query=moon&per_page=12&page=1&client_id=v2-9Td4aNycgWhzw7F4OBEVN0hFAR1HT0xqYFdgYS18`
// let count = 1

const galleryContainer = document.querySelector('.wrapper')
const button = document.querySelector('.search__input__button')
// const buttonPrev = document.querySelector('.prev')
// const buttonNext = document.querySelector('.next')
// const inputNumberPage = document.querySelector('.namber__pege');
const inputNumber = document.querySelector('.pages__input');
const inputSearch = document.querySelector('.search__input');
inputSearch.focus();
inputSearch.select();

button.addEventListener('click', searchPhoto)
// buttonPrev.addEventListener('click', () => chengePage('-'))
// buttonNext.addEventListener('click', () => chengePage('+'))


function searchPhoto() {
    url = `https://api.unsplash.com/search/photos?query=${inputSearch.value}&per_page=${inputNumber.value}&client_id=v2-9Td4aNycgWhzw7F4OBEVN0hFAR1HT0xqYFdgYS18`
    if (inputSearch.value == '') { url = `https://api.unsplash.com/search/photos?query=moon&per_page=12&page=1&per_page=${inputNumber.value}&client_id=v2-9Td4aNycgWhzw7F4OBEVN0hFAR1HT0xqYFdgYS18` }
    getData()
    console.log(url);
}

// function chengePage(z) {
//     console.log(z);
//     if (z == '+') {
//         count++
//         inputNumberPage.value = count
//         searchPhoto()
//     } else {
//         count--
//         inputNumberPage.value = count
//         searchPhoto()
//     }
// }


async function getData() {
    console.log('g');
    const res = await fetch(url);
    const data = await res.json();
    showData(data)
}
window.onload = getData()

function showData(d) {
    console.log('sh');
    let elem = document.querySelectorAll('.gallery-img')
    elem.forEach(el => el.remove())
    for (let i = 0; i < d.results.length; i++) {
        const img = `<img class="gallery-img" src="${d.results[i].urls.regular}" alt="image">`;
        galleryContainer.insertAdjacentHTML('beforeend', img);
    }
}

console.log(`Нормально отображаются фото при размерах экрана от 320Рх до 3740Рх`);
