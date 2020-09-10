const gifForm = document.querySelector("#gif-form");
const icecreamImage = document.querySelector(".icecream-image");
const clip = document.querySelector(".clip");
const result = document.querySelector(".grid");
const apiUrl = "http://api.giphy.com/v1/gifs/";
let searchTerm = document.getElementById("searchy").value;
const animation = document.querySelector(".animation");
const introgifs = document.querySelector(".introgifs")
let loading = false;
let timeout = null;
const data = [];
let paginate = 15;
const limit = 15;


//Introductory random gif's
function setUpImages(e) {
  fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=4&offset=80&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh`
  )
    .then((res) => res.json())
    .then((res) => {
      let gifArray = res.data
      let HTMLPayload = "";
      for (let i = 0; i < gifArray.length; i++) {
        const img = `
     
          <img class="gif" src="${gifArray[i].images.downsized_medium.url}" alt="random-gifs" />
        `;
        HTMLPayload += img;
      }
      document.querySelector(".introgifs").innerHTML = HTMLPayload;
    })
}



window.onload = function () {
  setUpImages();
  // document.getElementById("searchy").value = ""
}


// add class onto picture for modal, don't make an img tag in html

gifForm.addEventListener("keyup", function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    fetchGiphs();
  }, 500);
});

//This funciton  fetches the gifs, removes introduction picture.
//I could make one class that added onto banana etc, so  I don't
//have to add and remove classes in this way.
function fetchGiphs(e) {
  let searchTerm = document.getElementById("searchy").value;
  console.log(searchTerm)
  if (searchTerm.length < 1) {
    result.classList.add("remove");
    icecreamImage.classList.add("remove");
    clip.classList.remove("remove");
    animation.classList.add("remove");
    introgifs.classList.remove("remove")
    return;
  } else {
    console.log("lollo")
    fetchgifs()
  }
}

let data = []
console.log(data)

function fetchgifs() {
  let searchTerm = document.getElementById("searchy").value;
  let data = fetch(
    // URi
    `${apiUrl}search?q=${searchTerm}&limit=15&offset=0&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh`
  )
    .then((response) => response.json())
    .then((res) => {
      console.log()
      res.data
    })
    .then((data) => {
      return data
    })

  return data;
}

function bobo(data) {
  loadImages(data)
}

function loadImages(data) {
  if (data.length === 0 && loading === false) {
    console.log(data.length)
    console.log(loading)
    icecreamImage.classList.remove("remove");
    result.classList.add("remove");
    clip.classList.remove("remove");
    animation.classList.add("remove");
    introgifs.classList.add("remove")
  } else {
    result.classList.remove("remove");
    icecreamImage.classList.add("remove");
    clip.classList.add("remove");
    animation.classList.remove("remove");
    introgifs.classList.add("remove")
    showGiphs(data);
  }
}

function showGiphs(data) {

  let HTMLPayload = "";

  for (let i = 0; i < data.length; i++) {
    const img = `
        <div class="grid-item" data-id=${i}>
          <img class="fade-in" src="${data[i].images.original.url}" />
        </div>`;
    HTMLPayload += img;
  }

  result.innerHTML = HTMLPayload;
  animation.classList.remove("remove");
  animation.classList.remove("remove");
  animation.classList.add("loading");
}

// window.addEventListener("scroll", function timer() {
//   showLoading()
// });

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight) {
    console.log("bum")
    loadmoregifs()
  }
})


function loadmoregifs(data) {
  HTMLPayload = "";

  for (let i = 0; i < data.length; i++) {
    const img = `
      <div class="grid-item">
        <img class="fade-in" src="${data[i].images.original.url}" />
      </div>`;
    HTMLPayload += img;
  }

  result.innerHTML += HTMLPayload;
}

// window.addEventListener("scroll", () => {
//   if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight) {
//     showLoading();
//   }
// })

let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let blur = document.getElementById("blur");
let modal = document.querySelector(".modal");
result.addEventListener("click", openModal);

// leftArrow.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log(e.target.parentNode.nextElementSibling.childNodes[1]);
// });

function openModal(e) {
  const nextImage = e.target.parentNode.nextElementSibling.childNodes[1];

  if (e.target && e.target.classList == "fade-in") {
    blur.classList.add("active");
    modal.classList.remove("remove");
    console.log(e);
    let gif = e.srcElement.currentSrc;
    document.querySelector(".modal-image").src = gif;
    leftArrow.classList.remove("remove");
    rightArrow.classList.remove("remove");
  }
}

const modalImage = document.querySelector(".modal-image")

document.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.srcElement.children[0]) {
    blur.classList.remove("active");
    modal.classList.add("remove");
    leftArrow.classList.add("arrows");
    rightArrow.classList.add("arrows");
    modalImage.classList.remove("arrows");
  }
});


rightArrow.addEventListener("click", function (e) {
  console.log(e)
  let swapImage = result.children
  console.log(swapImage)
  Array.prototype.forEach.call(swapImage, iterate => {
    let gifs = iterate.firstElementChild.src;
    console.log(gifs)
    let gifsNumber = iterate.getAttribute('data-id')
    console.log(gifsNumber)
    let mod = modal.lastElementChild = `<img class="modal-image" src=${gifs} data-id="">`
    console.log(mod)
  })
})


function changeImage() {
  imgSrc = modalImage[index].querySelector("img").getAttribute("src");
  modalImage.src = imgSrc
}

// rightArrow.addEventListener("click", right);

// function right(e) {
//   console.log(e)
//   let imageId = document.querySelector(".modal-image").getAttribute("data-id")
//   imageId.setAttribute = ('data-id') + iterate.getAttribute('data-id')
//   console.log(imageId)
//   document.querySelector(".modal-image").src = gifs
//   let swapImage = result.children
//   Array.prototype.forEach.call(swapImage, iterate => {
//     let gifs = iterate.firstElementChild.currentSrc
//     console.log(gifs)
//     let gifsNumber = iterate.getAttribute('data-id')
//     console.log(gifsNumber)
//   })
// }

