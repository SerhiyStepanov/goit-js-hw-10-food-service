import itemsTemplate from '../template/template-items.hbs'
import menuItems from '../menu.json'

const menuGaleryItems = document.querySelector('.js-menu')
const markupItemsTemplate = itemsTemplate(menuItems)

export default menuGaleryItems.insertAdjacentHTML('beforeend', markupItemsTemplate)

