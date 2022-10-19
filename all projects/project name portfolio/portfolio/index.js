//=======global variable======
import i18obj from "./translate.js";
let lang = 'en';
let theme = 'darck';
const en = document.querySelector('.languages-en');
const ru = document.querySelector('.languages-ru');
const sunBtn = document.querySelector('.sun');
const moonBtn = document.querySelector('.moon');
const heroBtn = document.querySelector('.hero-btn');

const btnSt = document.querySelector('.btn-standart');
const btnPr = document.querySelector('.btn-premium');
const btnGd = document.querySelector('.btn-goldd');
const contactsForm = document.querySelectorAll('.contacts-form');

const form = document.querySelector('.form-contakt');
const formEmail = document.querySelector('.form-email');
const formTel = document.querySelector('.form-tel');
const textarea = document.querySelector('.textarea');
const emailText = document.querySelector('.email-text');
const pfoneText = document.querySelector('.pfone-text');
const textareaText = document.querySelector('.textarea-text');
//=======adaptiv menu=====
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

heroBtn.addEventListener('click', () => focusInput(0));
btnSt.addEventListener('click', () => focusInput('стандартный'));
btnPr.addEventListener('click', () => focusInput('премиальный'));
btnGd.addEventListener('click', () => focusInput('золотой'));
hamburger.addEventListener('click', () => changeMenu('open'));
navLinks.forEach((el) => el.addEventListener('click', () => changeMenu('close')));


function changeMenu(menu) {
    if (menu === 'open') {
        nav.classList.toggle('open');
        navList.classList.toggle('open')
        body.classList.toggle('lock');
        hamburger.classList.toggle('open');
    } else if (menu === 'close') {
        hamburger.classList.remove('open');
        navList.classList.remove('open')
        nav.classList.remove('open');
        body.classList.remove('lock');
    }
}
//===========form validation========

function focusInput(y) {
    if (lang == 'ru') {
        if (y) {
            textarea.innerHTML = `Мне пожалуйста ${y} пакет услуг.`
        }
    } else {
        if (y == 'стандартный') {
            textarea.innerHTML = `Please give me a standart package of servicesа.`
        } else if (y == 'премиальный') {
            textarea.innerHTML = `Please give me a premium package of servicesа.`
        } else if (y == 'золотой') {
            textarea.innerHTML = `Please give me a gold package of servicesа.`
        }
    }
    contactsForm.forEach(el => el.focus())
}

function validationEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validationTel(tel) {
    let re = /^\+[0-9\s]*$|^[0-9\s]*$/;
    return re.test(tel);
}

form.onsubmit = function () {
    let valueEmail = formEmail.value,
        valueTel = formTel.value,
        valueTextarea = textarea.value;

    if (valueEmail.length == 0) {
        console.log('2');
        emailText.innerHTML = (lang == 'ru') ? 'не введен адрес электронной почты' : 'email address not entered';
        formEmail.classList.add('redForm')
        return false;
    } else {
        console.log('ddd');
        emailText.innerHTML = '';
        formEmail.classList.remove('redForm')
    }
    console.log('&');
    if (!validationEmail(valueEmail)) {

        console.log('3');

        formEmail.classList.add('redForm');
        emailText.innerHTML = (lang == 'ru') ? 'введен некорректный адрес электронной почты' : 'invalid email address entered';
        return false;
    } else {
        formEmail.classList.remove('redForm');
        emailText.innerHTML = '';
    }

    if (valueTel.length == 0) {
        console.log('4');
        pfoneText.innerHTML = (lang == 'ru') ? 'не введен номер телефона' : 'pfone number not entered';
        formTel.classList.add('redForm');
        return false;
    } else {
        pfoneText.innerHTML = '';
        formTel.classList.remove('redForm')
    }
    if (!validationTel(valueTel)) {
        console.log('5');
        formTel.classList.add('redForm');
        pfoneText.innerHTML = (lang == 'ru') ? 'введен некорректный номер телефона' : 'invalid phone number entered';
        return false;
    } else {
        pfoneText.innerHTML = '';
        formTel.classList.remove('redForm');
    }
    if (valueTextarea.length == 0) {
        console.log('6');
        textarea.classList.add('redForm');
        textareaText.innerHTML = (lang == 'ru') ? 'не введено сообщение' : 'no message entered';
        return false;
    } else {
        textarea.classList.remove('redForm');
        textareaText.innerHTML = '';
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
        school.textContent = 'Школа программирования';
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

sunBtn.addEventListener('click', () => changeThem('add-light'));
moonBtn.addEventListener('click', () => changeThem('add-darck'));

function setTheme(theme) {
    if (theme === 'light') {
        changeThem('add-light')
    }
}
sunBtn.classList.add('activ-sun-moon')
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
        hamburger.classList.add('nav-light');
        en.classList.add('light-color-languages');
        ru.classList.add('light-color-languages');
        headerBg.classList.add('bg-light');

        sunBtn.classList.remove('activ-sun-moon');
        moonBtn.classList.remove('not-activ');
        sunBtn.classList.add('not-activ');
        moonBtn.classList.add('activ-sun-moon');

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
        hamburger.classList.remove('nav-light');
        en.classList.remove('light-color-languages');
        ru.classList.remove('light-color-languages');

        sunBtn.classList.remove('not-activ');
        moonBtn.classList.remove('activ-sun-moon');
        sunBtn.classList.add('activ-sun-moon');
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

