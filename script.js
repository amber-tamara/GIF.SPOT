// lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh;

// var xhr = fetch(
//   "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh&limit=5"
// );
// xhr.done(function (data) {
//   console.log("success got data", data);
// });

const gifForm = document.querySelector("#gif-form");
gifForm.addEventListener("keyup", fetchGiphs);
const result = document.querySelector(".grid");

function fetchGiphs(e) {
  e.preventDefault();
  const searchTerm = document.querySelector(".search").value;
  fetch(
    `http://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=10&api_key=lceU9yKlVaHVuU0UMn3398cd9EhBj6Jh`
  )
    .then((response) => response.json())
    .then((res) => res.data)
    .then((data) => {
      let dataArray = data;

      showGiphs(dataArray);
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
