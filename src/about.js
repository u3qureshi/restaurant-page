function makeAbout() {
    const aboutPage1 = document.createElement('div');
    aboutPage1.classList.add('about-page1');

    const irohImg = document.createElement('img');
    irohImg.src = 'images/iroh-smiling.jpg';
    irohImg.alt = 'Happy Iroh';

    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'WHO WE ARE 🌺';

    aboutPage1.appendChild(aboutTitle);
    aboutPage1.appendChild(irohImg);

    const aboutPage2 = document.createElement('div');
    aboutPage2.classList.add('about-page2');

    const aboutSubtitle = document.createElement('h3');
    aboutSubtitle.textContent = '"Life happens wherever you are, whether you make it or not."';

    const aboutText = document.createElement('h4');
    aboutText.textContent = 'Tea is Liquid Wisdom. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in eaque vel assumenda, facilis ipsam. Incidunt recusandae quibusdam ab, ad quod sint accusamus. Corporis accusamus repellat error animi nisi ipsam veritatis praesentium in tempore nam repellendus ipsum, suscipit perferendis fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo.';

    aboutPage2.appendChild(aboutSubtitle);
    aboutPage2.appendChild(aboutText);

    const aboutPageContainer = document.createElement('div');
    aboutPageContainer.classList.add('about-page-container');
    aboutPageContainer.appendChild(aboutPage1);
    aboutPageContainer.appendChild(aboutPage2);

    return aboutPageContainer;
}

function loadAbout() {
    const dynamicBody = document.getElementById('dynamic-body');
    dynamicBody.textContent = '';
    dynamicBody.appendChild(makeAbout());
}

export default loadAbout;