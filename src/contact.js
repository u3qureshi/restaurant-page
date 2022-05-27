function makeContact() {
    const contactDiv1 = document.createElement('div');
    contactDiv1.classList.add('contact1');
    contactDiv1.classList.add('contact-grid-item');
    const titleOne = document.createElement('h2');
    titleOne.textContent = 'Address 🏠';
    contactDiv1.appendChild(titleOne);
    contactDiv1.appendChild(createText('9713 King Street'));
    contactDiv1.appendChild(createText('Upper Ring Plaza'));
    contactDiv1.appendChild(createText('Ba Sing Se'));

    const contactDiv2 = document.createElement('div');
    contactDiv2.classList.add('contact2');
    contactDiv2.classList.add('contact-grid-item');
    const titleTwo = document.createElement('h2');
    titleTwo.textContent = 'Hours 🕘';
    contactDiv2.appendChild(titleTwo);
    contactDiv2.appendChild(createText('Monday: 09:00 - 22:00'));
    contactDiv2.appendChild(createText('Tuesday: 09:00 - 22:00'));
    contactDiv2.appendChild(createText('Wednesday: 09:00 - 22:00'));
    contactDiv2.appendChild(createText('Thursday: 09:00 - 22:00'));
    contactDiv2.appendChild(createText('Friday: 09:00 - 23:00'));
    contactDiv2.appendChild(createText('Saturday: 09:00 - 23:00'));
    contactDiv2.appendChild(createText('Sunday: 09:00 - 22:00'));


    const contactDiv3 = document.createElement('div');
    contactDiv3.classList.add('contact3');
    contactDiv3.classList.add('contact-grid-item');
    const shopImg = document.createElement('img');
    shopImg.src = '../dist/images/jasmine-dragon-front.png';
    shopImg.alt = 'Shop Front';
    contactDiv3.appendChild(shopImg);

    const contactDiv4 = document.createElement('div');
    contactDiv4.classList.add('contact4');
    contactDiv4.classList.add('contact-grid-item');
    const titleFour = document.createElement('h2');
    titleFour.textContent = 'Contact Us 👥';
    contactDiv4.appendChild(titleFour);
    contactDiv4.appendChild(createText('📞 (647)818-1909'));
    contactDiv4.appendChild(createText('📧 uncle_iroh@hotman.com'));
    contactDiv4.appendChild(createText('☁ Elementgram: @jasmine_dragon'))

    const contactGrid = document.createElement('div');
    contactGrid.setAttribute('id', 'contact-grid');
    contactGrid.appendChild(contactDiv1);
    contactGrid.appendChild(contactDiv2);
    contactGrid.appendChild(contactDiv3);
    contactGrid.appendChild(contactDiv4);

    return contactGrid;
}

function createText(text) {
    const h4 = document.createElement('h4');
    h4.textContent = text;

    return h4;
}

function loadContact() {
    const dynamicBody = document.getElementById('dynamic-body');
    dynamicBody.textContent = '';
    dynamicBody.appendChild(makeContact());
}

export default loadContact;