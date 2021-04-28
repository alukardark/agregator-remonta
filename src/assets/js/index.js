import sass from '../scss/main.scss';
window.onload = function () {
    let widthts = screen.width;
    if (widthts < 992) {
        var test = document.querySelectorAll('.home-brand__item');
        var test2 = document.querySelector('.home-brand__list--mob');

        let i;
        for (i = 0; i < test.length; ++i) {
            test2.appendChild(test[i]);
        };


    }


};