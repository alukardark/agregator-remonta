let masterStepButtons = document.querySelectorAll('.modal__step-btn');
let $this = '';
let preloader = '';
let stepActive = '';

for (let masterStepBtn of masterStepButtons) {
    masterStepBtn.addEventListener('click', function (e) {
        e.preventDefault();

        $this = this;
        preloader = $this.parentNode.parentNode.parentNode.querySelector('.spinner');
        stepActive = $this.parentNode.parentNode;

        stepActive.classList.add('hide');
        preloader.classList.add('vis');

        setTimeout(function () {
            preloader.classList.remove('vis');
        }, 500);

        setTimeout(function () {
            if (masterStepBtn.classList.contains('modal__step-btn--next')) {
                stepActive.nextElementSibling.classList.remove('hide');
            } else {
                stepActive.previousElementSibling.classList.remove('hide');
            }
        }, 800);
    });
}
