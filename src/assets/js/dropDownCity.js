var btnMenuMobile = document.querySelector(".header-city");
var menuMobile = document.querySelector(".header-city ul");

window.addEventListener('click', function (event) {
    if (btnMenuMobile.contains(event.target) && !menuMobile.contains(event.target)) {
        menuMobile.classList.toggle("active");
    } else if (menuMobile.classList.contains('active') && !menuMobile.contains(event.target)) {
        menuMobile.classList.remove("active");
    }
});