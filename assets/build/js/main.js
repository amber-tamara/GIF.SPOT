/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/single.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/GiphyIcon.png":
/*!**********************************!*\
  !*** ./src/images/GiphyIcon.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/images/GiphyIcon.png");

/***/ }),

/***/ "./src/images/giphy.svg":
/*!******************************!*\
  !*** ./src/images/giphy.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/images/giphy.svg");

/***/ }),

/***/ "./src/images/gradient.svg":
/*!*********************************!*\
  !*** ./src/images/gradient.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/images/gradient.svg");

/***/ }),

/***/ "./src/images/icecream.jpg":
/*!*********************************!*\
  !*** ./src/images/icecream.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/images/icecream.jpg");

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/images/search.svg");

/***/ }),

/***/ "./src/js/single.js":
/*!**************************!*\
  !*** ./src/js/single.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_giphy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/giphy.svg */ "./src/images/giphy.svg");
/* harmony import */ var _images_GiphyIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/GiphyIcon.png */ "./src/images/GiphyIcon.png");
/* harmony import */ var _images_gradient_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/gradient.svg */ "./src/images/gradient.svg");
/* harmony import */ var _images_icecream_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icecream.jpg */ "./src/images/icecream.jpg");
/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/search.svg */ "./src/images/search.svg");







const icecreamImage = document.querySelector(".icecream-image");
const clip = document.querySelector(".clip");
const result = document.querySelector(".grid");
const apiKey = "&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh";
const circlesAnimation = document.querySelector(".circlesAnimation");
const introgifs = document.querySelector(".introgifs")
let timeout = null;
let offset = 0;
const limit = 15;


/**
 * Set up initial fetch request, with two parameters so the api can be called inside different functions,
 * but send different requests. The grid class is targetted and a function is called to add more images
 * inside the grid
 */
var gifArray;
function fetchGifs(apiUrl, queryParameters, targetClass = '.grid') {
  fetch(
    `${apiUrl + queryParameters + apiKey}`
  )
    .then(res => res.json())
    .then(res => {
      gifArray = res.data
      // if we are working with the intro gifs, call the filtergifs func and pass the returned value from that func into generateImageTagsForGifs
      if ('.introgifs' === targetClass) {
        const sizedGifs = filterGifsBasedOnWidth(gifArray)
        document.querySelector(`${targetClass}`).innerHTML += generateImageTagsForGifs(sizedGifs)
      } else
        document.querySelector(`${targetClass}`).innerHTML += generateImageTagsForGifs(gifArray)
    }
    )
    .then(() => addClickEvents('.gif'))
}

/**
 * 
 * conditions if no results are found display, message telling user, else run "gifResults", which then
 * sets up an environment for the gif's 
 */

function loadImages() {
  console.log(gifArray)
  if (gifArray === undefined || gifArray.length === 0) {
    setNoResults()
  } else {
    gifResults()
    // fetchGifs()
  }
}

/**
 * Clear ".grid" children, ready for a fresh search with new images.
 */

function clearGifArray() {
  const grid = document.querySelector(".grid");
  grid.innerHTML = ""
}

/**
 * Error pictures comes up, letting user's know that no gif's are avialable 
 */

function setNoResults() {
  icecreamImage.classList.remove("remove");
  result.classList.add("remove");
  clip.classList.add("remove");
  circlesAnimation.classList.add("remove");
  introgifs.classList.add("remove")
}

/**
 * Creates an environment for the gifs to be displayed, by removing introduction, adding a loading circlesAnimation 
 * and making the ".grid" visible.
 */

function gifResults() {
  result.classList.remove("remove");
  icecreamImage.classList.add("remove");
  clip.classList.add("remove");
  circlesAnimation.classList.remove("remove");
  introgifs.classList.add("remove")
}

/**
 * Create and return a HTML Payload, from the array of gifs fetched from the gify API endpoint
 */

//  fixed_width

function generateImageTagsForGifs(gifArray) {
  let HTMLPayload = "";
  // loop through array
  for (let i = 0; i < gifArray.length; i++) {
    let profile_url = ""
    // gifArray[i].user && 
    if (gifArray[i].username === "") {
      profile_url = ""
    } else if (gifArray[i].user.profile_url && gifArray[i].username) {
      profile_url = `<h2 class="profile-title">
      <a rel="noopener" class="profile_url" href='${gifArray[i].user.profile_url}' target="_blank">${gifArray[i].username}</a>
      </h2>`
    }

    const width = gifArray[i].images.downsized_large.width
    const url = gifArray[i].images.downsized_large.url
    const title = gifArray[i].title

    const htmlString = `
      <div class="gif-container">
      <div class="grid-container" data-id=${i}>
        <img 
        class="gif" 
        width="${width}"
        src="${url}" alt="random-gifs" 
        alt="${title}"
        >      ${profile_url}
        <div class="details-box">
        <a rel="noopener" href="https://www.facebook.com/sharer.php?u=${url}" target="_blank">
        <img class="social_media_icon" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
       </a>
       <a rel="noopener" href="https://twitter.com/share?url=https://${url}"
        target="_blank">
        <img class="social_media_icon" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
       </a>
       <a rel="noopener" href="mailto:?Subject=Giphy&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${url}">
        <img class="social_media_icon" src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
       </a>
       </div>
       </img>
       
     </div>
     </div>
    `;
    HTMLPayload += htmlString
    console.log(gifContainer)
    //Attach event listener to gif container div 
    //const gif = gifContainer.querySelector(".gif");
    //gif.addEventListener("click", toggle)
    //console.log(gif)
  }


  return HTMLPayload;
}

function addClickEvents(query) {
  const elements = document.querySelectorAll(query);

  for (const element of elements) {
    element.addEventListener('click', toggle);
  }
}

// width 600p


/**
 * Inital page load, intro pircture, trending gifs endpoint
 */
window.onload = () => {
  document.getElementById("searchy").value = "";
  offset += Math.floor(Math.random() * 100);
  fetchGifs("https://api.giphy.com/v1/gifs/", `trending?limit=50&offset=${offset}`, '.introgifs')
}

function checkWidths(gif) {
  let gifs = gif.images.downsized_large.width
  let gifsHeight = gif.images.downsized_large.height

  let height = gifsHeight >= 250 && gifsHeight <= 300
  let width = gifs >= 450 && gifs <= 500

  return height && width //return true and false
}

function filterGifsBasedOnWidth(gifArray) {
  const filteredGifs = gifArray.filter(checkWidths) // if true store in an array, if false we don't put our array. At the end of this function return the array 
  return filteredGifs.slice(0, 4);
}

/**
 * Removes entire introductory.
 */

function removeIntroduction() {
  const search = document.getElementById("searchy").value;
  result.classList.add("remove");
  icecreamImage.classList.add("remove");
  clip.classList.add("remove");
  circlesAnimation.classList.add("remove");
  introgifs.classList.add("remove")
}

/**
 * Form event listener, on submit introduction is removed, ".grid" children are removed, so an empty ".grid" is available to
 * take a new search. Gif's are called after timeout out, followed by loadImages function that adds a condition if the array is empty,
 * then rung setNoResults function, otherwise run "gifResults"
 */

const searchForm = document.querySelector("#gif-form")
const button = document.querySelector(".button")
searchForm.addEventListener("submit", (e) => {
  let search = document.querySelector("#searchy").value
  e.preventDefault()
  removeIntroduction();
  clearGifArray();
  clearTimeout(timeout);
  timeout = setTimeout(() => (fetchGifs("https://api.giphy.com/v1/gifs/", `search?q=${search}&limit=15&offset=0`)), 1000);
  timeout = setTimeout(() => (loadImages()), 1400);
  return;
});

/**
 * On scroll event, to trigger the fetching of more gifs
 */

document.addEventListener("scroll", (gifArray) => {
  if (window.scrollY + window.innerHeight + 5 >= document.documentElement.scrollHeight && ".grid") {
    // Load content
    offset += 15;
    const query = document.querySelector("#searchy").value;
    fetchGifs("https://api.giphy.com/v1/gifs/", `search?q=${query}&limit=15&offset=${offset}`);
  } else {
  }
})


/**
 * Create a pop up modal
 */

const blur = document.querySelector(".container");
const close = document.querySelector(".close");

/**
 * function check if moddle box is open, by seeing if class has been applied,
 *  then return so not to be applied to any other image. However if a image is being clicked for the firt time,
 * apply "modal-image" class, activate blurred background and close sign. Loop through all gifs that have 
 * "grid-container" class applied to them apart from "modal-image", then add the class "unclickable" and that sets
 * pointer-events to none.
 */

let gifContainer
function toggle(e) {
  const searchForm = document.querySelector(".form");
  searchForm.classList.add("unclickable");

  if (checkModalIfOpen()) {
    return;
  }

  gifContainer = (e.target.offsetParent.parentElement)
  gifContainer.classList.add("modal-position")

  let gridContainer = e.target.offsetParent
  gridContainer.classList.add("modal-image")


  // Get all the gifs that the user hasn't clicked.
  // Loop through and add a class unclickable
  blur.classList.toggle("active");
  close.classList.toggle("remove")
  const gridContainers = document.querySelectorAll('.grid-container:not(.modal-image)');
  for (const gif of gridContainers) {
    gif.classList.add('unclickable')

  }
};

/**
 * Exit event decription
 * Loops through all gifs with '.grid-container.unclickable' class applied to them,
 * which removes the class 'unclickable'. Next the toggle function and the cross sign which is
 * reffered to as close, is removed, bringing the images and design back
 * to it's original form.
 */


close.addEventListener("click", () => {
  removeModalIfOpen();
  const searchForm = document.querySelector(".form");
  searchForm.classList.remove("unclickable");
  gifContainer.classList.remove("modal-position")
  const gifs = document.querySelectorAll('.grid-container.unclickable');
  for (const gif of gifs) {
    gif.classList.remove('unclickable')
  }
  blur.classList.toggle("active");
  close.classList.toggle("remove")
  searchForm.classList.remove("unclickable")
})
/**
 * description
 * @return if modalImage is not there dont carry out function, 
 * otherwise remove the class "modal-image" to revert image to it's original state
 */
function removeModalIfOpen() {
  const modalImage = document.querySelector(".modal-image");
  if (!modalImage) {
    return;
  }

  modalImage.classList.remove('modal-image');
}

/**
 * description
 * queryselector returns the first element that matches a specified CSS selector.
 * @return the execution of the function is stopped when the class modal-image has been selected.
 *
 */

function checkModalIfOpen() {
  const modalImage = document.querySelector(".modal-image");
  return modalImage;
}

const home = document.querySelector('.title-box')

home.addEventListener("click", () => {
  document.getElementById("searchy").value = "";
  result.classList.add("remove");
  circlesAnimation.classList.add("remove");
  introgifs.classList.remove("remove");
  clip.classList.remove("remove");
  icecreamImage.classList.add("remove")
})

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map