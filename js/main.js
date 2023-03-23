/*==================== SHOW MENU ====================*/

// Validate that variables exist
// was added the show-menu class to the div tag with the nav__menu class
const showMenu = (toggLeId, navId) => {
    const toggle = document.getElementById(toggLeId);
    nav = document.getElementById(navId);

    if (toggLeId && navId) {
        toggle.addEventListener('click', () => {

            nav.classList.toggle('show-menu');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
// When we click on each nav__link, we remove the show-menu class

const navLink = document.querySelectorAll('nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//  ==================== SCROLL SECTIONS ACTIVE LINK ====================

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrolly = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

// ==================== CHANGE BACKGROUND HEADER ====================
// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag

function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// ==================== SHOW SCROLL TOP ====================
// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);


