const inputItem = document.querySelector('#input');
const outputItem = document.querySelector('#output');

inputItem.addEventListener('input', inputFunction);
function inputFunction(){
    const username = this.value.trim();
  outputItem.textContent = username || 'Anonymous';
}
