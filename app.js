const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn--burger');
const navLists = document.querySelector('.nav-lists');

var showmenu = false;
menuBtn.addEventListener('click', () => {
    if (showmenu == false) {
        hamburger.classList.add('open');
        navLists.classList.add('open');
        showmenu = true;
    } else {
        hamburger.classList.remove('open');
        navLists.classList.remove('open');
        showmenu = false;
    }
});