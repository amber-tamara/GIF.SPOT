let loading = false;
let timeout = null;
const hide = document.querySelector(".hide");
const gifForm = document.querySelector("#gif-form");
const banana = document.querySelector(".banana");
const intro = document.querySelector(".intro");
const result = document.querySelector(".grid");

gifForm.addEventListener("keyup", function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    fetchGiphs();
  }, 600);
});

function fetchGiphs(e) {
  const searchTerm = document.querySelector(".search").value;
  console.log(searchTerm);
  if (searchTerm.length < 1) {
    console.log("ending function");
    result.classList.add("ramama");
    banana.classList.add("ramama");
    intro.classList.remove("ramama");
    return;
  }
  console.log("hey I should not be running, and I like pie");
  fetch(
    `http://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=10&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh`
  )
    .then((response) => response.json())
    .then((res) => res.data)
    .then((data) => {
      let dataArray = data;
      console.log(dataArray.length);
      if (dataArray.length === 0 && loading === false) {
        console.log("yay");
        banana.classList.remove("ramama");
        result.classList.add("ramama");
        intro.classList.add("ramama");
      } else {
        console.log("poo");
        console.log(loading);
        result.classList.remove("ramama");
        banana.classList.add("ramama");
        intro.classList.add("ramama");
        showGiphs(dataArray);
      }
    });

  function showGiphs(dataArray) {
    let HTMLPayload = "";

    for (let i = 0; i < dataArray.length; i++) {
      const img = `
        <div class="grid-item">
          <img src="${dataArray[i].images.original.url}" />
        </div>`;
      HTMLPayload += img;
    }

    result.innerHTML = HTMLPayload;
  }
}
