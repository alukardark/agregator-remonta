import sass from '../scss/main.scss';
import Choices from 'choices.js';
import MicroModal from 'micromodal';
import Inputmask from "inputmask";
import SimpleBar from 'simplebar';
import 'lightgallery.js';
import './map.js';

// window.onload = function () {
//     let widthts = screen.width;
//     if (widthts < 992) {
//         var test = document.querySelectorAll('.home-brand__item');
//         var test2 = document.querySelector('.home-brand__list--mob');
//         let i;
//         for (i = 0; i < test.length; ++i) {
//             test2.appendChild(test[i]);
//         }
//     }
// };


var btnMenuMobile = document.querySelector(".header-city");
var menuMobile = document.querySelector(".header-city ul");

window.addEventListener('click', function (event) {
    if (btnMenuMobile.contains(event.target) && !menuMobile.contains(event.target)) {
        menuMobile.classList.toggle("active");
    } else if (menuMobile.classList.contains('active') && !menuMobile.contains(event.target)) {
        menuMobile.classList.remove("active");
    }
});


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
    console.log(el);
    new SimpleBar(el, {
        autoHide: false
    });
});


MicroModal.init({
    openTrigger: 'data-custom-open',
    disableScroll: true,
    disableFocus: false,
    awaitCloseAnimation: true,
});



var filterButtons = document.querySelectorAll(".filter__btn");
var filterDropdown = '';

window.addEventListener('click', function (event) {
    for (var button of filterButtons) {

        filterDropdown = button.nextElementSibling;

        if (button.contains(event.target)) {
            filterDropdown.classList.toggle('active');
        }else if(!filterDropdown.contains(event.target)){
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
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let blockID = anchor.getAttribute('href');
        blockID = blockID.substring(blockID.lastIndexOf("#"));

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


