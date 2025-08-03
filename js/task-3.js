const inputItem = document.querySelector('#name-input');
const outputItem = document.querySelector('#name-output');

inputItem.addEventListener('input', inputFunction);
function inputFunction(){
    const username = this.value.trim();
  outputItem.textContent = username || 'Anonymous';
}
