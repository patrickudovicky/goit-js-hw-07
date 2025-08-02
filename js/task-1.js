const listCategories = document.querySelector('#categories');

const itemCategories = listCategories.querySelectorAll('.item')

console.log (`Number of categories : ${itemCategories.length}`);

itemCategories.forEach( item => {
const title = item.querySelector('h2').textContent;
const countElements = item.querySelectorAll('ul li').length;

console.log(`Category : ${title}`);
console.log( `Elements : ${countElements}`);
})

