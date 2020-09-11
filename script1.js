const gifForm = document.querySelector("#gif-form");
const icecreamImage = document.querySelector(".icecream-image");
const clip = document.querySelector(".clip");
const result = document.querySelector(".grid");
const apiKey = "&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh";
let searchTerm = document.getElementById("searchy").value;
const animation = document.querySelector(".animation");
const introgifs = document.querySelector(".introgifs")
let loading = false;
let timeout = null;
let offset = 0;
const limit = 15;

// searchTerm.addEventListener("keyup", () => {
//   let searchTerm = document.getElementById("searchy").value;
//   fetchGifs("api.giphy.com/v1/gifs/search/tags", `search?q=${searchTerm}`)
// }


/**
 * Set up initial fetch request, with two parameters so the api can be called inside different functions,
 * but send different requests. The grid class is targetted and a function is called to add more images
 * inside the grid
 */
var data;
var gifArray;
function fetchGifs(apiUrl, queryParameters, targetClass = '.grid') {
  fetch(
    `${apiUrl + queryParameters + apiKey}`
  )
    .then(res => res.json())
    .then(res => {
      gifArray = res.data
      console.log(gifArray)
      document.querySelector(`${targetClass}`).innerHTML += generateImageTagsForGifs(gifArray)
    }
    );
}

/**
 * 
 * conditions if no results are found display, message telling user, else run "gifResults", which then
 * sets up an environment for the gif's 
 */

function loadImages(e) {
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
  animation.classList.add("remove");
  introgifs.classList.add("remove")
}

/**
 * Creates an environment for the gifs to be displayed, by removing introduction, adding a loading animation 
 * and making the ".grid" visible.
 */

function gifResults() {
  result.classList.remove("remove");
  icecreamImage.classList.add("remove");
  clip.classList.add("remove");
  animation.classList.remove("remove");
  introgifs.classList.add("remove")
}

/**
 * Create and return a HTML Payload, from the array of gifs fetched from the gify API endpoint
 */

function generateImageTagsForGifs(gifArray) {
  let HTMLPayload = "";
  for (let i = 0; i < gifArray.length; i++) {
    let profile_url = ""
    if (gifArray[i].user && gifArray[i].user.profile_url && gifArray[i].username) {
      profile_url = `<a class="profile_url" href='${gifArray[i].user.profile_url}' target="_blank">${gifArray[i].username}</a>`
    }
    const width = gifArray[i].images.fixed_width.width
    const height = gifArray[i].images.fixed_width.height
    const url = gifArray[i].images.fixed_width.url
    const title = gifArray[i].title
    const img = `
      <div class="grid-item" data-id=${i}>
      ${profile_url}
        <img 
        onclick="toggle(event)";
        class="gif" 
        width="${width} 
        height="${height}" 
        src="${url}" alt="random-gifs" 
        alt="${title}"
        />
      </div>
      <a href="${url}" target="_blank">
      <img class="sharer" src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
    </a>
    <a href="${url}"
      target="_blank">
      <img class="sharer" src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
    </a>
    <a
      href="mailto:?Subject=Giphy&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${url}">
      <img class="sharer" src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
    </a>
    `;
    HTMLPayload += img;
  }
  return HTMLPayload;
}

/**
 * Inital page load, intro pircture, trending gifs endpoint
 */
window.onload = () => {
  fetchGifs("http://api.giphy.com/v1/gifs/", 'trending?limit=4&offset=80', '.introgifs')
}

/**
 * Removes entire introductory.
 */

function removeIntroduction() {
  search = document.getElementById("searchy").value;
  result.classList.add("remove");
  icecreamImage.classList.add("remove");
  clip.classList.add("remove");
  animation.classList.add("remove");
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
  e.preventDefault()
  removeIntroduction();
  clearGifArray();
  clearTimeout(timeout);
  timeout = setTimeout(() => (fetchGifs("http://api.giphy.com/v1/gifs/", `search?q=${search}&limit=15&offset=0`)), 1000);
  console.log(search)
  timeout = setTimeout(() => (loadImages()), 1200);
  return;
});

/**
 * On scroll event, to trigger the fetching of more gifs
 */
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight && gifArray.length === 15) {
    const query = document.querySelector("#searchy").value;
    if (query.length > 0) {
      offset += 15;
      fetchGifs("http://api.giphy.com/v1/gifs/", `search?q=${query}&limit=15&offset=${offset}`);
    }
  }
})

/**
 * Create a pop up modal
 */

console.log(document.images)
const modal = document.querySelector(".modal")
console.log(modal)
let blur = document.getElementById("blur");

// const modalGif = document.querySelector(".grid-item")
let modalGif = document.querySelectorAll(".gif")
console.log(modalGif)

// function toggle(e) {
//   e.forEach(e => {
//     console.log(e)
//     modal.classList.toggle("remove");
//     blur.classList.toggle("active")
//   })
// }
// eventlisten on templete literal
function toggle(e) {
  console.log(e)
  e.forEach(element => {
    console.log(element)
  });

  // if (e.target.src) {
  //   blur.classList.toggle("active")
  //   modal.classList.toggle("remove");
  //   const url = e.target.src
  //   const profile_url = e.target.href
  //   const img = `
  //   <img 
  //   class="modal-image"
  //   src="${url}"
  //   alt="current-img"
  //   />`
  //   // const gifImg = document.querySelector(".modal-image").srcset += e.target.src
  //   document.querySelector(".modal").innerHTML += img
  // }
}


// document.addEventListener("click", (e) => {
//   console.log(e)
//   if (e.target.src) {
//     blur.classList.toggle("active")
//     modal.classList.toggle("remove");
//     const url = e.target.src
//     const profile_url = e.target.href
//     const img = `
//     <img 
//     class="modal-image"
//     src="${url}"
//     alt="current-img"
//     />`
//     // const gifImg = document.querySelector(".modal-image").srcset += e.target.src
//     document.querySelector(".modal").innerHTML += img
//   }
// })

// document.addEventListener("click", (e) => {
//   console.log(e)
//   if (e.target.src) {
//     blur.classList.toggle("active")
//     modal.classList.toggle("remove");
//     const gifImg = document.querySelector(".modal-image").srcset += e.target.src
//     console.log(gifImg)
//   }
// })

// console.log(document)
// document.images[i].addEventListener(".click", () => {
//   blur.classList.toggle("active")
//   modal.classList.toggle("remove");
//   console.log("yay")
//   document.querySelector(".modal-image").srcSet +=

// })

  // document.querySelector(".modal-image").src += gif;

// blur.classList.toggle("active")
// modal.classList.toggle("remove");
// gifArray.forEach(e => {
//   e.images.fixed_width.url

// if () {
//   blur.classList.remove("active");
//   modal.classList.add("remove");
// }