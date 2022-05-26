import loadHome from "./home";

function createBody() {
    //Home nav
    const homeNav = document.querySelector('nav-home');
    homeNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(homeNav);
            loadHome();
        }
    });
}

function setActiveNav(navO) {
    const navList = document.querySelectorAll('.nav-link');

    navList.forEach((nav) => {
        if (nav !== navO) {
            nav.classList.remove('active');
        }
    });

    navO.classList.add('active');
}

function createLoadFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    footer.appendChild(createText('Copyright © Iroh'));

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
}

export default intializeWebsiteBody;