const mobileBtnOpen = document.querySelector('#mobileNavOpen');

const mobileBtnClose = document.querySelector('#mobileNavClose');

const mobileNav = document.querySelector('.mobile-nav');

const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

function openMenu () {
    
    mobileNav.classList.add('mobile-nav--open');

    document.body.classList.add('no-scroll');

}

function closeMenu () {

    mobileNav.classList.remove('mobile-nav--open');

    document.body.classList.remove('no-scroll');

}

mobileNavLinks.forEach(function (elem) {

    elem.addEventListener('click', closeMenu);
    
});

mobileBtnOpen.addEventListener('click', openMenu);

mobileBtnClose.addEventListener('click', closeMenu);