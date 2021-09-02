const sideMenuToggle = document.querySelector(".sideMenuToggle"),
    closeBtn = document.querySelector(".close"),
    sideMenu = document.querySelector(".sidemenu"),
    headY = document.querySelector(".header");

const CLICK_EVENT_CLASS = "active";
const SCROLL_EVENT_CLASS = "sticky";

function toggleBtnClick() {
    sideMenu.classList.add(CLICK_EVENT_CLASS)
}

function closeBtnClick() {
    sideMenu.classList.remove(CLICK_EVENT_CLASS)
}

function scrollSticky() {
    if (pageYOffset >= 87) {
        headY.classList.add(SCROLL_EVENT_CLASS)
    } else {
        headY.classList.remove(SCROLL_EVENT_CLASS)
    }
}

function init() {
    sideMenuToggle.addEventListener('click', toggleBtnClick);
    closeBtn.addEventListener('click', closeBtnClick);
    window.addEventListener('scroll', scrollSticky);
}

init();