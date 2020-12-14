"use strict";

require("./images/giphy.svg");

require("./images/GiphyIcon.png");

require("./images/gradient.svg");

require("./images/icecream.jpg");

require("./images/search.svg");

require("./style.scss");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var icecreamImage = document.querySelector(".icecream-image");
var clip = document.querySelector(".clip");
var result = document.querySelector(".grid");
var apiKey = "&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh";
var circlesAnimation = document.querySelector(".circlesAnimation");
var introgifs = document.querySelector(".introgifs");
var timeout = null;
var offset = 0;
var limit = 15;
// import "./style.scss"

/**
 * Set up initial fetch request, with two parameters so the api can be called inside different functions,
 * but send different requests. The grid class is targetted and a function is called to add more images
 * inside the grid
 */
var gifArray;

function fetchGifs(apiUrl, queryParameters) {
  var targetClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.grid';
  fetch("".concat(apiUrl + queryParameters + apiKey)).then(function (res) {
    return res.json();
  }).then(function (res) {
    gifArray = res.data; // if we are working with the intro gifs, call the filtergifs func and pass the returned value from that func into generateImageTagsForGifs

    if ('.introgifs' === targetClass) {
      var sizedGifs = filterGifsBasedOnWidth(gifArray);
      document.querySelector("".concat(targetClass)).innerHTML += generateImageTagsForGifs(sizedGifs);
    } else document.querySelector("".concat(targetClass)).innerHTML += generateImageTagsForGifs(gifArray);
  }).then(function () {
    return addClickEvents('.gif');
  });
}
/**
 * 
 * conditions if no results are found display, message telling user, else run "gifResults", which then
 * sets up an environment for the gif's 
 */


function loadImages() {
  console.log(gifArray);

  if (gifArray === undefined || gifArray.length === 0) {
    setNoResults();
  } else {
    gifResults(); // fetchGifs()
  }
}
/**
 * Clear ".grid" children, ready for a fresh search with new images.
 */


function clearGifArray() {
  var grid = document.querySelector(".grid");
  grid.innerHTML = "";
}
/**
 * Error pictures comes up, letting user's know that no gif's are avialable 
 */


function setNoResults() {
  icecreamImage.classList.remove("remove");
  result.classList.add("remove");
  clip.classList.add("remove");
  circlesAnimation.classList.add("remove");
  introgifs.classList.add("remove");
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
  introgifs.classList.add("remove");
}
/**
 * Create and return a HTML Payload, from the array of gifs fetched from the gify API endpoint
 */
//  fixed_width


function generateImageTagsForGifs(gifArray) {
  var HTMLPayload = ""; // loop through array

  for (var i = 0; i < gifArray.length; i++) {
    var profile_url = ""; // gifArray[i].user && 

    if (gifArray[i].username === "") {
      profile_url = "";
    } else if (gifArray[i].user.profile_url && gifArray[i].username) {
      profile_url = "<h3 class=\"profile-title\">\n      <a class=\"profile_url\" href='".concat(gifArray[i].user.profile_url, "' target=\"_blank\">").concat(gifArray[i].username, "</a>\n      </h3>");
    }

    var width = gifArray[i].images.downsized_large.width;
    var url = gifArray[i].images.downsized_large.url;
    var title = gifArray[i].title;
    var htmlString = "\n      <div class=\"gif-container\">\n      <div class=\"grid-container\" data-id=".concat(i, ">\n        <img \n        class=\"gif\" \n        width=\"").concat(width, "\"\n        src=\"").concat(url, "\" alt=\"random-gifs\" \n        alt=\"").concat(title, "\"\n        >      ").concat(profile_url, "\n        <div class=\"details-box\">\n        <a href=\"http://www.facebook.com/sharer.php?u=").concat(url, "\" target=\"_blank\">\n        <img class=\"social_media_icon\" src=\"https://simplesharebuttons.com/images/somacro/facebook.png\" alt=\"Facebook\" />\n       </a>\n       <a href=\"https://twitter.com/share?url=https://").concat(url, "\"\n        target=\"_blank\">\n        <img class=\"social_media_icon\" src=\"https://simplesharebuttons.com/images/somacro/twitter.png\" alt=\"Twitter\" />\n       </a>\n       <a href=\"mailto:?Subject=Giphy&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ").concat(url, "\">\n        <img class=\"social_media_icon\" src=\"https://simplesharebuttons.com/images/somacro/email.png\" alt=\"Email\" />\n       </a>\n       </div>\n       </img>\n       \n     </div>\n     </div>\n    ");
    HTMLPayload += htmlString;
    console.log(gifContainer); //Attach event listener to gif container div 
    //const gif = gifContainer.querySelector(".gif");
    //gif.addEventListener("click", toggle)
    //console.log(gif)
  }

  return HTMLPayload;
}

function addClickEvents(query) {
  var elements = document.querySelectorAll(query);

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      element.addEventListener('click', toggle);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // width 600p

/**
 * Inital page load, intro pircture, trending gifs endpoint
 */


window.onload = function () {
  document.getElementById("searchy").value = "";
  offset += Math.floor(Math.random() * 100);
  fetchGifs("http://api.giphy.com/v1/gifs/", "trending?limit=50&offset=".concat(offset), '.introgifs');
};

function checkWidths(gif) {
  var gifs = gif.images.downsized_large.width;
  var gifsHeight = gif.images.downsized_large.height;
  var height = gifsHeight >= 250 && gifsHeight <= 300;
  var width = gifs >= 450 && gifs <= 500;
  return height && width; //return true and false
}

function filterGifsBasedOnWidth(gifArray) {
  var filteredGifs = gifArray.filter(checkWidths); // if true store in an array, if false we don't put our array. At the end of this function return the array 

  return filteredGifs.slice(0, 4);
}
/**
 * Removes entire introductory.
 */


function removeIntroduction() {
  var search = document.getElementById("searchy").value;
  result.classList.add("remove");
  icecreamImage.classList.add("remove");
  clip.classList.add("remove");
  circlesAnimation.classList.add("remove");
  introgifs.classList.add("remove");
}
/**
 * Form event listener, on submit introduction is removed, ".grid" children are removed, so an empty ".grid" is available to
 * take a new search. Gif's are called after timeout out, followed by loadImages function that adds a condition if the array is empty,
 * then rung setNoResults function, otherwise run "gifResults"
 */


var searchForm = document.querySelector("#gif-form");
var button = document.querySelector(".button");
searchForm.addEventListener("submit", function (e) {
  var search = document.querySelector("#searchy").value;
  e.preventDefault();
  removeIntroduction();
  clearGifArray();
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    return fetchGifs("http://api.giphy.com/v1/gifs/", "search?q=".concat(search, "&limit=15&offset=0"));
  }, 1000);
  timeout = setTimeout(function () {
    return loadImages();
  }, 1400);
  return;
});
/**
 * On scroll event, to trigger the fetching of more gifs
 */

document.addEventListener("scroll", function (gifArray) {
  if (window.scrollY + window.innerHeight + 5 >= document.documentElement.scrollHeight && ".grid") {
    // Load content
    offset += 15;
    var query = document.querySelector("#searchy").value;
    fetchGifs("http://api.giphy.com/v1/gifs/", "search?q=".concat(query, "&limit=15&offset=").concat(offset));
  } else {}
});
/**
 * Create a pop up modal
 */

var blur = document.querySelector(".container");
var close = document.querySelector(".close");
/**
 * function check if moddle box is open, by seeing if class has been applied,
 *  then return so not to be applied to any other image. However if a image is being clicked for the firt time,
 * apply "modal-image" class, activate blurred background and close sign. Loop through all gifs that have 
 * "grid-container" class applied to them apart from "modal-image", then add the class "unclickable" and that sets
 * pointer-events to none.
 */

var gifContainer;

function toggle(e) {
  var searchForm = document.querySelector(".form");
  searchForm.classList.add("unclickable");

  if (checkModalIfOpen()) {
    return;
  }

  gifContainer = e.target.offsetParent.parentElement;
  gifContainer.classList.add("modal-position");
  var gridContainer = e.target.offsetParent;
  gridContainer.classList.add("modal-image"); // Get all the gifs that the user hasn't clicked.
  // Loop through and add a class unclickable

  blur.classList.toggle("active");
  close.classList.toggle("remove");
  var gridContainers = document.querySelectorAll('.grid-container:not(.modal-image)');

  var _iterator2 = _createForOfIteratorHelper(gridContainers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var gif = _step2.value;
      gif.classList.add('unclickable');
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

;
/**
 * Exit event decription
 * Loops through all gifs with '.grid-container.unclickable' class applied to them,
 * which removes the class 'unclickable'. Next the toggle function and the cross sign which is
 * reffered to as close, is removed, bringing the images and design back
 * to it's original form.
 */

close.addEventListener("click", function () {
  removeModalIfOpen();
  var searchForm = document.querySelector(".form");
  searchForm.classList.remove("unclickable");
  gifContainer.classList.remove("modal-position");
  var gifs = document.querySelectorAll('.grid-container.unclickable');

  var _iterator3 = _createForOfIteratorHelper(gifs),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var gif = _step3.value;
      gif.classList.remove('unclickable');
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  blur.classList.toggle("active");
  close.classList.toggle("remove");
  searchForm.classList.remove("unclickable");
});
/**
 * description
 * @return if modalImage is not there dont carry out function, 
 * otherwise remove the class "modal-image" to revert image to it's original state
 */

function removeModalIfOpen() {
  var modalImage = document.querySelector(".modal-image");

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
  var modalImage = document.querySelector(".modal-image");
  return modalImage;
}

var home = document.querySelector('.title-box');
home.addEventListener("click", function () {
  document.getElementById("searchy").value = "";
  result.classList.add("remove");
  circlesAnimation.classList.add("remove");
  introgifs.classList.remove("remove");
  clip.classList.remove("remove");
  icecreamImage.classList.add("remove");
});