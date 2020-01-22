let fieldEl = document.getElementById("message");
let greenEl = document.getElementById("green");
let pinkEl = document.getElementById("pink");


fieldEl.addEventListener("keyup", function (event) {
        greenEl.textContent = event.target.value;
        pinkEl.textContent = event.target.value;
})