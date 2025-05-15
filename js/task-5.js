function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const change = document.querySelector(`.change-color`)
const colorSpan = document.querySelector(`.color`)
const body = document.querySelector(`body`)

change.addEventListener(`click`, newColor)
function newColor() {
 const color = getRandomHexColor()
 body.style.backgroundColor = color;
  colorSpan.textContent = color;
}