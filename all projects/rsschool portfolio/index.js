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
const formRu = ['??????????', '??????????????', '??????????????????'];
const formEn = ['E-mail', 'Phone', 'Message'];

ru.addEventListener('click', () => getTranslate('ru'));
en.addEventListener('click', () => getTranslate('en'));

function getTranslate(langs) {
    if (langs === 'ru') {
        en.classList.remove('activ-languages');
        ru.classList.add('activ-languages');
        allDataI18Obj.forEach(langua => langua.textContent = i18obj.ru[langua.dataset.i18obj]);
        placeholders.forEach((elem, ind) => elem.placeholder = formRu[ind]);
        school.textContent = '?????????????? ???????????? ??????????';
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

//     `??????????: 100
// ?????????????? ????????????????: +10
//     ?????? ???????????????? ???????????????????? ?????????????? ?????????????????????? ???????????? https://validator.w3.org/
//     ???????????????? ?????????????? ?????????????????????????? ?????????????? "Document checking completed. No errors or warnings to show." ?? ?????????? ???????????? ?????????? ???? ?????????? ???????????????????? ???????????????????? ??????????????????.
//     ???????? ???????? ???????????????????????????? - warnings, ???? ?????? ???????????? - errors, ???????????????????? ???????????????? ???????????? ???? ?????????? ????????????????????
// ?????????????? ??????????????????????????: +20
//     ?? ???????? ???????????????? ???????????????????????? ?????????????????? ????????????????(?????????????? ?????????????????????? ????????????????????, ?????????? ???????? ????????????):
// <header>, <main>, <footer> +2
//     ?????????? ?????????????????? <section> (???? ???????????????????? ????????????) +2
//         ???????????? ???????? ?????????????????? <h1> +2
//             ???????? ???????????????????? <h2> (???????????????????? ???????????? ?????????? ????????, ?? ?????????????? ?????????????????? <h1>) +2
//                 ???????? ?????????????? <nav> (???????????? ??????????????????) +2
//     ?????? ???????????? ul > li > a (???????????? ??????????????????, ???????????? ???? ??????????????) +2
//                     ???????????? ???????????? <button> +2
//                         ?????? ????????????: <input type="email"> ?? <input type="tel"> +2
//                             ???????? ?????????????? <textarea> +2
//                                 ?????? ???????????????? placeholder +2
//                                 ?????????????? ?????????????????????????? ????????????: +48
//                                 ???????? <header> +6
//                                     ???????????? hero +6
//                                     ???????????? skills +6
//                                     ???????????? portfolio +6
//                                     ???????????? video +6
//                                     ???????????? price +6
//                                     ???????????? contacts +6
//                                     ???????? <footer> +6
//                                         ???????????????????? ?? css: + 12
//                                         ?????? ???????????????????? ?????????? ???????????????????????? ???????????? ?????? ?????????? +2
//                                         ?????? ???????????????????? ???????????????? ???????????????? ???????????????? ?????????????? ?????????????????????? ???? ????????????, ?? ???? ???????????????????? ?? ?????????????? +2
//                                         ?????????????? ???????? ?????????????? ???? ?????? ???????????? ???????????????? +2
//                                         ???????????? ?????????????????? ?? ?????????????? .svg. SVG ?????????? ???????? ???????????????? ?????????? ????????????????. ???????????????? ???????????????? ???? ????????????, ?? ???? ???? ???????????? ???????????????????? +2
//                                         ?????????????????????? ?????????????????? ?? ?????????????? .jpg +2
//                                         ???????? favicon +2
//                                         ??????????????????????????????, ?????????????????????? ?????????? css: +20
//                                         ?????????????? ?????????????????? ???? ???????????? +5
//                                         ???????????? ?? ???????????? ?????????? ???? ???????????? ???????????? ?????????????? ?? ???? ???????????????? ?????????? https://rs.school/js-stage0/ +5
//                                         ?????????????????????????????? ???????????????? ?? ???????? ???? ???????????? ?????????????????? ???????????????? ???????? ??????????????, ????????????????, ?????? ???????????? ???????????????? cursor: pointer, ???? ?? ???????????? ???????????????????? ??????????????, \n    ????????????????, ?????????????????? ?????????? ???????? ?????? ?????????? ????????????. ???????? ?? ???????????? ?????????????? ?????????? ?????? ?????????????????? ?? ??????????, ?????? ???????????????? ?????????????????? ?????? ??????????. ???????? ?? ???????????? ?????????? ???? ??????????????, ???????????????????? ???? ???? ???????????? ????????????????????, ???????????????????????????? ?????????? ???????????? ???????????? +5
//                                         ???????????????????????? ???????????????????? ?? ??????????????????????????????: ?????????????? ?????????????????? ???????????????? ???????? ???????????????? ?????? ?????????????????? ?? ?????????? ???? ???????????????? ???? ???????????????? ???????????????? +5 \n ?????????? ?? ?????????????? ???????????????? ??????????????, ???? ?? ?? ?????????????? \\n ????????`);

