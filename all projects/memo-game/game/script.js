let isFliperCard = false;
let lockBlock = false;
let firstCard, secondCard;
let playerName = 'Oleg';
let counterWinn = [];
let playerrWinn = [];
let numbersCard = []
let numberCard = [];
let counter = 0;
let counerClicks = 0;
let cardNumber = 0;
let isWinnPlay = false
let indexes = '';

const allertInfo = document.querySelector('.allert');
const howCardNumber = document.querySelector('.how__form-input');
const allertForm = document.querySelector('.allert__form');
const allertText = document.querySelector('.allert__form-text');
const allertImg = document.querySelector('.allert__font');
const info = document.querySelector('.allert-wrapper__info');
const allertBtn = document.querySelector('.allert-wrapper__btn');
const winnerBtn = document.querySelector('.winner-btn');
const formInput = document.querySelector('.allert__form-input');
const formBtn = document.querySelector('.allert__form-btn');
const listWinnerUl = document.querySelector('.winner__list');
const bestWinners = document.querySelector('.winner__list-best');
const bestWinnersAllert = document.querySelector('.best__winners');
const bestWinnersTable = document.querySelector('.best__winners-tabl');
const bestWinnersTitle = document.querySelector('.best__winners-title');
const btn6 = document.querySelector('.c6c');
const btn12 = document.querySelector('.c12c');
const btn18 = document.querySelector('.c18c');
const btn24 = document.querySelector('.c24c');
const btn30 = document.querySelector('.c30c');
const prevBtn = document.querySelector('.prev-btn');
const newBtn = document.querySelector('.new-btn');

const cards = document.querySelectorAll('.card');

cards.forEach(el => el.addEventListener('click', flipCard));
allertBtn.addEventListener('click', removeAllert)
allertImg.addEventListener('click', removeAllert)
formBtn.addEventListener('click', addName)
winnerBtn.addEventListener('click', () => window.location.reload())
newBtn.addEventListener('click', () => window.location.reload())
prevBtn.addEventListener('click', () => bestWinnersAllert.classList.add('none'))

function addName() {
    if (formInput.value.length) {
        playerName = formInput.value
        cardNumber = howCardNumber.value
        if (playerrWinn === null) {
            playerrWinn = []
        }
        if (numbersCard === null) {
            numbersCard = []
        }
        numbersCard.push(cardNumber)
        playerrWinn.push(playerName)
        allertInfo.classList.add('none')
        allertForm.classList.add('none')
        shufleCards()
    } else {
        allertText.classList.remove('none')
    }
}

function flipCard() {
    if (lockBlock) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!isFliperCard) {
        firstCard = this;
        isFliperCard = true;
        counerClicks++
        return
    }
    secondCard = this;
    counerClicks++
    compareData();
}

function compareData() {
    if (firstCard.dataset.painting === secondCard.dataset.painting) {
        stopFlipThisCard();
    } else {
        restartFlip();
    }
}

function stopFlipThisCard() {
    setTimeout(() => {
        allertImg.classList.remove('none')
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        counter++
        allertInfo.classList.remove('none')
        allertBtn.classList.remove('none')
        audio.src = ''
        audio.play()
        info.innerHTML = `Это картина художника ${firstCard.dataset.painting}`;
        allertImg.src = firstCard.childNodes[3].src
        resetCards();
    }, 1000)

}

function restartFlip() {
    lockBlock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
    }, 1300)
}

function resetCards() {
    [firstCard, secondCard] = [null, null];
    [lockBlock, isFliperCard] = [false, false];
}

function allertWinner() {
    allertInfo.classList.remove('none')
    allertBtn.classList.add('none')
    allertImg.classList.add('none')
    listWinnerUl.classList.remove('none')
    bestWinners.classList.remove('none')
    isWinnPlay = true
    for (let i = 0; i < playerrWinn.length; i++) {
        const tr = `<tr class="winner__player"><td>${numbersCard[i]}</td><td>${playerrWinn[i]}</td><td>${counterWinn[i]}</td></tr>`
        listWinnerUl.insertAdjacentHTML('beforeend', tr);
    }
    info.innerHTML = `В игре с ${cardNumber} карточками <br/> ${playerName} Победил всего за ${counerClicks} кликов!!!`

}
function shufleCards() {
    let numberCards = [...cards].filter(el => el.dataset.num <= cardNumber / 2)
    numberCards.forEach(el => {
        el.classList.remove('none')
        let rendomOrder = Math.floor(Math.random() * cardNumber)
        el.style.order = rendomOrder
    })
}

function removeAllert() {
    allertInfo.classList.add('none')
    if (counter === cardNumber / 2) {
        if (counterWinn === null) {
            counterWinn = []
        }
        counterWinn.push(counerClicks)
        winnerBtn.classList.remove('none')
        setTimeout(() => allertWinner(), 1000)
    }
}
// ===localstorege=====
function setLocalStorage() {
    if (isWinnPlay) {
        localStorage.setItem('z', JSON.stringify(numbersCard));
        localStorage.setItem('x', JSON.stringify(playerrWinn));
        localStorage.setItem('y', JSON.stringify(counterWinn));
    }
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('x')) {
        const numCard = JSON.parse(localStorage.getItem('z'))
        const namePlayer = JSON.parse(localStorage.getItem('x'));
        const clicks = JSON.parse(localStorage.getItem('y'));

        winersList(namePlayer, clicks, numCard);
    }
}
window.addEventListener('load', getLocalStorage)

function winersList(a, b, c) {
    playerrWinn = a
    counterWinn = b
    numbersCard = c
    // console.log(numbersCard, playerrWinn, counterWinn);
}

btn6.addEventListener('click', () => best6(6))
btn12.addEventListener('click', () => best6(12))
btn18.addEventListener('click', () => best6(18))
btn24.addEventListener('click', () => best6(24))
btn30.addEventListener('click', () => best6(30))

function best6(x) {
    bestWinnersAllert.classList.remove('none')
    bestWinnersTitle.innerHTML = `список победителей в категории ${x} карточек:`
    let ar = document.querySelectorAll('.best__winners-trr')
    ar.forEach(el => el.parentElement.removeChild(el))
    indexes = ''
    for (let i = 0; i < numbersCard.length; i++) {
        if (numbersCard[i] == x) {
            indexes += (i + ' ')
        }
    }
    let w6 = indexes.split(' ');
    w6.pop()
    let countCategory = []
    let platerCategory = []
    for (let i = 0; i < counterWinn.length; i++) {
        for (let k = 0; k < w6.length; k++) {
            if (+w6[k] == i) {
                platerCategory.push(playerrWinn[i])
                countCategory.push(counterWinn[i])
            }
        }
    }
    if (platerCategory.length && countCategory.length) {
        arrObj = platerCategory.map(function (el, i) {
            return {
                'name': el,
                'count': countCategory[i]
            }
        })
        let sor = arrObj.sort((a, b) => a.count > b.count ? 1 : -1)
        if (sor.length > 10) {
            for (let i = 0; i < 10; i++) {
                const trr = `<tr class="best__winners-trr"><td>${sor[i].name}</td><td>${sor[i].count}</td></tr>`
                bestWinnersTable.insertAdjacentHTML('beforeend', trr);
            }
        } else {
            if (!sor.length) return `<tr class="best__winners-trr"><td> В этой категории еще нет никого(</td>`
            for (let i = 0; i < sor.length; i++) {
                const trr = `<tr class="best__winners-trr"><td>${sor[i].name}</td><td>${sor[i].count}</td></tr>`
                bestWinnersTable.insertAdjacentHTML('beforeend', trr);
            }
        }
    }
}

