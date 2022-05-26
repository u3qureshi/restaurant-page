function createHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');

    const companyImg = document.createElement('img');
    companyImg.src = '../src/images/jasmine-dragon-logo.jpg';
    companyImg.alt = 'Jasmine Dragon logo';

    const companyImgDiv = document.createElement('div');
    companyImgDiv.classList.add('company-img');
    companyImgDiv.appendChild(companyImg);

    homePage.appendChild(createText('Best tea in Ba Sing Se!'));
    homePage.appendChild(companyImgDiv);
    homePage.appendChild(createText('Sharing tea with a fascinating stranger is one of life\'s true delights ☕'));
    homePage.appendChild(createText('So come visit us in the Upper Ring of the City or order online!'));

    return homePage;
}

function createText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadHome() {
    const dynamicBody = document.getElementById('dynamic-body');
    dynamicBody.textContent = '';
    dynamicBody.appendChild(createHome());
}

export default loadHome;