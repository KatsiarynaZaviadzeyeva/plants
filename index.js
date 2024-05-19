// burger menu
(function () {
    let burgerItem = document.querySelector('.burger');
    let menu = document.querySelector('.header__navigation');
    let menuLinks = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__navigation-active');
    });
    menu.addEventListener('click', () => {
        menu.classList.remove('header__navigation-active');
    });
    if (window.innerWidth <= 608) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__navigation-active');
            })
        }
    }
}());

// buttons for services

let pressButton = function () {
    let buttons = document.querySelectorAll('.services__button-stuff');
    let activeButton = 0;
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].className.includes('button-active')) {
            activeButton++;
        }
    }
    if (activeButton == 2 && !this.className.includes('button-active')) {
        return;
    }
    this.classList.toggle('button-active');
    let content = document.getElementsByClassName('services-cards__card-content');
    let nameButton = this.innerText.trim().slice(0, 4);
    let cards = document.getElementsByClassName('services-cards__card');
    for (let i = 0; i < cards.length; i++) {
        let currentCard = content[i].firstChild.nextElementSibling.innerText;
        if (!currentCard.includes(nameButton)) {
            cards[i].classList.toggle('card-blur');
        }
    }
}

let buttons = document.querySelectorAll('.services__button-stuff');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', pressButton);
}

// accordion for prices

let hideButtons = function (event) {
    if (event.target.className.includes('accordion-info__button')) {
        event.stopPropagation();
        return;
    }
    let accordion = document.querySelectorAll('.prices__accordion-items');
    let nameButton = this.innerText.trim();
    for (let i = 0; i < accordion.length / 2; i++) {
        accordion[i].style.display = 'none';
        if (accordion[i].innerText.trim() == nameButton) {
            accordion[i + 3].style.display = 'block';
        }
    }
    event.stopPropagation();
}

let showButtons = function (event) {
    if (event.target.className.includes('accordion-info__button')) {
        event.stopPropagation();
        return;
    }
    let accordion = document.querySelectorAll('.prices__accordion-items');
    this.style.display = 'none';
    for (let i = 0; i < accordion.length / 2; i++) {
        accordion[i].style.display = 'block';
    }
}

let goContacts = function (event) {
    event.stopPropagation();
    location.href='#contacts';
}

let accordion = document.getElementsByClassName('prices__accordion-items');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', hideButtons);
}

let accordionActive = document.getElementsByClassName('accordion-active');
for (let i = 0; i < accordionActive.length; i++) {
    accordionActive[i].addEventListener('click', showButtons);
}

let accordionButtons = document.getElementsByClassName('accordion-info__button');
for (let i = 0; i < accordionButtons.length; i++) {
    accordionActive[i].addEventListener('click', goContacts);
}

// select for contacts

let select = function () {
    let selectHeader = document.querySelector('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    selectHeader.addEventListener('click', selectToggle);
    selectItem.forEach(item => {
        item.addEventListener('click', selectOption);
    });

    function selectToggle() {
        let content = document.getElementsByClassName('select__content');
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('showContent');
        }
        this.parentElement.classList.toggle('select-active');
        this.classList.toggle('select__header-opened');
        this.lastElementChild.classList.replace('select__ico', 'select__ico-opened');
    }
}

function selectOption() {
    let line = this.innerText;
    let selectLine = this.closest('.select');
    let currentLine = selectLine.querySelector('.select__current');
    currentLine.innerText = line;
    selectLine.classList.remove('select-active');
    this.className = 'select__item select__item-current';
    let content = document.getElementsByClassName('select__content');
    let optionsCity = document.getElementsByClassName('select__item');
    for (let i = 0; i < optionsCity.length; i++) {
        if (optionsCity[i].className === 'select__item select__item-current') {
            content[i].classList.add('showContent');
        } else {
            content[i].classList.remove('showContent');
        }
        optionsCity[i].classList.remove('select__item-current');
    }

    let item = document.querySelector('.select__ico-opened');
    item.classList.replace('select__ico-opened', 'select__ico');
}

select();

console.log('Оценка за работу 100 баллов\n\n1. При нажатии на кнопки:Gardens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\n');