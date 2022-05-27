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
    shopImg.src = 'images/jasmine-dragon-front.png';
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
    companyImg.src = 'images/jasmine-dragon-logo.jpg';
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
    airTeaImg.src = 'images/air-tea.png';

    const metalTea = document.createElement('img');
    metalTea.src = 'images/black-tea.jpg';

    const gingerTea = document.createElement('img');
    gingerTea.src = 'images/ginger-tea.png';

    const ginsengTea = document.createElement('img');
    ginsengTea.src = 'images/ginseng-tea.jpg';

    const greenTea = document.createElement('img');
    greenTea.src = 'images/green-tea.png';

    const jasmineTea = document.createElement('img');
    jasmineTea.src = 'images/jasmine-tea.png';

    const benderTea = document.createElement('img');
    benderTea.src = 'images/oolong-tea.jpg';

    const lycheeTea = document.createElement('img');
    lycheeTea.src = 'images/lychee.png';

    const tapiocaTea = document.createElement('img');
    tapiocaTea.src = 'images/tapioca-tea.png';

    const whiteTea = document.createElement('img');
    whiteTea.src = 'images/white-tea.jpg';

    const spiceTea = document.createElement('img');
    spiceTea.src = 'images/spice-tea.png';

    const redTea = document.createElement('img');
    redTea.src = 'images/red-tea.png';

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
    coinImg.src = 'images/chinese-coin.png';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUN4Q3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNuRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDakN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMTztBQUNBO0FBQ0U7QUFDSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFTO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7VUMxRm5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7QUFDN0M7QUFDQSxvREFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc21pbmUtZHJhZ29uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlQWJvdXQoKSB7XHJcbiAgICBjb25zdCBhYm91dFBhZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFBhZ2UxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UxJyk7XHJcblxyXG4gICAgY29uc3QgaXJvaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaXJvaEltZy5zcmMgPSAnaW1hZ2VzL2lyb2gtc21pbGluZy5qcGcnO1xyXG4gICAgaXJvaEltZy5hbHQgPSAnSGFwcHkgSXJvaCc7XHJcblxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50ID0gJ1dITyBXRSBBUkUg8J+Muic7XHJcblxyXG4gICAgYWJvdXRQYWdlMS5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcclxuICAgIGFib3V0UGFnZTEuYXBwZW5kQ2hpbGQoaXJvaEltZyk7XHJcblxyXG4gICAgY29uc3QgYWJvdXRQYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRQYWdlMi5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYWdlMicpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0U3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgYWJvdXRTdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdcIkxpZmUgaGFwcGVucyB3aGVyZXZlciB5b3UgYXJlLCB3aGV0aGVyIHlvdSBtYWtlIGl0IG9yIG5vdC5cIic7XHJcblxyXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdUZWEgaXMgTGlxdWlkIFdpc2RvbS4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSXVzdG8gaW4gZWFxdWUgdmVsIGFzc3VtZW5kYSwgZmFjaWxpcyBpcHNhbS4gSW5jaWR1bnQgcmVjdXNhbmRhZSBxdWlidXNkYW0gYWIsIGFkIHF1b2Qgc2ludCBhY2N1c2FtdXMuIENvcnBvcmlzIGFjY3VzYW11cyByZXBlbGxhdCBlcnJvciBhbmltaSBuaXNpIGlwc2FtIHZlcml0YXRpcyBwcmFlc2VudGl1bSBpbiB0ZW1wb3JlIG5hbSByZXBlbGxlbmR1cyBpcHN1bSwgc3VzY2lwaXQgcGVyZmVyZW5kaXMgZnVnaWF0ISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb3Jwb3JpcyBxdW9zIHZvbHVwdGFzIGlsbHVtIHRlbmV0dXIgY3VscGEgdGVtcG9yZSBmYWNpbGlzIGF0IGRlYml0aXMgZG9sb3JpYnVzLCBkdWNpbXVzIGxhdWRhbnRpdW0gcHJhZXNlbnRpdW0gZXQgYXV0IHJlbSBlYSBsYWJvcmUgbWF4aW1lIG1vbGVzdGlhZSBpcHN1bSByZXBlbGxlbmR1cyB1bGxhbSEgU2ltaWxpcXVlLCB1dCBxdW8uJztcclxuXHJcbiAgICBhYm91dFBhZ2UyLmFwcGVuZENoaWxkKGFib3V0U3VidGl0bGUpO1xyXG4gICAgYWJvdXRQYWdlMi5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0UGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRQYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UtY29udGFpbmVyJyk7XHJcbiAgICBhYm91dFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRQYWdlMSk7XHJcbiAgICBhYm91dFBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRQYWdlMik7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0UGFnZUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZHluYW1pY0JvZHkuYXBwZW5kQ2hpbGQobWFrZUFib3V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7IiwiZnVuY3Rpb24gbWFrZUNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250YWN0RGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdERpdjEuY2xhc3NMaXN0LmFkZCgnY29udGFjdDEnKTtcclxuICAgIGNvbnRhY3REaXYxLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZ3JpZC1pdGVtJyk7XHJcbiAgICBjb25zdCB0aXRsZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZU9uZS50ZXh0Q29udGVudCA9ICdBZGRyZXNzIPCfj6AnO1xyXG4gICAgY29udGFjdERpdjEuYXBwZW5kQ2hpbGQodGl0bGVPbmUpO1xyXG4gICAgY29udGFjdERpdjEuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnOTcxMyBLaW5nIFN0cmVldCcpKTtcclxuICAgIGNvbnRhY3REaXYxLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ1VwcGVyIFJpbmcgUGxhemEnKSk7XHJcbiAgICBjb250YWN0RGl2MS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdCYSBTaW5nIFNlJykpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3REaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2Mi5jbGFzc0xpc3QuYWRkKCdjb250YWN0MicpO1xyXG4gICAgY29udGFjdERpdjIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ncmlkLWl0ZW0nKTtcclxuICAgIGNvbnN0IHRpdGxlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlVHdvLnRleHRDb250ZW50ID0gJ0hvdXJzIPCflZgnO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQodGl0bGVUd28pO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnTW9uZGF5OiAwOTowMCAtIDIyOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnVHVlc2RheTogMDk6MDAgLSAyMjowMCcpKTtcclxuICAgIGNvbnRhY3REaXYyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ1dlZG5lc2RheTogMDk6MDAgLSAyMjowMCcpKTtcclxuICAgIGNvbnRhY3REaXYyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ1RodXJzZGF5OiAwOTowMCAtIDIyOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnRnJpZGF5OiAwOTowMCAtIDIzOjAwJykpO1xyXG4gICAgY29udGFjdERpdjIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnU2F0dXJkYXk6IDA5OjAwIC0gMjM6MDAnKSk7XHJcbiAgICBjb250YWN0RGl2Mi5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdTdW5kYXk6IDA5OjAwIC0gMjI6MDAnKSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3REaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2My5jbGFzc0xpc3QuYWRkKCdjb250YWN0MycpO1xyXG4gICAgY29udGFjdERpdjMuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ncmlkLWl0ZW0nKTtcclxuICAgIGNvbnN0IHNob3BJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHNob3BJbWcuc3JjID0gJ2ltYWdlcy9qYXNtaW5lLWRyYWdvbi1mcm9udC5wbmcnO1xyXG4gICAgc2hvcEltZy5hbHQgPSAnU2hvcCBGcm9udCc7XHJcbiAgICBjb250YWN0RGl2My5hcHBlbmRDaGlsZChzaG9wSW1nKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0RGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdERpdjQuY2xhc3NMaXN0LmFkZCgnY29udGFjdDQnKTtcclxuICAgIGNvbnRhY3REaXY0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZ3JpZC1pdGVtJyk7XHJcbiAgICBjb25zdCB0aXRsZUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGVGb3VyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMg8J+RpSc7XHJcbiAgICBjb250YWN0RGl2NC5hcHBlbmRDaGlsZCh0aXRsZUZvdXIpO1xyXG4gICAgY29udGFjdERpdjQuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgn8J+TniAoNjQ3KTgxOC0xOTA5JykpO1xyXG4gICAgY29udGFjdERpdjQuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgn8J+TpyB1bmNsZV9pcm9oQGhvdG1hbi5jb20nKSk7XHJcbiAgICBjb250YWN0RGl2NC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCfimIEgRWxlbWVudGdyYW06IEBqYXNtaW5lX2RyYWdvbicpKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0R3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZ3JpZCcpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjEpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjIpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjMpO1xyXG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdjQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0R3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBoNC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIGg0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtYm9keScpO1xyXG4gICAgZHluYW1pY0JvZHkudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGR5bmFtaWNCb2R5LmFwcGVuZENoaWxkKG1ha2VDb250YWN0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhbnlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbXBhbnlJbWcuc3JjID0gJ2ltYWdlcy9qYXNtaW5lLWRyYWdvbi1sb2dvLmpwZyc7XHJcbiAgICBjb21wYW55SW1nLmFsdCA9ICdKYXNtaW5lIERyYWdvbiBsb2dvJztcclxuXHJcbiAgICBjb25zdCBjb21wYW55SW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wYW55SW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBhbnktaW1nJyk7XHJcbiAgICBjb21wYW55SW1nRGl2LmFwcGVuZENoaWxkKGNvbXBhbnlJbWcpO1xyXG5cclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ0Jlc3QgdGVhIGluIEJhIFNpbmcgU2UhJykpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY29tcGFueUltZ0Rpdik7XHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdTaGFyaW5nIHRlYSB3aXRoIGEgZmFzY2luYXRpbmcgc3RyYW5nZXIgaXMgb25lIG9mIGxpZmVcXCdzIHRydWUgZGVsaWdodHMg4piVJykpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnU28gY29tZSB2aXNpdCB1cyBpbiB0aGUgVXBwZXIgUmluZyBvZiB0aGUgQ2l0eSBvciBvcmRlciBvbmxpbmUhJykpO1xyXG5cclxuICAgIHJldHVybiBob21lUGFnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZHluYW1pY0JvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gbWFrZU1lbnUoKSB7XHJcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmlkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JpZC1jb250YWluZXInKTtcclxuICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKTtcclxuXHJcbiAgICAvLzEyIGltYWdlc1xyXG4gICAgY29uc3QgYWlyVGVhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBhaXJUZWFJbWcuc3JjID0gJ2ltYWdlcy9haXItdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgbWV0YWxUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1ldGFsVGVhLnNyYyA9ICdpbWFnZXMvYmxhY2stdGVhLmpwZyc7XHJcblxyXG4gICAgY29uc3QgZ2luZ2VyVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBnaW5nZXJUZWEuc3JjID0gJ2ltYWdlcy9naW5nZXItdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgZ2luc2VuZ1RlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ2luc2VuZ1RlYS5zcmMgPSAnaW1hZ2VzL2dpbnNlbmctdGVhLmpwZyc7XHJcblxyXG4gICAgY29uc3QgZ3JlZW5UZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdyZWVuVGVhLnNyYyA9ICdpbWFnZXMvZ3JlZW4tdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgamFzbWluZVRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgamFzbWluZVRlYS5zcmMgPSAnaW1hZ2VzL2phc21pbmUtdGVhLnBuZyc7XHJcblxyXG4gICAgY29uc3QgYmVuZGVyVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBiZW5kZXJUZWEuc3JjID0gJ2ltYWdlcy9vb2xvbmctdGVhLmpwZyc7XHJcblxyXG4gICAgY29uc3QgbHljaGVlVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBseWNoZWVUZWEuc3JjID0gJ2ltYWdlcy9seWNoZWUucG5nJztcclxuXHJcbiAgICBjb25zdCB0YXBpb2NhVGVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0YXBpb2NhVGVhLnNyYyA9ICdpbWFnZXMvdGFwaW9jYS10ZWEucG5nJztcclxuXHJcbiAgICBjb25zdCB3aGl0ZVRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgd2hpdGVUZWEuc3JjID0gJ2ltYWdlcy93aGl0ZS10ZWEuanBnJztcclxuXHJcbiAgICBjb25zdCBzcGljZVRlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3BpY2VUZWEuc3JjID0gJ2ltYWdlcy9zcGljZS10ZWEucG5nJztcclxuXHJcbiAgICBjb25zdCByZWRUZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlZFRlYS5zcmMgPSAnaW1hZ2VzL3JlZC10ZWEucG5nJztcclxuXHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdBaXIgTm9tYWQgU3R5bGUgVGVhJyxcclxuICAgICAgICAgICAgJ0FpciBOb21hZHMgYXJlIGtub3duIHRvIGhhdmUgdGhlaXIgb3duIHN0eWxlIG9mIHRlYSwgd2hpY2ggaW5jbHVkZXMgdGhlIGFkZGl0aW9uIG9mIGZsb3VyLCBidXR0ZXIgYW5kL29yIG1pbGsuJyxcclxuICAgICAgICAgICAgJzQgc2lsdmVyJyxcclxuICAgICAgICAgICAgYWlyVGVhSW1nXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ01ldGFsIEJyZXcnLFxyXG4gICAgICAgICAgICAnVGhpcyBpcyBhIHN0cm9uZyBCbGFjayBUZWEuIE1hZGUgd2l0aCB3aXRoZXJlZCBsZWF2ZXMsIGl0IHBhY2tzIGEgcHVuY2ggYW5kIGlzIGZ1ZWwgZm9yIHRoZSB3aG9sZSBkYXkuJyxcclxuICAgICAgICAgICAgJzIgc2lsdmVyJyxcclxuICAgICAgICAgICAgbWV0YWxUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnR2luZ2VyIFRlYScsXHJcbiAgICAgICAgICAgICdBIGhlcmJhbCBjb25jb2N0aW9uIG1hZGUgZnJvbSBnaW5nZXIgcm9vdHMgYW5kIGNhbiBoZWxwIGluIGhlYWxpbmcgeW91ciBpbGxuZXNzLicsXHJcbiAgICAgICAgICAgICcyIHNpbHZlcicsXHJcbiAgICAgICAgICAgIGdpbmdlclRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdHaW5zZW5nIFRlYScsXHJcbiAgICAgICAgICAgICcqQW4gSXJvaCBmYXZvcml0ZSogTWFkZSB3aXRoIGZyZXNoIGdpbnNlbmcgcm9vdHMuIFRoZSBpbmZ1c2lvbiBpcyBpbnRlbnNlIHlldCBkZWxpY2F0ZSBhbmQgdGhlIGdpbnNlbmcgZmxhdm9yIGdyb3dzIHN0cm9uZ2VyIGFzIGl0IHNlZXBzLicsXHJcbiAgICAgICAgICAgICczIHNpbHZlcicsXHJcbiAgICAgICAgICAgIGdpbnNlbmdUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnR3JlZW4gVGVhJyxcclxuICAgICAgICAgICAgJypBbiBFYXJ0aCBLaW5nZG9tIENsYXNzaWMqIFRoZSBsZWF2ZXMgaGF2ZSBhIHJlZmluZWQgc2hhcGUgYW5kIHNvb3RoaW5nIHRleHR1cmUsIGJlaW5nIHN1YnRsZSBpbiBpdHMgdGFzdGVzIGR1ZSB0byBhIGZhc3RlciBicmV3aW5nIHRpbWUgb24gbG93ZXIgaGVhdC4nLFxyXG4gICAgICAgICAgICAnMyBzaWx2ZXInLFxyXG4gICAgICAgICAgICBncmVlblRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdKYXNtaW5lIFRlYScsXHJcbiAgICAgICAgICAgICcqQW4gSXJvaCBmYXZvcml0ZSogQSBwZXJmZWN0IGJhbGFuY2Ugb2YgZmxhdm9ycy4gRGlmZmVyZW50IGV4cHJlc3Npb25zIG9mIGZyYWdyYW50IGphc21pbmUgZmxvd2VycyBhcmUgYnJvdWdodCB0b2dldGhlciB3aXRoIGluZnVzZWQgcm9sbGVkIGdyZWVuIHRlYSBsZWF2ZXMgYW5kIGEgaGludCBvZiBnaW5nZXIuJyxcclxuICAgICAgICAgICAgJzUgc2lsdmVyJyxcclxuICAgICAgICAgICAgamFzbWluZVRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdCZW5kZXIgVGVhJyxcclxuICAgICAgICAgICAgJ1RoaXMgT29sb25nIHRlYSBpcyBhIHRyYWRpdGlvbmFsLCBwYXJ0aWFsbHkgb3hpZGl6ZWQgdGVhIHdoaWNoIGdyb3dzIGF0b3AgdGhlIG1vdW50YWlucyBvZiB0aGUgc291dGhlcm4gaXNsYW5kcyBhbmQgaXRzIGZsYXZvciBpcyBpbmZsdWVuY2VkIGJ5IHRoZSByZWdpb25cXCdzIGluZGVwZW5kZW50IHNwaXJpdCBhbmQgdGhlIG15c3RlcmlvdXMgZm9nIGNyZWF0ZWQgYnkgd2F0ZXIgYW5kIGFpci4nLFxyXG4gICAgICAgICAgICAnNCBzaWx2ZXInLFxyXG4gICAgICAgICAgICBiZW5kZXJUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnTHljaGVlIEp1aWNlL1RlYScsXHJcbiAgICAgICAgICAgICcqQW4gRWFydGggS2luZ2RvbSBDbGFzc2ljKiBBIHZlcnkgcG9wdWxhciBkcmluayBpbiB0aGUgc3VtbWVyLiBPZmZlcmVkIGFzIGEgdGVhIG9yIGp1aWNlLiBNYWRlIGZyb20gbHljaGVlIG51dHMuJyxcclxuICAgICAgICAgICAgJzMgc2lsdmVyJyxcclxuICAgICAgICAgICAgbHljaGVlVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ1RhcGlvY2EgVGVhJyxcclxuICAgICAgICAgICAgJypPbmx5IGF0IEphc21pbmUgRHJhZ29uKiBBIHZlcnkgcG9wdWxhciBkcmluayBpbnZlbnRlZCBieSBJcm9oLiBNYWRlIGJ5IHN0ZXdpbmcgdGFwaW9jYSBiYWxscyB1bnRpbCB0aGV5IGFyZSBzb2Z0IGFuZCB0ZW5kZXIgYW5kIHRoZSB0YXBpb2NhIGlzIHN1YnNlcXVlbnRseSBhZGRlZCB0byBhbnkgdGVhIG9mIHlvdXIgY2hvb3NpbmcsIGFsb25nIHdpdGggYSBzbWFsbCBhbW91bnQgb2YgbWlsay4nLFxyXG4gICAgICAgICAgICAnNSBzaWx2ZXInLFxyXG4gICAgICAgICAgICB0YXBpb2NhVGVhXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgbWFrZU1lbnVHcmlkSXRlbShcclxuICAgICAgICAgICAgJ1doaXRlIExvdHVzIFRpbGUgVGVhJyxcclxuICAgICAgICAgICAgJ1RoaXMgbW9zdCBkZWxpY2F0ZSB3aGl0ZSB0ZWEgaG9sZHMgYSBjb21wbGV4IHVuZGVyY3VycmVudCBvZiBpbnRyaWd1aW5nIHRhc3RlcyBhbmQgc3RyZW5ndGggdW5kZXIgaXRzIG5hdHVyYWwgbGF5ZXJzIG9mIHN3ZWV0bmVzcy4nLFxyXG4gICAgICAgICAgICAnNCBzaWx2ZXInLFxyXG4gICAgICAgICAgICB3aGl0ZVRlYVxyXG4gICAgICAgIClcclxuICAgICk7XHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgIG1ha2VNZW51R3JpZEl0ZW0oXHJcbiAgICAgICAgICAgICdTcGljZWQgVGVhJyxcclxuICAgICAgICAgICAgJ0NvbW1vbiB0ZWEgb2YgdGhlIEZpcmUgS2luZ2RvbS4gVGhpcyB3YXJtIHRlYSBwYWNrcyBhIGNpbm5hbW9uIGtpY2suJyxcclxuICAgICAgICAgICAgJzMgc2lsdmVyJyxcclxuICAgICAgICAgICAgc3BpY2VUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICBtYWtlTWVudUdyaWRJdGVtKFxyXG4gICAgICAgICAgICAnUmVkLWJsb29kZWQgTmVwaGV3JyxcclxuICAgICAgICAgICAgJ1RoaXMgdGVhIGlzIGFtYmVyIGluIGNvbG9yLCBncmFzc3kgaW4gdGFzdGUsIGFuZCB2ZXJ5IGJpdHRlci4gVGhpcyBibG9uZCwgY29tcGxleCwgYW5kIGNvbmZ1c2luZyBibGVuZCByZXNlbWJsZXMgSXJvaFxcJ3MgbmVwaGV3IFp1a28uIFRyeSBpZiB5b3UgZGFyZS4nLFxyXG4gICAgICAgICAgICAnMiBzaWx2ZXInLFxyXG4gICAgICAgICAgICByZWRUZWFcclxuICAgICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBncmlkQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTWVudUdyaWRJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1nKSB7XHJcbiAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtJyk7XHJcblxyXG4gICAgY29uc3QgdGVhTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0ZWFOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICBjb25zdCB0ZWFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICB0ZWFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IHRlYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIHRlYVByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XHJcblxyXG4gICAgY29uc3QgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaWNlRGl2LmNsYXNzTGlzdC5hZGQoJ3ByaWNlLWRpdicpO1xyXG5cclxuICAgIGNvbnN0IGNvaW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvaW5JbWcuc3JjID0gJ2ltYWdlcy9jaGluZXNlLWNvaW4ucG5nJztcclxuXHJcbiAgICBwcmljZURpdi5hcHBlbmRDaGlsZCh0ZWFQcmljZSk7XHJcbiAgICBwcmljZURpdi5hcHBlbmRDaGlsZChjb2luSW1nKTtcclxuXHJcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQodGVhTmFtZSk7XHJcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZCh0ZWFEZXNjcmlwdGlvbik7XHJcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZChwcmljZURpdik7XHJcblxyXG4gICAgcmV0dXJuIGdyaWRJdGVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWMtYm9keScpO1xyXG4gICAgZHluYW1pY0JvZHkudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGR5bmFtaWNCb2R5LmFwcGVuZENoaWxkKG1ha2VNZW51KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplQm9keSgpIHtcclxuICAgIC8vSG9tZSBuYXZcclxuICAgIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWhvbWUnKTtcclxuICAgIGhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVOYXYoaG9tZU5hdik7XHJcbiAgICAgICAgICAgIGxvYWRIb21lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9NZW51IG5hdlxyXG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbWVudScpO1xyXG4gICAgbWVudU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU5hdihtZW51TmF2KTtcclxuICAgICAgICAgICAgbG9hZE1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0Fib3V0IG5hdlxyXG4gICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWFib3V0Jyk7XHJcbiAgICBhYm91dE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZU5hdihhYm91dE5hdik7XHJcbiAgICAgICAgICAgIGxvYWRBYm91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vSG9tZSBuYXZcclxuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWNvbnRhY3QnKTtcclxuICAgIGNvbnRhY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVOYXYoY29udGFjdE5hdik7XHJcbiAgICAgICAgICAgIGxvYWRDb250YWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU5hdihuYXZPKSB7XHJcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcblxyXG4gICAgbmF2TGlzdC5mb3JFYWNoKChuYXYpID0+IHtcclxuICAgICAgICBpZiAobmF2ICE9PSBuYXZPKSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbmF2LnN0eWxlLmJvcmRlckJvdHRvbSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXZPLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgbmF2Ty5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMnB4IHNvbGlkIGdyZWVueWVsbG93JztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9hZEZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ0NvcHlyaWdodCDCqSBJcm9oIDIwMjInKSk7XHJcblxyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS5hZnRlcihmb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50aWFsaXplV2Vic2l0ZUJvZHkoKSB7XHJcblxyXG4gICAgc2V0QWN0aXZlTmF2KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaG9tZScpKTtcclxuICAgIGNyZWF0ZUxvYWRGb290ZXIoKTtcclxuICAgIGxvYWRIb21lKCk7XHJcbiAgICBpbml0aWFsaXplQm9keSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRpYWxpemVXZWJzaXRlQm9keTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbnRpYWxpemVXZWJzaXRlQm9keSBmcm9tIFwiLi93ZWJzaXRlXCI7XHJcblxyXG5pbnRpYWxpemVXZWJzaXRlQm9keSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==