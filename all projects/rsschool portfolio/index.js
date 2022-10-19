//=======global variable======
let lang = 'en';
let theme = 'darck';

const en = document.querySelector('.languages-en');
const ru = document.querySelector('.languages-ru');

const sunBtn = document.querySelector('.sun');
const moonBtn = document.querySelector('.moon');


//=======adaptiv menu=====
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => changeMenu('open'));
navLinks.forEach((el) => el.addEventListener('click', () => changeMenu('close')));

function changeMenu(menu) {
    if (menu === 'open') {
        nav.classList.toggle('open');
        body.classList.toggle('lock');
        hamburger.classList.toggle('open');
    } else if (menu === 'close') {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        body.classList.remove('lock');
    }
}

//=========portfolio============
const portfolioBtnAll = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.img-portfolio');
const portfolioBtns = document.querySelector('.wrapper-btn');

portfolioBtns.addEventListener('click', (event) => {
    const btn = event.target;
    if (btn.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${btn.dataset.season}/${index + 1}.jpg`);
        if (!btn.classList.contains('light-btn-gold')) {
            portfolioBtnAll.forEach(button => button.classList.remove('activ-btn'));
            portfolioBtnAll.forEach(button => button.classList.remove('light-activ'));
            portfolioBtnAll.forEach(button => button.classList.remove('activ'));
            btn.classList.add('activ-btn');
            btn.classList.add('activ');
        } else {
            portfolioBtnAll.forEach(button => button.classList.remove('light-activ'));
            portfolioBtnAll.forEach(button => button.classList.remove('activ'));
            btn.classList.add('light-activ');
            btn.classList.add('activ');
        }
    }
})

//=======translate=======
import i18obj from "./translate.js";

const allDataI18Obj = document.querySelectorAll('[data-i18Obj]');
const placeholders = document.querySelectorAll('.contacts-form');
const school = document.querySelector('.school');
const formRu = ['Почта', 'Телефон', 'Сообщение'];
const formEn = ['E-mail', 'Phone', 'Message'];

ru.addEventListener('click', () => getTranslate('ru'));
en.addEventListener('click', () => getTranslate('en'));

function getTranslate(langs) {
    if (langs === 'ru') {
        en.classList.remove('activ-languages');
        ru.classList.add('activ-languages');
        allDataI18Obj.forEach(langua => langua.textContent = i18obj.ru[langua.dataset.i18obj]);
        placeholders.forEach((elem, ind) => elem.placeholder = formRu[ind]);
        school.textContent = 'Пожалуй Лучшая Школа';
        lang = 'ru';
        if (ru.classList.contains('light-color-languages')) {
            en.classList.remove('activ-languages-light');
            en.classList.remove('activ-languages-darck');
            ru.classList.add('activ-languages-light');
        } else {
            en.classList.remove('activ-languages-light');
            en.classList.remove('activ-languages-darck');
            ru.classList.add('activ-languages-darck');
        }
    } else {
        ru.classList.remove('activ-languages');
        en.classList.add('activ-languages');
        allDataI18Obj.forEach(langua => langua.textContent = i18obj.en[langua.dataset.i18obj])
        placeholders.forEach((elem, ind) => elem.placeholder = formEn[ind])
        school.textContent = 'Rolling Scopes School';
        lang = 'en';
        if (en.classList.contains('light-color-languages')) {
            ru.classList.remove('activ-languages-light');
            ru.classList.remove('activ-languages-darck');
            en.classList.add('activ-languages-light');
        } else {
            ru.classList.remove('activ-languages-darck');
            en.classList.add('activ-languages-darck');
        }
    }
}
//===========light-theme=========
const lightColor = ['.nav-link', '.skills-item', '.skills-item-title', '.section-title', '.price-card-title', '.sum', '.slash', '.price-text', '.title-contacts', '.date-text', '.github-link', '.school', '.hero-title', '.text-hero'];
const iconFill = ['.icon', '.icon-logo', '.copirite'];
const bgColorWhite = ['.section', '.footer'];
const btnGold = ['.portfolio-btn', '.price-btn'];
const btnWhite = ['.contact-btn', '.hero-btn'];

const btnThem = document.querySelector('.icon-logo');
const heroBg = document.querySelector('.wrapper-hero');
const headerBg = document.querySelector('.wrapper-header');
const contactBg = document.querySelector('.contacts');
const formTextarea = document.querySelectorAll('.contacts-form');
const navMenu = document.querySelector('.nav');
const burger = document.querySelector('.hamburger');

sunBtn.addEventListener('click', () => changeThem('add-light'));
moonBtn.addEventListener('click', () => changeThem('add-darck'));

function setTheme(theme) {
    if (theme === 'light') {
        changeThem('add-light')
    }
}
sunBtn.classList.add('activ-sun-muun')
moonBtn.classList.add('not-activ')

function changeThem(themes) {

    bgColorWhite.forEach(el => {
        document.querySelectorAll(el).forEach(el => el.classList.toggle('bgc-white'))
    });
    iconFill.forEach(el => {
        document.querySelectorAll(el).forEach(el => el.classList.toggle('light-color-icon'))
    });
    body.classList.toggle('light-bgc-html');
    lightColor.forEach(el => {
        document.querySelectorAll(el).forEach(el => el.classList.toggle('light-color'))
    });
    btnGold.forEach(el => {
        document.querySelectorAll(el).forEach(el => el.classList.toggle('light-btn-gold'))
    });
    btnWhite.forEach(el => {
        document.querySelectorAll(el).forEach(el => el.classList.toggle('light-btn-white'))
    });
    formTextarea.forEach(el => el.classList.toggle('light-bg-color-form'));
    if (themes === 'add-light') {
        heroBg.classList.add('bg-light');
        contactBg.classList.add('bg-light');
        navMenu.classList.add('nav-light');
        burger.classList.add('nav-light');
        en.classList.add('light-color-languages');
        ru.classList.add('light-color-languages');
        headerBg.classList.add('bg-light');

        sunBtn.classList.remove('activ-sun-muun');
        moonBtn.classList.remove('not-activ');
        sunBtn.classList.add('not-activ');
        moonBtn.classList.add('activ-sun-muun');

        document.querySelector('.activ').classList.remove('activ-btn');
        document.querySelector('.activ').classList.add('light-activ');
        document.querySelector('.activ-languages').classList.remove('activ-languages-darck');
        document.querySelector('.activ-languages').classList.add('activ-languages-light');

        theme = 'light'
    } else if (themes === 'add-darck') {
        heroBg.classList.remove('bg-light');
        headerBg.classList.remove('bg-light');
        contactBg.classList.remove('bg-light');
        navMenu.classList.remove('nav-light');
        burger.classList.remove('nav-light');
        en.classList.remove('light-color-languages');
        ru.classList.remove('light-color-languages');

        sunBtn.classList.remove('not-activ');
        moonBtn.classList.remove('activ-sun-muun');
        sunBtn.classList.add('activ-sun-muun');
        moonBtn.classList.add('not-activ');

        document.querySelector('.activ').classList.remove('light-activ');
        document.querySelector('.activ').classList.add('activ-btn');
        document.querySelector('.activ-languages').classList.remove('activ-languages-light');
        document.querySelector('.activ-languages').classList.add('activ-languages-darck');

        theme = 'darck'
    }
}

//=========preload=============

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSeasonsImages() {
    seasons.forEach(folder => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${folder}/${i}.jpg`;
        }
    })
}
preloadSeasonsImages();

//======local-storage=============

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslate(lang);
    }
    if (localStorage.getItem('theme')) {
        const theme = localStorage.getItem('theme');
        setTheme(theme)
    }
}
window.addEventListener('load', getLocalStorage)

// console.log(

//     `Итого: 100
// Вёрстка валидная: +10
//     для проверки валидности вёрстки используйте сервис https://validator.w3.org/
//     валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью.
//     если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований
// Вёрстка семантическая: +20
//     В коде странице присутствуют следующие элементы(указано минимальное количество, может быть больше):
// <header>, <main>, <footer> +2
//     шесть элементов <section> (по количеству секций) +2
//         только один заголовок <h1> +2
//             пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2
//                 один элемент <nav> (панель навигации) +2
//     два списка ul > li > a (панель навигации, ссылки на соцсети) +2
//                     десять кнопок <button> +2
//                         два инпута: <input type="email"> и <input type="tel"> +2
//                             один элемент <textarea> +2
//                                 три атрибута placeholder +2
//                                 Вёрстка соответствует макету: +48
//                                 блок <header> +6
//                                     секция hero +6
//                                     секция skills +6
//                                     секция portfolio +6
//                                     секция video +6
//                                     секция price +6
//                                     секция contacts +6
//                                     блок <footer> +6
//                                         Требования к css: + 12
//                                         для построения сетки используются флексы или гриды +2
//                                         при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
//                                         фоновый цвет тянется на всю ширину страницы +2
//                                         иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2
//                                         изображения добавлены в формате .jpg +2
//                                         есть favicon +2
//                                         Интерактивность, реализуемая через css: +20
//                                         плавная прокрутка по якорям +5
//                                         ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5
//                                         интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, \n    например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5
//                                         обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5 \n вывел с помощью обратных ковычек, но и с помощью \\n могу`);

