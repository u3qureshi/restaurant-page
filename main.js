/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeAbout() {
    const aboutPage1 = document.createElement('div');
    aboutPage1.classList.add('about-page1');

    const irohImg = document.createElement('img');
    irohImg.src = '../dist/images/iroh-smiling.jpg';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');

    const companyImg = document.createElement('img');
    companyImg.src = '../dist/images/jasmine-dragon-logo.jpg';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeMenu() {
    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'grid-container');
    gridContainer.classList.add('grid-container');

    //12 images
    const airTeaImg = document.createElement('img');
    airTeaImg.src = '../dist/images/air-tea.png';

    const metalTea = document.createElement('img');
    metalTea.src = '../dist/images/black-tea.jpg';

    const gingerTea = document.createElement('img');
    gingerTea.src = '../dist/images/ginger-tea.png';

    const ginsengTea = document.createElement('img');
    ginsengTea.src = '../dist/images/ginseng-tea.jpg';

    const greenTea = document.createElement('img');
    greenTea.src = '../dist/images/green-tea.png';

    const jasmineTea = document.createElement('img');
    jasmineTea.src = '../dist/images/jasmine-tea.png';

    const benderTea = document.createElement('img');
    benderTea.src = '../dist/images/oolong-tea.jpg';

    const lycheeTea = document.createElement('img');
    lycheeTea.src = '../dist/images/lychee.png';

    const tapiocaTea = document.createElement('img');
    tapiocaTea.src = '../dist/images/tapioca-tea.png';

    const whiteTea = document.createElement('img');
    whiteTea.src = '../dist/images/white-tea.jpg';

    const spiceTea = document.createElement('img');
    spiceTea.src = '../dist/images/spice-tea.png';

    const redTea = document.createElement('img');
    redTea.src = '../dist/images/red-tea.png';

    gridContainer.appendChild(
        makeMenuGridItem(
            'Air Nomad Style Tea',
            'Air Nomads are known to have their own style of tea, which includes the addition of flour, butter and/or milk.',
            '4 silver',
            airTeaImg
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Metal Brew',
            'This is a strong Black Tea. Made with withered leaves, it packs a punch and is fuel for the whole day.',
            '2 silver',
            metalTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Ginger Tea',
            'A herbal concoction made from ginger roots and can help in healing your illness.',
            '2 silver',
            gingerTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Ginseng Tea',
            '*An Iroh favorite* Made with fresh ginseng roots. The infusion is intense yet delicate and the ginseng flavor grows stronger as it seeps.',
            '3 silver',
            ginsengTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Green Tea',
            '*An Earth Kingdom Classic* The leaves have a refined shape and soothing texture, being subtle in its tastes due to a faster brewing time on lower heat.',
            '3 silver',
            greenTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Jasmine Tea',
            '*An Iroh favorite* A perfect balance of flavors. Different expressions of fragrant jasmine flowers are brought together with infused rolled green tea leaves and a hint of ginger.',
            '5 silver',
            jasmineTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Bender Tea',
            'This Oolong tea is a traditional, partially oxidized tea which grows atop the mountains of the southern islands and its flavor is influenced by the region\'s independent spirit and the mysterious fog created by water and air.',
            '4 silver',
            benderTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Lychee Juice/Tea',
            '*An Earth Kingdom Classic* A very popular drink in the summer. Offered as a tea or juice. Made from lychee nuts.',
            '3 silver',
            lycheeTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Tapioca Tea',
            '*Only at Jasmine Dragon* A very popular drink invented by Iroh. Made by stewing tapioca balls until they are soft and tender and the tapioca is subsequently added to any tea of your choosing, along with a small amount of milk.',
            '5 silver',
            tapiocaTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'White Lotus Tile Tea',
            'This most delicate white tea holds a complex undercurrent of intriguing tastes and strength under its natural layers of sweetness.',
            '4 silver',
            whiteTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Spiced Tea',
            'Common tea of the Fire Kingdom. This warm tea packs a cinnamon kick.',
            '3 silver',
            spiceTea
        )
    );
    gridContainer.appendChild(
        makeMenuGridItem(
            'Red-blooded Nephew',
            'This tea is amber in color, grassy in taste, and very bitter. This blond, complex, and confusing blend resembles Iroh\'s nephew Zuko. Try if you dare.',
            '2 silver',
            redTea
        )
    );

    return gridContainer;
}

function makeMenuGridItem(name, description, price, img) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const teaName = document.createElement('h3');
    teaName.textContent = name;

    const teaDescription = document.createElement('h4');
    teaDescription.textContent = description;

    const teaPrice = document.createElement('h5');
    teaPrice.textContent = price;

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price-div');

    const coinImg = document.createElement('img');
    coinImg.src = '../dist/images/chinese-coin.png';

    priceDiv.appendChild(teaPrice);
    priceDiv.appendChild(coinImg);

    gridItem.appendChild(img);
    gridItem.appendChild(teaName);
    gridItem.appendChild(teaDescription);
    gridItem.appendChild(priceDiv);

    return gridItem;
}

function loadMenu() {
    const dynamicBody = document.getElementById('dynamic-body');
    dynamicBody.textContent = '';
    dynamicBody.appendChild(makeMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





function initializeBody() {
    //Home nav
    const homeNav = document.querySelector('.nav-home');
    homeNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(homeNav);
            (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
    });

    //Menu nav
    const menuNav = document.querySelector('.nav-menu');
    menuNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(menuNav);
            (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    });

    //About nav
    const aboutNav = document.querySelector('.nav-about');
    aboutNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(aboutNav);
            (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    });

    //Home nav
    const contactNav = document.querySelector('.nav-contact');
    contactNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(contactNav);
            (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    initializeBody();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intializeWebsiteBody);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUN4Q3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNuRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDakN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMTztBQUNBO0FBQ0U7QUFDSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7VUMxRm5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7QUFDN0M7QUFDQSxvREFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlQWJvdXQoKSB7XHJcbiAgICBjb25zdCBhYm91dFBhZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2UxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UxJyk7XHJcblxyXG4gICAgY29uc3QgaXJvaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaXJvaEltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvaXJvaC1zbWlsaW5nLmpwZyc7XHJcbiAgICBpcm9oSW1nLmFsdCA9ICdIYXBweSBJcm9oJztcclxuXHJcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSAnV0hPIFdFIEFSRSDwn4y6JztcclxuXHJcbiAgICBhYm91dFBhZ2UxLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gICAgYWJvdXRQYWdlMS5hcHBlbmRDaGlsZChpcm9oSW1nKTtcclxuXHJcbiAgICBjb25zdCBhYm91dFBhZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2UyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UyJyk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhYm91dFN1YnRpdGxlLnRleHRDb250ZW50ID0gJ1wiTGlmZSBoYXBwZW5zIHdoZXJldmVyIHlvdSBhcmUsIHdoZXRoZXIgeW91IG1ha2UgaXQgb3Igbm90LlwiJztcclxuXHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgYWJvdXRUZXh0LnRleHRDb250ZW50ID0gJ1RlYSBpcyBMaXF1aWQgV2lzZG9tLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJdXN0byBpbiBlYXF1ZSB2ZWwgYXNzdW1lbmRhLCBmYWNpbGlzIGlwc2FtLiBJbmNpZHVudCByZWN1c2FuZGFlIHF1aWJ1c2RhbSBhYiwgYWQgcXVvZCBzaW50IGFjY3VzYW11cy4gQ29ycG9yaXMgYWNjdXNhbXVzIHJlcGVsbGF0IGVycm9yIGFuaW1pIG5pc2kgaXBzYW0gdmVyaXRhdGlzIHByYWVzZW50aXVtIGluIHRlbXBvcmUgbmFtIHJlcGVsbGVuZHVzIGlwc3VtLCBzdXNjaXBpdCBwZXJmZXJlbmRpcyBmdWdpYXQhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvcnBvcmlzIHF1b3Mgdm9sdXB0YXMgaWxsdW0gdGVuZXR1ciBjdWxwYSB0ZW1wb3JlIGZhY2lsaXMgYXQgZGViaXRpcyBkb2xvcmlidXMsIGR1Y2ltdXMgbGF1ZGFudGl1bSBwcmFlc2VudGl1bSBldCBhdXQgcmVtIGVhIGxhYm9yZSBtYXhpbWUgbW9sZXN0aWFlIGlwc3VtIHJlcGVsbGVuZHVzIHVsbGFtISBTaW1pbGlxdWUsIHV0IHF1by4nO1xyXG5cclxuICAgIGFib3V0UGFnZTIuYXBwZW5kQ2hpbGQoYWJvdXRTdWJ0aXRsZSk7XHJcbiAgICBhYm91dFBhZ2UyLmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFnZS1jb250YWluZXInKTtcclxuICAgIGFib3V0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhZ2UxKTtcclxuICAgIGFib3V0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhZ2UyKTtcclxuXHJcbiAgICByZXR1cm4gYWJvdXRQYWdlQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgICBjb25zdCBkeW5hbWljQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLWJvZHknKTtcclxuICAgIGR5bmFtaWNCb2R5LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBkeW5hbWljQm9keS5hcHBlbmRDaGlsZChtYWtlQWJvdXQoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDsiLCJmdW5jdGlvbiBtYWtlQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2MS5jbGFzc0xpc3QuYWRkKCdjb250YWN0MScpO1xyXG4gICAgY29udGFjdERpdjEuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ncmlkLWl0ZW0nKTtcclxuICAgIGNvbnN0IHRpdGxlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlT25lLnRleHRDb250ZW50ID0gJ0FkZHJlc3Mg8J+PoCc7XHJcbiAgICBjb250YWN0RGl2MS5hcHBlbmRDaGlsZCh0aXRsZU9uZSk7XHJcbiAgICBjb250YWN0RGl2MS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCc5NzEzIEtpbmcgU3RyZWV0JykpO1xyXG4gICAgY29udGFjdERpdjEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnVXBwZXIgUmluZyBQbGF6YScpKTtcclxuICAgIGNvbnRhY3REaXYxLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ0JhIFNpbmcgU2UnKSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QyJyk7XHJcbiAgICBjb250YWN0RGl2Mi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWdyaWQtaXRlbScpO1xyXG4gICAgY29uc3QgdGl0bGVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGVUd28udGV4dENvbnRlbnQgPSAnSG91cnMg8J+VmCc7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZCh0aXRsZVR3byk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdNb25kYXk6IDA5OjAwIC0gMjI6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdUdWVzZGF5OiAwOTowMCAtIDIyOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnV2VkbmVzZGF5OiAwOTowMCAtIDIyOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnVGh1cnNkYXk6IDA5OjAwIC0gMjI6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdGcmlkYXk6IDA5OjAwIC0gMjM6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdTYXR1cmRheTogMDk6MDAgLSAyMzowMCcpKTtcclxuICAgIGNvbnRhY3REaXYyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ1N1bmRheTogMDk6MDAgLSAyMjowMCcpKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFjdERpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QzJyk7XHJcbiAgICBjb250YWN0RGl2My5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWdyaWQtaXRlbScpO1xyXG4gICAgY29uc3Qgc2hvcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc2hvcEltZy5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvamFzbWluZS1kcmFnb24tZnJvbnQucG5nJztcclxuICAgIHNob3BJbWcuYWx0ID0gJ1Nob3AgRnJvbnQnO1xyXG4gICAgY29udGFjdERpdjMuYXBwZW5kQ2hpbGQoc2hvcEltZyk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdERpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXY0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Q0Jyk7XHJcbiAgICBjb250YWN0RGl2NC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWdyaWQtaXRlbScpO1xyXG4gICAgY29uc3QgdGl0bGVGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlRm91ci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzIPCfkaUnO1xyXG4gICAgY29udGFjdERpdjQuYXBwZW5kQ2hpbGQodGl0bGVGb3VyKTtcclxuICAgIGNvbnRhY3REaXY0LmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ/Cfk54gKDY0Nyk4MTgtMTkwOScpKTtcclxuICAgIGNvbnRhY3REaXY0LmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ/Cfk6cgdW5jbGVfaXJvaEBob3RtYW4uY29tJykpO1xyXG4gICAgY29udGFjdERpdjQuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgn4piBIEVsZW1lbnRncmFtOiBAamFzbWluZV9kcmFnb24nKSlcclxuXHJcbiAgICBjb25zdCBjb250YWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWdyaWQnKTtcclxuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGNvbnRhY3REaXYxKTtcclxuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGNvbnRhY3REaXYyKTtcclxuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGNvbnRhY3REaXYzKTtcclxuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGNvbnRhY3REaXY0KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFjdEdyaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xyXG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgaDQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBoNDtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBkeW5hbWljQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLWJvZHknKTtcclxuICAgIGR5bmFtaWNCb2R5LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBkeW5hbWljQm9keS5hcHBlbmRDaGlsZChtYWtlQ29udGFjdCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcclxuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2UnKTtcclxuXHJcbiAgICBjb25zdCBjb21wYW55SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb21wYW55SW1nLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9qYXNtaW5lLWRyYWdvbi1sb2dvLmpwZyc7XHJcbiAgICBjb21wYW55SW1nLmFsdCA9ICdKYXNtaW5lIERyYWdvbiBsb2dvJztcclxuXHJcbiAgICBjb25zdCBjb21wYW55SW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wYW55SW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBhbnktaW1nJyk7XHJcbiAgICBjb21wYW55SW1nRGl2LmFwcGVuZENoaWxkKGNvbXBhbnlJbWcpO1xyXG5cclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ0Jlc3QgdGVhIGluIEJhIFNpbmcgU2UhJykpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY29tcGFueUltZ0Rpdik7XHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdTaGFyaW5nIHRlYSB3aXRoIGEgZmFzY2luYXRpbmcgc3RyYW5nZXIgaXMgb25lIG9mIGxpZmVcXCdzIHRydWUgZGVsaWdodHMg4piVJykpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnU28gY29tZSB2aXNpdCB1cyBpbiB0aGUgVXBwZXIgUmluZyBvZiB0aGUgQ2l0eSBvciBvcmRlciBvbmxpbmUhJykpO1xyXG5cclxuICAgIHJldHVybiBob21lUGFnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZHluYW1pY0JvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gbWFrZU1lbnUoKSB7XHJcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmlkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JpZC1jb250YWluZXInKTtcclxuICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKTtcclxuXHJcbiAgICAvLzEyIGltYWdlc1xyXG4gICAgY29uc3QgYWlyVGVhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBhaXJUZWFJbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2Fpci10ZWEucG5nJztcclxuXHJcbiAgICBjb25zdCBtZXRhbFRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbWV0YWxUZWEuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2JsYWNrLXRlYS5qcGcnO1xyXG5cclxuICAgIGNvbnN0IGdpbmdlclRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ2luZ2VyVGVhLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9naW5nZXItdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgZ2luc2VuZ1RlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ2luc2VuZ1RlYS5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvZ2luc2VuZy10ZWEuanBnJztcclxuXHJcbiAgICBjb25zdCBncmVlblRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ3JlZW5UZWEuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2dyZWVuLXRlYS5wbmcnO1xyXG5cclxuICAgIGNvbnN0IGphc21pbmVUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGphc21pbmVUZWEuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2phc21pbmUtdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgYmVuZGVyVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBiZW5kZXJUZWEuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL29vbG9uZy10ZWEuanBnJztcclxuXHJcbiAgICBjb25zdCBseWNoZWVUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGx5Y2hlZVRlYS5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvbHljaGVlLnBuZyc7XHJcblxyXG4gICAgY29uc3QgdGFwaW9jYVRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgdGFwaW9jYVRlYS5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvdGFwaW9jYS10ZWEucG5nJztcclxuXHJcbiAgICBjb25zdCB3aGl0ZVRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgd2hpdGVUZWEuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL3doaXRlLXRlYS5qcGcnO1xyXG5cclxuICAgIGNvbnN0IHNwaWNlVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzcGljZVRlYS5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvc3BpY2UtdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgcmVkVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICByZWRUZWEuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL3JlZC10ZWEucG5nJztcclxuXHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdBaXIgTm9tYWQgU3R5bGUgVGVhJyxcclxuICAgICAgICAgICAgJ0FpciBOb21hZHMgYXJlIGtub3duIHRvIGhhdmUgdGhlaXIgb3duIHN0eWxlIG9mIHRlYSwgd2hpY2ggaW5jbHVkZXMgdGhlIGFkZGl0aW9uIG9mIGZsb3VyLCBidXR0ZXIgYW5kL29yIG1pbGsuJyxcclxuICAgICAgICAgICAgJzQgc2lsdmVyJyxcclxuICAgICAgICAgICAgYWlyVGVhSW1nXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ01ldGFsIEJyZXcnLFxyXG4gICAgICAgICAgICAnVGhpcyBpcyBhIHN0cm9uZyBCbGFjayBUZWEuIE1hZGUgd2l0aCB3aXRoZXJlZCBsZWF2ZXMsIGl0IHBhY2tzIGEgcHVuY2ggYW5kIGlzIGZ1ZWwgZm9yIHRoZSB3aG9sZSBkYXkuJyxcclxuICAgICAgICAgICAgJzIgc2lsdmVyJyxcclxuICAgICAgICAgICAgbWV0YWxUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnR2luZ2VyIFRlYScsXHJcbiAgICAgICAgICAgICdBIGhlcmJhbCBjb25jb2N0aW9uIG1hZGUgZnJvbSBnaW5nZXIgcm9vdHMgYW5kIGNhbiBoZWxwIGluIGhlYWxpbmcgeW91ciBpbGxuZXNzLicsXHJcbiAgICAgICAgICAgICcyIHNpbHZlcicsXHJcbiAgICAgICAgICAgIGdpbmdlclRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdHaW5zZW5nIFRlYScsXHJcbiAgICAgICAgICAgICcqQW4gSXJvaCBmYXZvcml0ZSogTWFkZSB3aXRoIGZyZXNoIGdpbnNlbmcgcm9vdHMuIFRoZSBpbmZ1c2lvbiBpcyBpbnRlbnNlIHlldCBkZWxpY2F0ZSBhbmQgdGhlIGdpbnNlbmcgZmxhdm9yIGdyb3dzIHN0cm9uZ2VyIGFzIGl0IHNlZXBzLicsXHJcbiAgICAgICAgICAgICczIHNpbHZlcicsXHJcbiAgICAgICAgICAgIGdpbnNlbmdUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnR3JlZW4gVGVhJyxcclxuICAgICAgICAgICAgJypBbiBFYXJ0aCBLaW5nZG9tIENsYXNzaWMqIFRoZSBsZWF2ZXMgaGF2ZSBhIHJlZmluZWQgc2hhcGUgYW5kIHNvb3RoaW5nIHRleHR1cmUsIGJlaW5nIHN1YnRsZSBpbiBpdHMgdGFzdGVzIGR1ZSB0byBhIGZhc3RlciBicmV3aW5nIHRpbWUgb24gbG93ZXIgaGVhdC4nLFxyXG4gICAgICAgICAgICAnMyBzaWx2ZXInLFxyXG4gICAgICAgICAgICBncmVlblRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdKYXNtaW5lIFRlYScsXHJcbiAgICAgICAgICAgICcqQW4gSXJvaCBmYXZvcml0ZSogQSBwZXJmZWN0IGJhbGFuY2Ugb2YgZmxhdm9ycy4gRGlmZmVyZW50IGV4cHJlc3Npb25zIG9mIGZyYWdyYW50IGphc21pbmUgZmxvd2VycyBhcmUgYnJvdWdodCB0b2dldGhlciB3aXRoIGluZnVzZWQgcm9sbGVkIGdyZWVuIHRlYSBsZWF2ZXMgYW5kIGEgaGludCBvZiBnaW5nZXIuJyxcclxuICAgICAgICAgICAgJzUgc2lsdmVyJyxcclxuICAgICAgICAgICAgamFzbWluZVRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdCZW5kZXIgVGVhJyxcclxuICAgICAgICAgICAgJ1RoaXMgT29sb25nIHRlYSBpcyBhIHRyYWRpdGlvbmFsLCBwYXJ0aWFsbHkgb3hpZGl6ZWQgdGVhIHdoaWNoIGdyb3dzIGF0b3AgdGhlIG1vdW50YWlucyBvZiB0aGUgc291dGhlcm4gaXNsYW5kcyBhbmQgaXRzIGZsYXZvciBpcyBpbmZsdWVuY2VkIGJ5IHRoZSByZWdpb25cXCdzIGluZGVwZW5kZW50IHNwaXJpdCBhbmQgdGhlIG15c3RlcmlvdXMgZm9nIGNyZWF0ZWQgYnkgd2F0ZXIgYW5kIGFpci4nLFxyXG4gICAgICAgICAgICAnNCBzaWx2ZXInLFxyXG4gICAgICAgICAgICBiZW5kZXJUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnTHljaGVlIEp1aWNlL1RlYScsXHJcbiAgICAgICAgICAgICcqQW4gRWFydGggS2luZ2RvbSBDbGFzc2ljKiBBIHZlcnkgcG9wdWxhciBkcmluayBpbiB0aGUgc3VtbWVyLiBPZmZlcmVkIGFzIGEgdGVhIG9yIGp1aWNlLiBNYWRlIGZyb20gbHljaGVlIG51dHMuJyxcclxuICAgICAgICAgICAgJzMgc2lsdmVyJyxcclxuICAgICAgICAgICAgbHljaGVlVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ1RhcGlvY2EgVGVhJyxcclxuICAgICAgICAgICAgJypPbmx5IGF0IEphc21pbmUgRHJhZ29uKiBBIHZlcnkgcG9wdWxhciBkcmluayBpbnZlbnRlZCBieSBJcm9oLiBNYWRlIGJ5IHN0ZXdpbmcgdGFwaW9jYSBiYWxscyB1bnRpbCB0aGV5IGFyZSBzb2Z0IGFuZCB0ZW5kZXIgYW5kIHRoZSB0YXBpb2NhIGlzIHN1YnNlcXVlbnRseSBhZGRlZCB0byBhbnkgdGVhIG9mIHlvdXIgY2hvb3NpbmcsIGFsb25nIHdpdGggYSBzbWFsbCBhbW91bnQgb2YgbWlsay4nLFxyXG4gICAgICAgICAgICAnNSBzaWx2ZXInLFxyXG4gICAgICAgICAgICB0YXBpb2NhVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ1doaXRlIExvdHVzIFRpbGUgVGVhJyxcclxuICAgICAgICAgICAgJ1RoaXMgbW9zdCBkZWxpY2F0ZSB3aGl0ZSB0ZWEgaG9sZHMgYSBjb21wbGV4IHVuZGVyY3VycmVudCBvZiBpbnRyaWd1aW5nIHRhc3RlcyBhbmQgc3RyZW5ndGggdW5kZXIgaXRzIG5hdHVyYWwgbGF5ZXJzIG9mIHN3ZWV0bmVzcy4nLFxyXG4gICAgICAgICAgICAnNCBzaWx2ZXInLFxyXG4gICAgICAgICAgICB3aGl0ZVRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdTcGljZWQgVGVhJyxcclxuICAgICAgICAgICAgJ0NvbW1vbiB0ZWEgb2YgdGhlIEZpcmUgS2luZ2RvbS4gVGhpcyB3YXJtIHRlYSBwYWNrcyBhIGNpbm5hbW9uIGtpY2suJyxcclxuICAgICAgICAgICAgJzMgc2lsdmVyJyxcclxuICAgICAgICAgICAgc3BpY2VUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnUmVkLWJsb29kZWQgTmVwaGV3JyxcclxuICAgICAgICAgICAgJ1RoaXMgdGVhIGlzIGFtYmVyIGluIGNvbG9yLCBncmFzc3kgaW4gdGFzdGUsIGFuZCB2ZXJ5IGJpdHRlci4gVGhpcyBibG9uZCwgY29tcGxleCwgYW5kIGNvbmZ1c2luZyBibGVuZCByZXNlbWJsZXMgSXJvaFxcJ3MgbmVwaGV3IFp1a28uIFRyeSBpZiB5b3UgZGFyZS4nLFxyXG4gICAgICAgICAgICAnMiBzaWx2ZXInLFxyXG4gICAgICAgICAgICByZWRUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTWVudUdyaWRJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1nKSB7XHJcbiAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtJyk7XHJcblxyXG4gICAgY29uc3QgdGVhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0ZWFOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCB0ZWFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0ZWFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IHRlYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIHRlYVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gICAgY29uc3QgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaWNlRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaWNlLWRpdicpO1xyXG5cclxuICAgIGNvbnN0IGNvaW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvaW5JbWcuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2NoaW5lc2UtY29pbi5wbmcnO1xyXG5cclxuICAgIHByaWNlRGl2LmFwcGVuZENoaWxkKHRlYVByaWNlKTtcclxuICAgIHByaWNlRGl2LmFwcGVuZENoaWxkKGNvaW5JbWcpO1xyXG5cclxuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZCh0ZWFOYW1lKTtcclxuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKHRlYURlc2NyaXB0aW9uKTtcclxuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKHByaWNlRGl2KTtcclxuXHJcbiAgICByZXR1cm4gZ3JpZEl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZHluYW1pY0JvZHkuYXBwZW5kQ2hpbGQobWFrZU1lbnUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVCb2R5KCkge1xyXG4gICAgLy9Ib21lIG5hdlxyXG4gICAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaG9tZScpO1xyXG4gICAgaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU5hdihob21lTmF2KTtcclxuICAgICAgICAgICAgbG9hZEhvbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL01lbnUgbmF2XHJcbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tZW51Jyk7XHJcbiAgICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlTmF2KG1lbnVOYXYpO1xyXG4gICAgICAgICAgICBsb2FkTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vQWJvdXQgbmF2XHJcbiAgICBjb25zdCBhYm91dE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYWJvdXQnKTtcclxuICAgIGFib3V0TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlTmF2KGFib3V0TmF2KTtcclxuICAgICAgICAgICAgbG9hZEFib3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Ib21lIG5hdlxyXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY29udGFjdCcpO1xyXG4gICAgY29udGFjdE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU5hdihjb250YWN0TmF2KTtcclxuICAgICAgICAgICAgbG9hZENvbnRhY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlTmF2KG5hdk8pIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcclxuXHJcbiAgICBuYXZMaXN0LmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgICAgIGlmIChuYXYgIT09IG5hdk8pIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXYuc3R5bGUuYm9yZGVyQm90dG9tID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hdk8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBuYXZPLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcycHggc29saWQgZ3JlZW55ZWxsb3cnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2FkRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnQ29weXJpZ2h0IMKpIElyb2ggMjAyMicpKTtcclxuXHJcbiAgICBjb25zdCBkeW5hbWljQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkeW5hbWljLWJvZHknKTtcclxuICAgIGR5bmFtaWNCb2R5LmFmdGVyKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRpYWxpemVXZWJzaXRlQm9keSgpIHtcclxuXHJcbiAgICBzZXRBY3RpdmVOYXYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1ob21lJykpO1xyXG4gICAgY3JlYXRlTG9hZEZvb3RlcigpO1xyXG4gICAgbG9hZEhvbWUoKTtcclxuICAgIGluaXRpYWxpemVCb2R5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGlhbGl6ZVdlYnNpdGVCb2R5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGludGlhbGl6ZVdlYnNpdGVCb2R5IGZyb20gXCIuL3dlYnNpdGVcIjtcclxuXHJcbmludGlhbGl6ZVdlYnNpdGVCb2R5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9