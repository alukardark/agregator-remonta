let moreBtns = document.querySelectorAll('.more-btn');

if (moreBtns) {
    for (let moreBtn of moreBtns) {
        moreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.parentNode.parentNode.querySelectorAll('li.visible-item').forEach(el => {
                    el.classList.remove('visible-item');
                    el.classList.add('hidden-item');
                });
                this.querySelector('span').textContent = this.getAttribute('data-text-vis');
            } else {
                this.classList.add('active');
                this.parentNode.parentNode.querySelectorAll('li.hidden-item').forEach(el => {
                    el.classList.remove('hidden-item');
                    el.classList.add('visible-item');
                });
                this.querySelector('span').textContent = this.getAttribute('data-text-hide');
            }
        });
    }
}



