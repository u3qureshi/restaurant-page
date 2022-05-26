import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import loadContact from "./contact";

function initializeBody() {
    //Home nav
    const homeNav = document.querySelector('.nav-home');
    homeNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(homeNav);
            loadHome();
        }
    });

    //Menu nav
    const menuNav = document.querySelector('.nav-menu');
    menuNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(menuNav);
            loadMenu();
        }
    });

    //About nav
    const aboutNav = document.querySelector('.nav-about');
    aboutNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(aboutNav);
            loadAbout();
        }
    });

    //Home nav
    const contactNav = document.querySelector('.nav-contact');
    contactNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(contactNav);
            loadContact();
        }
    });
}

function setActiveNav(navO) {
    const navList = document.querySelectorAll('.nav-link');

    navList.forEach((nav) => {
        if (nav !== navO) {
            nav.classList.remove('active');
            nav.style.borderBottom = 'none';
        }
    });

    navO.classList.add('active');
    navO.style.borderBottom = '2px solid greenyellow';
}

function createLoadFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    footer.appendChild(createText('Copyright © Iroh 2022'));

    const dynamicBody = document.querySelector('#dynamic-body');
    dynamicBody.after(footer);
}

function createText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function intializeWebsiteBody() {

    setActiveNav(document.querySelector('.nav-home'));
    createLoadFooter();
    loadHome();
    initializeBody();
}

export default intializeWebsiteBody;