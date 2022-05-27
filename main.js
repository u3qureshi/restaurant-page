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
    irohImg.src = '../src/images/iroh-smiling.jpg';
    irohImg.alt = 'Happy Iroh';

    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'WHO WE ARE';

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
    shopImg.src = '../src/images/jasmine-dragon-front.png';
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
    airTeaImg.src = '../src/images/air-tea.png';

    const metalTea = document.createElement('img');
    metalTea.src = '../src/images/black-tea.jpg';

    const gingerTea = document.createElement('img');
    gingerTea.src = '../src/images/ginger-tea.png';

    const ginsengTea = document.createElement('img');
    ginsengTea.src = '../src/images/ginseng-tea.jpg';

    const greenTea = document.createElement('img');
    greenTea.src = '../src/images/green-tea.png';

    const jasmineTea = document.createElement('img');
    jasmineTea.src = '../src/images/jasmine-tea.png';

    const benderTea = document.createElement('img');
    benderTea.src = '../src/images/oolong-tea.jpg';

    const lycheeTea = document.createElement('img');
    lycheeTea.src = '../src/images/lychee.png';

    const tapiocaTea = document.createElement('img');
    tapiocaTea.src = '../src/images/tapioca-tea.png';

    const whiteTea = document.createElement('img');
    whiteTea.src = '../src/images/white-tea.jpg';

    const spiceTea = document.createElement('img');
    spiceTea.src = '../src/images/spice-tea.png';

    const redTea = document.createElement('img');
    redTea.src = '../src/images/red-tea.png';

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
    coinImg.src = '../src/images/chinese-coin.png';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUN4Q3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNuRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDakN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMTztBQUNBO0FBQ0U7QUFDSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7VUMxRm5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7QUFDN0M7QUFDQSxvREFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlQWJvdXQoKSB7XHJcbiAgICBjb25zdCBhYm91dFBhZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2UxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UxJyk7XHJcblxyXG4gICAgY29uc3QgaXJvaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaXJvaEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9pcm9oLXNtaWxpbmcuanBnJztcclxuICAgIGlyb2hJbWcuYWx0ID0gJ0hhcHB5IElyb2gnO1xyXG5cclxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWJvdXRUaXRsZS50ZXh0Q29udGVudCA9ICdXSE8gV0UgQVJFJztcclxuXHJcbiAgICBhYm91dFBhZ2UxLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xyXG4gICAgYWJvdXRQYWdlMS5hcHBlbmRDaGlsZChpcm9oSW1nKTtcclxuXHJcbiAgICBjb25zdCBhYm91dFBhZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2UyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UyJyk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBhYm91dFN1YnRpdGxlLnRleHRDb250ZW50ID0gJ1wiTGlmZSBoYXBwZW5zIHdoZXJldmVyIHlvdSBhcmUsIHdoZXRoZXIgeW91IG1ha2UgaXQgb3Igbm90LlwiJztcclxuXHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgYWJvdXRUZXh0LnRleHRDb250ZW50ID0gJ1RlYSBpcyBMaXF1aWQgV2lzZG9tLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJdXN0byBpbiBlYXF1ZSB2ZWwgYXNzdW1lbmRhLCBmYWNpbGlzIGlwc2FtLiBJbmNpZHVudCByZWN1c2FuZGFlIHF1aWJ1c2RhbSBhYiwgYWQgcXVvZCBzaW50IGFjY3VzYW11cy4gQ29ycG9yaXMgYWNjdXNhbXVzIHJlcGVsbGF0IGVycm9yIGFuaW1pIG5pc2kgaXBzYW0gdmVyaXRhdGlzIHByYWVzZW50aXVtIGluIHRlbXBvcmUgbmFtIHJlcGVsbGVuZHVzIGlwc3VtLCBzdXNjaXBpdCBwZXJmZXJlbmRpcyBmdWdpYXQhIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvcnBvcmlzIHF1b3Mgdm9sdXB0YXMgaWxsdW0gdGVuZXR1ciBjdWxwYSB0ZW1wb3JlIGZhY2lsaXMgYXQgZGViaXRpcyBkb2xvcmlidXMsIGR1Y2ltdXMgbGF1ZGFudGl1bSBwcmFlc2VudGl1bSBldCBhdXQgcmVtIGVhIGxhYm9yZSBtYXhpbWUgbW9sZXN0aWFlIGlwc3VtIHJlcGVsbGVuZHVzIHVsbGFtISBTaW1pbGlxdWUsIHV0IHF1by4nO1xyXG5cclxuICAgIGFib3V0UGFnZTIuYXBwZW5kQ2hpbGQoYWJvdXRTdWJ0aXRsZSk7XHJcbiAgICBhYm91dFBhZ2UyLmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRQYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFnZS1jb250YWluZXInKTtcclxuICAgIGFib3V0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhZ2UxKTtcclxuICAgIGFib3V0UGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFBhZ2UyKTtcclxuXHJcbiAgICByZXR1cm4gYWJvdXRQYWdlQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgICBjb25zdCBkeW5hbWljQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljLWJvZHknKTtcclxuICAgIGR5bmFtaWNCb2R5LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBkeW5hbWljQm9keS5hcHBlbmRDaGlsZChtYWtlQWJvdXQoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDsiLCJmdW5jdGlvbiBtYWtlQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2MS5jbGFzc0xpc3QuYWRkKCdjb250YWN0MScpO1xyXG4gICAgY29udGFjdERpdjEuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ncmlkLWl0ZW0nKTtcclxuICAgIGNvbnN0IHRpdGxlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlT25lLnRleHRDb250ZW50ID0gJ0FkZHJlc3Mg8J+PoCc7XHJcbiAgICBjb250YWN0RGl2MS5hcHBlbmRDaGlsZCh0aXRsZU9uZSk7XHJcbiAgICBjb250YWN0RGl2MS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCc5NzEzIEtpbmcgU3RyZWV0JykpO1xyXG4gICAgY29udGFjdERpdjEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnVXBwZXIgUmluZyBQbGF6YScpKTtcclxuICAgIGNvbnRhY3REaXYxLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ0JhIFNpbmcgU2UnKSk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdERpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QyJyk7XHJcbiAgICBjb250YWN0RGl2Mi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWdyaWQtaXRlbScpO1xyXG4gICAgY29uc3QgdGl0bGVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGVUd28udGV4dENvbnRlbnQgPSAnSG91cnMg8J+VmCc7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZCh0aXRsZVR3byk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdNb25kYXk6IDA5OjAwIC0gMjI6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdUdWVzZGF5OiAwOTowMCAtIDIyOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnV2VkbmVzZGF5OiAwOTowMCAtIDIyOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnVGh1cnNkYXk6IDA5OjAwIC0gMjI6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdGcmlkYXk6IDA5OjAwIC0gMjM6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdTYXR1cmRheTogMDk6MDAgLSAyMzowMCcpKTtcclxuICAgIGNvbnRhY3REaXYyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ1N1bmRheTogMDk6MDAgLSAyMjowMCcpKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFjdERpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QzJyk7XHJcbiAgICBjb250YWN0RGl2My5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWdyaWQtaXRlbScpO1xyXG4gICAgY29uc3Qgc2hvcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc2hvcEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9qYXNtaW5lLWRyYWdvbi1mcm9udC5wbmcnO1xyXG4gICAgc2hvcEltZy5hbHQgPSAnU2hvcCBGcm9udCc7XHJcbiAgICBjb250YWN0RGl2My5hcHBlbmRDaGlsZChzaG9wSW1nKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0RGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdERpdjQuY2xhc3NMaXN0LmFkZCgnY29udGFjdDQnKTtcclxuICAgIGNvbnRhY3REaXY0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZ3JpZC1pdGVtJyk7XHJcbiAgICBjb25zdCB0aXRsZUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGVGb3VyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMg8J+RpSc7XHJcbiAgICBjb250YWN0RGl2NC5hcHBlbmRDaGlsZCh0aXRsZUZvdXIpO1xyXG4gICAgY29udGFjdERpdjQuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgn8J+TniAoNjQ3KTgxOC0xOTA5JykpO1xyXG4gICAgY29udGFjdERpdjQuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgn8J+TpyB1bmNsZV9pcm9oQGhvdG1hbi5jb20nKSk7XHJcbiAgICBjb250YWN0RGl2NC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCfimIEgRWxlbWVudGdyYW06IEBqYXNtaW5lX2RyYWdvbicpKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0R3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZ3JpZCcpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjEpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjIpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjMpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0R3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBoNC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGg0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtYm9keScpO1xyXG4gICAgZHluYW1pY0JvZHkudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGR5bmFtaWNCb2R5LmFwcGVuZENoaWxkKG1ha2VDb250YWN0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhbnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbXBhbnlJbWcuc3JjID0gJy4uL3NyYy9pbWFnZXMvamFzbWluZS1kcmFnb24tbG9nby5qcGcnO1xyXG4gICAgY29tcGFueUltZy5hbHQgPSAnSmFzbWluZSBEcmFnb24gbG9nbyc7XHJcblxyXG4gICAgY29uc3QgY29tcGFueUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tcGFueUltZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjb21wYW55LWltZycpO1xyXG4gICAgY29tcGFueUltZ0Rpdi5hcHBlbmRDaGlsZChjb21wYW55SW1nKTtcclxuXHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdCZXN0IHRlYSBpbiBCYSBTaW5nIFNlIScpKTtcclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNvbXBhbnlJbWdEaXYpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnU2hhcmluZyB0ZWEgd2l0aCBhIGZhc2NpbmF0aW5nIHN0cmFuZ2VyIGlzIG9uZSBvZiBsaWZlXFwncyB0cnVlIGRlbGlnaHRzIOKYlScpKTtcclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ1NvIGNvbWUgdmlzaXQgdXMgaW4gdGhlIFVwcGVyIFJpbmcgb2YgdGhlIENpdHkgb3Igb3JkZXIgb25saW5lIScpKTtcclxuXHJcbiAgICByZXR1cm4gaG9tZVBhZ2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtYm9keScpO1xyXG4gICAgZHluYW1pY0JvZHkudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGR5bmFtaWNCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIG1ha2VNZW51KCkge1xyXG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JpZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyaWQtY29udGFpbmVyJyk7XHJcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8xMiBpbWFnZXNcclxuICAgIGNvbnN0IGFpclRlYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYWlyVGVhSW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2Fpci10ZWEucG5nJztcclxuXHJcbiAgICBjb25zdCBtZXRhbFRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbWV0YWxUZWEuc3JjID0gJy4uL3NyYy9pbWFnZXMvYmxhY2stdGVhLmpwZyc7XHJcblxyXG4gICAgY29uc3QgZ2luZ2VyVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBnaW5nZXJUZWEuc3JjID0gJy4uL3NyYy9pbWFnZXMvZ2luZ2VyLXRlYS5wbmcnO1xyXG5cclxuICAgIGNvbnN0IGdpbnNlbmdUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdpbnNlbmdUZWEuc3JjID0gJy4uL3NyYy9pbWFnZXMvZ2luc2VuZy10ZWEuanBnJztcclxuXHJcbiAgICBjb25zdCBncmVlblRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ3JlZW5UZWEuc3JjID0gJy4uL3NyYy9pbWFnZXMvZ3JlZW4tdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgamFzbWluZVRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgamFzbWluZVRlYS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9qYXNtaW5lLXRlYS5wbmcnO1xyXG5cclxuICAgIGNvbnN0IGJlbmRlclRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYmVuZGVyVGVhLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL29vbG9uZy10ZWEuanBnJztcclxuXHJcbiAgICBjb25zdCBseWNoZWVUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGx5Y2hlZVRlYS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9seWNoZWUucG5nJztcclxuXHJcbiAgICBjb25zdCB0YXBpb2NhVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0YXBpb2NhVGVhLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3RhcGlvY2EtdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3Qgd2hpdGVUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHdoaXRlVGVhLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3doaXRlLXRlYS5qcGcnO1xyXG5cclxuICAgIGNvbnN0IHNwaWNlVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzcGljZVRlYS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zcGljZS10ZWEucG5nJztcclxuXHJcbiAgICBjb25zdCByZWRUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlZFRlYS5zcmMgPSAnLi4vc3JjL2ltYWdlcy9yZWQtdGVhLnBuZyc7XHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnQWlyIE5vbWFkIFN0eWxlIFRlYScsXHJcbiAgICAgICAgICAgICdBaXIgTm9tYWRzIGFyZSBrbm93biB0byBoYXZlIHRoZWlyIG93biBzdHlsZSBvZiB0ZWEsIHdoaWNoIGluY2x1ZGVzIHRoZSBhZGRpdGlvbiBvZiBmbG91ciwgYnV0dGVyIGFuZC9vciBtaWxrLicsXHJcbiAgICAgICAgICAgICc0IHNpbHZlcicsXHJcbiAgICAgICAgICAgIGFpclRlYUltZ1xyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdNZXRhbCBCcmV3JyxcclxuICAgICAgICAgICAgJ1RoaXMgaXMgYSBzdHJvbmcgQmxhY2sgVGVhLiBNYWRlIHdpdGggd2l0aGVyZWQgbGVhdmVzLCBpdCBwYWNrcyBhIHB1bmNoIGFuZCBpcyBmdWVsIGZvciB0aGUgd2hvbGUgZGF5LicsXHJcbiAgICAgICAgICAgICcyIHNpbHZlcicsXHJcbiAgICAgICAgICAgIG1ldGFsVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ0dpbmdlciBUZWEnLFxyXG4gICAgICAgICAgICAnQSBoZXJiYWwgY29uY29jdGlvbiBtYWRlIGZyb20gZ2luZ2VyIHJvb3RzIGFuZCBjYW4gaGVscCBpbiBoZWFsaW5nIHlvdXIgaWxsbmVzcy4nLFxyXG4gICAgICAgICAgICAnMiBzaWx2ZXInLFxyXG4gICAgICAgICAgICBnaW5nZXJUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnR2luc2VuZyBUZWEnLFxyXG4gICAgICAgICAgICAnKkFuIElyb2ggZmF2b3JpdGUqIE1hZGUgd2l0aCBmcmVzaCBnaW5zZW5nIHJvb3RzLiBUaGUgaW5mdXNpb24gaXMgaW50ZW5zZSB5ZXQgZGVsaWNhdGUgYW5kIHRoZSBnaW5zZW5nIGZsYXZvciBncm93cyBzdHJvbmdlciBhcyBpdCBzZWVwcy4nLFxyXG4gICAgICAgICAgICAnMyBzaWx2ZXInLFxyXG4gICAgICAgICAgICBnaW5zZW5nVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ0dyZWVuIFRlYScsXHJcbiAgICAgICAgICAgICcqQW4gRWFydGggS2luZ2RvbSBDbGFzc2ljKiBUaGUgbGVhdmVzIGhhdmUgYSByZWZpbmVkIHNoYXBlIGFuZCBzb290aGluZyB0ZXh0dXJlLCBiZWluZyBzdWJ0bGUgaW4gaXRzIHRhc3RlcyBkdWUgdG8gYSBmYXN0ZXIgYnJld2luZyB0aW1lIG9uIGxvd2VyIGhlYXQuJyxcclxuICAgICAgICAgICAgJzMgc2lsdmVyJyxcclxuICAgICAgICAgICAgZ3JlZW5UZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnSmFzbWluZSBUZWEnLFxyXG4gICAgICAgICAgICAnKkFuIElyb2ggZmF2b3JpdGUqIEEgcGVyZmVjdCBiYWxhbmNlIG9mIGZsYXZvcnMuIERpZmZlcmVudCBleHByZXNzaW9ucyBvZiBmcmFncmFudCBqYXNtaW5lIGZsb3dlcnMgYXJlIGJyb3VnaHQgdG9nZXRoZXIgd2l0aCBpbmZ1c2VkIHJvbGxlZCBncmVlbiB0ZWEgbGVhdmVzIGFuZCBhIGhpbnQgb2YgZ2luZ2VyLicsXHJcbiAgICAgICAgICAgICc1IHNpbHZlcicsXHJcbiAgICAgICAgICAgIGphc21pbmVUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnQmVuZGVyIFRlYScsXHJcbiAgICAgICAgICAgICdUaGlzIE9vbG9uZyB0ZWEgaXMgYSB0cmFkaXRpb25hbCwgcGFydGlhbGx5IG94aWRpemVkIHRlYSB3aGljaCBncm93cyBhdG9wIHRoZSBtb3VudGFpbnMgb2YgdGhlIHNvdXRoZXJuIGlzbGFuZHMgYW5kIGl0cyBmbGF2b3IgaXMgaW5mbHVlbmNlZCBieSB0aGUgcmVnaW9uXFwncyBpbmRlcGVuZGVudCBzcGlyaXQgYW5kIHRoZSBteXN0ZXJpb3VzIGZvZyBjcmVhdGVkIGJ5IHdhdGVyIGFuZCBhaXIuJyxcclxuICAgICAgICAgICAgJzQgc2lsdmVyJyxcclxuICAgICAgICAgICAgYmVuZGVyVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ0x5Y2hlZSBKdWljZS9UZWEnLFxyXG4gICAgICAgICAgICAnKkFuIEVhcnRoIEtpbmdkb20gQ2xhc3NpYyogQSB2ZXJ5IHBvcHVsYXIgZHJpbmsgaW4gdGhlIHN1bW1lci4gT2ZmZXJlZCBhcyBhIHRlYSBvciBqdWljZS4gTWFkZSBmcm9tIGx5Y2hlZSBudXRzLicsXHJcbiAgICAgICAgICAgICczIHNpbHZlcicsXHJcbiAgICAgICAgICAgIGx5Y2hlZVRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdUYXBpb2NhIFRlYScsXHJcbiAgICAgICAgICAgICcqT25seSBhdCBKYXNtaW5lIERyYWdvbiogQSB2ZXJ5IHBvcHVsYXIgZHJpbmsgaW52ZW50ZWQgYnkgSXJvaC4gTWFkZSBieSBzdGV3aW5nIHRhcGlvY2EgYmFsbHMgdW50aWwgdGhleSBhcmUgc29mdCBhbmQgdGVuZGVyIGFuZCB0aGUgdGFwaW9jYSBpcyBzdWJzZXF1ZW50bHkgYWRkZWQgdG8gYW55IHRlYSBvZiB5b3VyIGNob29zaW5nLCBhbG9uZyB3aXRoIGEgc21hbGwgYW1vdW50IG9mIG1pbGsuJyxcclxuICAgICAgICAgICAgJzUgc2lsdmVyJyxcclxuICAgICAgICAgICAgdGFwaW9jYVRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdXaGl0ZSBMb3R1cyBUaWxlIFRlYScsXHJcbiAgICAgICAgICAgICdUaGlzIG1vc3QgZGVsaWNhdGUgd2hpdGUgdGVhIGhvbGRzIGEgY29tcGxleCB1bmRlcmN1cnJlbnQgb2YgaW50cmlndWluZyB0YXN0ZXMgYW5kIHN0cmVuZ3RoIHVuZGVyIGl0cyBuYXR1cmFsIGxheWVycyBvZiBzd2VldG5lc3MuJyxcclxuICAgICAgICAgICAgJzQgc2lsdmVyJyxcclxuICAgICAgICAgICAgd2hpdGVUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnU3BpY2VkIFRlYScsXHJcbiAgICAgICAgICAgICdDb21tb24gdGVhIG9mIHRoZSBGaXJlIEtpbmdkb20uIFRoaXMgd2FybSB0ZWEgcGFja3MgYSBjaW5uYW1vbiBraWNrLicsXHJcbiAgICAgICAgICAgICczIHNpbHZlcicsXHJcbiAgICAgICAgICAgIHNwaWNlVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ1JlZC1ibG9vZGVkIE5lcGhldycsXHJcbiAgICAgICAgICAgICdUaGlzIHRlYSBpcyBhbWJlciBpbiBjb2xvciwgZ3Jhc3N5IGluIHRhc3RlLCBhbmQgdmVyeSBiaXR0ZXIuIFRoaXMgYmxvbmQsIGNvbXBsZXgsIGFuZCBjb25mdXNpbmcgYmxlbmQgcmVzZW1ibGVzIElyb2hcXCdzIG5lcGhldyBadWtvLiBUcnkgaWYgeW91IGRhcmUuJyxcclxuICAgICAgICAgICAgJzIgc2lsdmVyJyxcclxuICAgICAgICAgICAgcmVkVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZ3JpZENvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZU1lbnVHcmlkSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltZykge1xyXG4gICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXRlbScpO1xyXG5cclxuICAgIGNvbnN0IHRlYU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGVhTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgY29uc3QgdGVhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdGVhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCB0ZWFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICB0ZWFQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICAgIGNvbnN0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmljZURpdi5jbGFzc0xpc3QuYWRkKCdwcmljZS1kaXYnKTtcclxuXHJcbiAgICBjb25zdCBjb2luSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb2luSW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2NoaW5lc2UtY29pbi5wbmcnO1xyXG5cclxuICAgIHByaWNlRGl2LmFwcGVuZENoaWxkKHRlYVByaWNlKTtcclxuICAgIHByaWNlRGl2LmFwcGVuZENoaWxkKGNvaW5JbWcpO1xyXG5cclxuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZCh0ZWFOYW1lKTtcclxuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKHRlYURlc2NyaXB0aW9uKTtcclxuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKHByaWNlRGl2KTtcclxuXHJcbiAgICByZXR1cm4gZ3JpZEl0ZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZHluYW1pY0JvZHkuYXBwZW5kQ2hpbGQobWFrZU1lbnUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVCb2R5KCkge1xyXG4gICAgLy9Ib21lIG5hdlxyXG4gICAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaG9tZScpO1xyXG4gICAgaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU5hdihob21lTmF2KTtcclxuICAgICAgICAgICAgbG9hZEhvbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL01lbnUgbmF2XHJcbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tZW51Jyk7XHJcbiAgICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlTmF2KG1lbnVOYXYpO1xyXG4gICAgICAgICAgICBsb2FkTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vQWJvdXQgbmF2XHJcbiAgICBjb25zdCBhYm91dE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYWJvdXQnKTtcclxuICAgIGFib3V0TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlTmF2KGFib3V0TmF2KTtcclxuICAgICAgICAgICAgbG9hZEFib3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Ib21lIG5hdlxyXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY29udGFjdCcpO1xyXG4gICAgY29udGFjdE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU5hdihjb250YWN0TmF2KTtcclxuICAgICAgICAgICAgbG9hZENvbnRhY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlTmF2KG5hdk8pIHtcclxuICAgIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcclxuXHJcbiAgICBuYXZMaXN0LmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgICAgIGlmIChuYXYgIT09IG5hdk8pIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXYuc3R5bGUuYm9yZGVyQm90dG9tID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hdk8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBuYXZPLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcycHggc29saWQgZ3JlZW55ZWxsb3cnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2FkRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnQ29weXJpZ2h0IMKpIElyb2ggMjAyMicpKTtcclxuXHJcbiAgICBjb25zdCBkeW5hbWljQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkeW5hbWljLWJvZHknKTtcclxuICAgIGR5bmFtaWNCb2R5LmFmdGVyKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHQodGV4dCkge1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgIHJldHVybiBwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRpYWxpemVXZWJzaXRlQm9keSgpIHtcclxuXHJcbiAgICBzZXRBY3RpdmVOYXYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1ob21lJykpO1xyXG4gICAgY3JlYXRlTG9hZEZvb3RlcigpO1xyXG4gICAgbG9hZEhvbWUoKTtcclxuICAgIGluaXRpYWxpemVCb2R5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGlhbGl6ZVdlYnNpdGVCb2R5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGludGlhbGl6ZVdlYnNpdGVCb2R5IGZyb20gXCIuL3dlYnNpdGVcIjtcclxuXHJcbmludGlhbGl6ZVdlYnNpdGVCb2R5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9