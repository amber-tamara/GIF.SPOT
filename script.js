let loading = false;
let timeout = null;
const hide = document.querySelector(".hide");
const gifForm = document.querySelector("#gif-form");
const banana = document.querySelector(".banana");
const intro = document.querySelector(".intro");
const result = document.querySelector(".grid");
const apiUrl = "http://api.giphy.com/v1/gifs/";
const data = [];
let paginate = 15;
const limit = 15;
let searchTerm = document.querySelector(".search").value;
const box = document.querySelector(".box");
const loding = document.querySelectorAll(".circle");
console.log(loding);

gifForm.addEventListener("keyup", function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    fetchGiphs();
  }, 500);
});

function fetchGiphs(e) {
  searchTerm = document.querySelector(".search").value;
  if (searchTerm.length < 1) {
    result.classList.add("ramama");
    banana.classList.add("ramama");
    intro.classList.remove("ramama");
    box.classList.add("remove");
    return;
  }
  fetch(
    // URi
    `${apiUrl}search?q=${searchTerm}&limit=15&offset=0&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh`
  )
    .then((response) => response.json())
    .then((res) => res.data)
    .then((data) => {
      data = data;
      console.log(data);
      if (data.length === 0 && loading === false) {
        banana.classList.remove("ramama");
        result.classList.add("ramama");
        intro.classList.add("ramama");
        box.classList.add("remove");
      } else {
        result.classList.remove("ramama");
        banana.classList.add("ramama");
        intro.classList.add("ramama");
        box.classList.remove("remove");
        showGiphs(data);
      }
    });

  function showGiphs(data) {
    let HTMLPayload = "";

    for (let i = 0; i < data.length; i++) {
      const img = `
        <div class="grid-item">
          <img class="fade-in" src="${data[i].images.original.url}" />
        </div>`;
      HTMLPayload += img;
    }

    result.innerHTML = HTMLPayload;
    box.classList.remove("remove");
    box.classList.remove("remove");
    box.classList.add("loading");
  }
}

window.addEventListener("scroll", function timer() {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    poo();
  }, 2000);
});

function poo(date) {
  if (
    window.scrollY + window.innerHeight + 100 >=
    document.documentElement.scrollHeight
  ) {
    fetch(
      // URi
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh&limit=${limit}&offset=${paginate}&rating=g`
    )
      .then((res) => res.json())
      .then((resp) => resp.data)
      .then((data) => {
        // data = data;
        paginate = paginate + 5;
        showMoreGiphs(data);
      });
  }
}
let HTMLPayload;
function showMoreGiphs(data) {
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
console.log(HTMLPayload);
let modal = document.querySelector("modal");
result.addEventListener("click", openModal);

function openModal(e) {
  console.log(e.target.classList);
  if (e.target && e.target.classList == "fade-in") {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var modal = document.querySelector(".modal");
    modal.classList.toggle("active");
    let gif = e.srcElement.currentSrc;
    const pidg = `<img class="modal-content" src="${gif}" />`;
    modal.innerHTML += pidg;
    console.log(e);
    // console.log((modal.innerHTML += gif));
  }
}

document.addEventListener("click", (e) => {
  if (e.srcElement.children[0]) {
    var blur = document.getElementById("blur");
    blur.classList.remove("active");
    var modal = document.querySelector(".modal");
    modal.classList.remove("active");
  }
});
