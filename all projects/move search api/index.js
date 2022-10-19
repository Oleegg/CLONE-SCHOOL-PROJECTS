let url = `https://api.themoviedb.org/3/search/movie?query=girls&api_key=58f80e50b7e31f11334091c645181f83`

const contentGallery = document.querySelector('.content')
const input = document.querySelector('.search__input')
const buttonSearch = document.querySelector('.search__button')
input.focus();
input.select();

buttonSearch.addEventListener('click', searchFilms)

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data)
}
getData();

function searchFilms() {
    url = `https://api.themoviedb.org/3/search/movie?query=${input.value}&api_key=58f80e50b7e31f11334091c645181f83`
    getData()
}

function showData(d) {
    let elem = document.querySelectorAll('.wrapper-img')
    elem.forEach(el => el.remove())
    for (let i = 0; i < d.results.length; i++) {

        const title = document.createElement('h2')
        title.classList.add('title-img')
        const average = document.createElement('p')
        average.classList.add('average-img')
        const div = document.createElement('div')
        div.classList.add('wrapper-img')
        const divAbout = document.createElement('div')
        divAbout.classList.add('about-img')
        const img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = `https://image.tmdb.org/t/p/w1280${d.results[i].poster_path}`;
        img.alt = `image`;
        contentGallery.append(div);
        div.append(img)
        div.append(divAbout)
        divAbout.append(title)
        divAbout.append(average)
        title.innerHTML = `${d.results[i].original_title}`
        average.innerHTML = `${d.results[i].vote_average}`
    }
}




