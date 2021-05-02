import { getSiblings } from "./functions";

class TabList {
    constructor(buttonsContainer, tabs) {
        this.buttonsContainer = buttonsContainer;
        this.tabs = tabs;

        this.buttonsContainer.addEventListener('click', event => {
            let index = event.target.closest('.tab-button').dataset.value;
            this.openTab(index);
            getSiblings(event.target.closest('.tab-button')).forEach(function(e){
                e.classList.remove('active');
            });
            event.target.closest('.tab-button').classList.add('active');
        });
    }

    openTab(index) {
        this.tabs.querySelector('.active').classList.remove('active');
        this.tabs.querySelector(`.tab--${index}`).classList.add('active');
    }
}

let buttonsContainer = document.querySelectorAll('.tabs-buttons'),
    tabs = '';

for (let buttonsContainerItem of buttonsContainer) {
    tabs = buttonsContainerItem.nextElementSibling;
    new TabList(buttonsContainerItem, tabs);
}

