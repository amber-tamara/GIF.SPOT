const icecreamImage = document.querySelector(".icecream-image");
const clip = document.querySelector(".clip");
const result = document.querySelector(".grid");
const apiKey = "&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh";
const circlesAnimation = document.querySelector(".circlesAnimation");
const introgifs = document.querySelector(".introgifs")
let timeout = null;
let offset = 0;
const limit = 15;

import "./images/giphy.svg";
import "./images/GiphyIcon.png";
import "./images/gradient.svg";
import "./images/icecream.jpg";
import "./images/search.svg";
import "./style.scss";

// import "./style.scss"

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
      profile_url = `<h3 class="profile-title">
      <a class="profile_url" href='${gifArray[i].user.profile_url}' target="_blank">${gifArray[i].username}</a>
      </h3>`
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
        <a href="http://www.facebook.com/sharer.php?u=${url}" target="_blank">
        <img class="social_media_icon" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
       </a>
       <a href="https://twitter.com/share?url=https://${url}"
        target="_blank">
        <img class="social_media_icon" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
       </a>
       <a href="mailto:?Subject=Giphy&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${url}">
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
  fetchGifs("http://api.giphy.com/v1/gifs/", `trending?limit=50&offset=${offset}`, '.introgifs')
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
  timeout = setTimeout(() => (fetchGifs("http://api.giphy.com/v1/gifs/", `search?q=${search}&limit=15&offset=0`)), 1000);
  timeout = setTimeout(() => (loadImages()), 1200);
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
    fetchGifs("http://api.giphy.com/v1/gifs/", `search?q=${query}&limit=15&offset=${offset}`);
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