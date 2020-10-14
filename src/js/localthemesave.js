const inputChangeTheme = document.querySelector('#theme-switch-toggle')
console.log(inputChangeTheme.checked)

inputChangeTheme.addEventListener('change', onInputChecked)

function onInputChecked(event) {
console.log(event.target.checked)
}