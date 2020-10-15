const inputToggle = document.querySelector('#theme-switch-toggle')

inputToggle.addEventListener('change', onInputToggleChecked)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onInputToggleChecked  (event) {
    if (event.currentTarget.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT)
    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK)    
    }
    return inputToggle;
}
export { onInputToggleChecked };

