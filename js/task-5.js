function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnElem: document.querySelector('.change-color'),
  bodyElem: document.querySelector('body'),
  spanElem: document.querySelector('.color'),
}
refs.btnElem.addEventListener('click', btnElemHandler);
function btnElemHandler() {
  const randomColor = getRandomHexColor();
  refs.bodyElem.style.backgroundColor = randomColor;
  refs.spanElem.textContent = randomColor;
}