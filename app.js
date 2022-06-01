const elDisplay = document.querySelector('.display');
const elButton = document.querySelector('.button');
const elClear = document.querySelector('.clear')

elButton.addEventListener('click', () => {
    elDisplay.value = +(elDisplay.value) + 1;
})

elClear.addEventListener('click', () => {
    elDisplay.value = ''
})