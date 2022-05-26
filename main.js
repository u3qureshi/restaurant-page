/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


function createBody() {
    //Home nav
    const homeNav = document.querySelector('nav-home');
    homeNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;

        else {
            setActiveNav(homeNav);
            (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ2pDTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFRO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7VUNuRG5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONkM7QUFDN0M7QUFDQSxvREFBb0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFzbWluZS1kcmFnb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNtaW5lLWRyYWdvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc21pbmUtZHJhZ29uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XHJcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XHJcblxyXG4gICAgY29uc3QgY29tcGFueUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcGFueUltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9qYXNtaW5lLWRyYWdvbi1sb2dvLmpwZyc7XHJcbiAgICBjb21wYW55SW1nLmFsdCA9ICdKYXNtaW5lIERyYWdvbiBsb2dvJztcclxuXHJcbiAgICBjb25zdCBjb21wYW55SW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21wYW55SW1nRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBhbnktaW1nJyk7XHJcbiAgICBjb21wYW55SW1nRGl2LmFwcGVuZENoaWxkKGNvbXBhbnlJbWcpO1xyXG5cclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoJ0Jlc3QgdGVhIGluIEJhIFNpbmcgU2UhJykpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY29tcGFueUltZ0Rpdik7XHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCdTaGFyaW5nIHRlYSB3aXRoIGEgZmFzY2luYXRpbmcgc3RyYW5nZXIgaXMgb25lIG9mIGxpZmVcXCdzIHRydWUgZGVsaWdodHMg4piVJykpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnU28gY29tZSB2aXNpdCB1cyBpbiB0aGUgVXBwZXIgUmluZyBvZiB0aGUgQ2l0eSBvciBvcmRlciBvbmxpbmUhJykpO1xyXG5cclxuICAgIHJldHVybiBob21lUGFnZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCh0ZXh0KSB7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZHluYW1pY0JvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvZHkoKSB7XHJcbiAgICAvL0hvbWUgbmF2XHJcbiAgICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2LWhvbWUnKTtcclxuICAgIGhvbWVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVOYXYoaG9tZU5hdik7XHJcbiAgICAgICAgICAgIGxvYWRIb21lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFjdGl2ZU5hdihuYXZPKSB7XHJcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcblxyXG4gICAgbmF2TGlzdC5mb3JFYWNoKChuYXYpID0+IHtcclxuICAgICAgICBpZiAobmF2ICE9PSBuYXZPKSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXZPLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2FkRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dCgnQ29weXJpZ2h0IMKpIElyb2gnKSk7XHJcblxyXG4gICAgY29uc3QgZHluYW1pY0JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHluYW1pYy1ib2R5Jyk7XHJcbiAgICBkeW5hbWljQm9keS5hZnRlcihmb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0KHRleHQpIHtcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICByZXR1cm4gcDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50aWFsaXplV2Vic2l0ZUJvZHkoKSB7XHJcblxyXG4gICAgc2V0QWN0aXZlTmF2KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaG9tZScpKTtcclxuICAgIGNyZWF0ZUxvYWRGb290ZXIoKTtcclxuICAgIGxvYWRIb21lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGlhbGl6ZVdlYnNpdGVCb2R5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGludGlhbGl6ZVdlYnNpdGVCb2R5IGZyb20gXCIuL3dlYnNpdGVcIjtcclxuXHJcbmludGlhbGl6ZVdlYnNpdGVCb2R5KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9