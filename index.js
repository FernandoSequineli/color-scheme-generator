const resultsEl = document.getElementById("results-el");
const resultsHex = document.getElementById("res-hex");
const url = "https://www.thecolorapi.com";
let hex = "031D9F";
let mode = "analogic";
let htmlRes = "";
let htmlHex = "";

document.getElementById("form-el").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputColor = document.getElementById("input-color").value.slice(1);
  const selectSeed = document.getElementById("seedColor").value;
  render(inputColor, selectSeed);
  htmlRes = "";
  htmlHex = "";
});

function render(hex, mode) {
  fetch(`${url}/scheme?hex=${hex}&format=json&mode=${mode}&count=5`)
    .then((res) => res.json())
    .then((data) => {
      for (const color of data.colors) {
        htmlRes += `
        <div class="res-color" style="background-color:${color.hex.value}"></div>`;
        htmlHex += `
      <div class="res-color">
            <p class="res-color-style">${color.hex.value}</p>
        </div>
      `;
      }
      resultsEl.innerHTML = htmlRes;
      resultsHex.innerHTML = htmlHex;
    });
}

render(hex, mode);
