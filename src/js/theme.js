const inputToggle = document.querySelector('#theme-switch-toggle')
// console.log(inputToggle)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

inputToggle.addEventListener('change', onInputToggleChecked)

function onInputToggleChecked  (event) {
    if (event.currentTarget.checked) {
        // console.log(event.currentTarget.checked)
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT)
    } else {
        // console.log(event.currentTarget.checked)
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK)    
    }
    return inputToggle;
}
export { onInputToggleChecked };

