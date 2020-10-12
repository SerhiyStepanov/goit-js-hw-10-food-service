import itemsTemplate from '../template/template-items.hbs'
import menuItems from '../menu.json'

const menuGaleryItems = document.querySelector('.js-menu')
const markupItemsTemplate = itemsTemplate(menuItems)

menuGaleryItems.insertAdjacentHTML('beforeend', markupItemsTemplate)
console.log(itemsTemplate(menuItems))