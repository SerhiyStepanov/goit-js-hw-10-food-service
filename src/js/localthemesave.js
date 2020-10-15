const inputChangeTheme = document.querySelector('#theme-switch-toggle')

inputChangeTheme.addEventListener('change', onInputChecked)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

getInputValue()

// console.log(JSON.stringify(inputChangeTheme.checked))
 
function onInputChecked(event) {
    const value = event.target.checked
    if (value) {
     localStorage.setItem('checked', JSON.stringify(value) )
    }
    else {
        localStorage.removeItem('checked')
    }
}
    
function getInputValue() {
    const saveValue = localStorage.getItem('checked')
    if (saveValue) {
        console.log(saveValue)
        inputChangeTheme.checked = saveValue;
        document.body.classList.add(Theme.DARK)
    }
    return JSON.parse(saveValue)
}

