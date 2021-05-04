import sass from '../scss/main.scss';
import Choices from 'choices.js';
import MicroModal from 'micromodal';
import Inputmask from "inputmask";
import SimpleBar from 'simplebar';
import Swiper from "swiper";

import FlexMasonry from "./flexMasonry.js";
import 'lightgallery.js';
import './map.js';
import './mapModal.js';
import './tabList.js';
import './dropDownCity.js';
import './modalSteps.js';


if (document.querySelector('.js-choice') !== null) {
    const choices = new Choices('.js-choice', {
        itemSelectText: '',
        loadingText: 'Загрузка...',
        searchEnabled: false,
        shouldSort: false
    });

    document.querySelectorAll('.js-choice').forEach((el) => {
        el.addEventListener(
            'showDropdown',
            function (event) {
                new SimpleBar(el.parentNode.nextSibling.querySelector('.choices__list--dropdown .choices__list'), {
                    autoHide: false
                });
            },
            false,
        );
    });
}

document.querySelectorAll('[data-scroll]').forEach((el) => {
    new SimpleBar(el, {
        autoHide: false
    });
});


MicroModal.init({
    openTrigger: 'data-custom-open',
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
});



let filterButtons = document.querySelectorAll(".filter__btn");
let filterDropdown = '';

window.addEventListener('click', function (event) {
    for (let button of filterButtons) {

        filterDropdown = button.nextElementSibling;

        if (button.contains(event.target)) {
            filterDropdown.classList.toggle('active');
        } else if (!filterDropdown.contains(event.target)) {
            filterDropdown.classList.remove('active');
        }
    }
});


document.querySelectorAll('.lightgallery').forEach((el) => {
    lightGallery(el);
});

document.querySelectorAll('input[type="tel"]').forEach(el => {
    Inputmask({
        "mask": "+7 (999) 999 9999",
        "clearIncomplete": false,
        "placeholder": ""
    }).mask(el);
});

//Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');
let blockID = '';

for (let anchor of anchors) {
    if (anchor.getAttribute('href') != "#") {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            blockID = anchor.getAttribute('href');
            blockID = blockID.substring(blockID.lastIndexOf("#"));

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

new Swiper('.company__more-services .swiper-container', {
    resistanceRatio: .45,
    slidesPerView: 'auto',
    freeMode: true,
});


FlexMasonry.init('.types-equipment__list', {
    breakpointCols: {
        'min-width: 992px': 2,
        'min-width: 768px': 1,
    }
});





document.querySelector('.base__show-map a').click();