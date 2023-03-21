/*==================== SHOW MENU ====================*/

const showMenu = (toggLeId, navId) => {
    const toggle = document.getElementById(toggLeId);
    nav = document.getElementById(navId);
            // Validate that variables exist
    if (toggLeId && navId) {
        toggle.addEventListener("click", () => {
            // was added the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu('nav-toggle','nav-menu');
