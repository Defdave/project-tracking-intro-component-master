const navsbar = document.querySelector('#navsbar')
const opennav = document.querySelector('#opennav')
const closenav = document.querySelector('#closenav')

opennav.addEventListener('click', () => {
    navsbar.style.display = 'block'
    opennav.style.display = 'none'
    closenav.style.display = 'block'
})

closenav.addEventListener('click', () => {
    navsbar.style.display = 'none'
    opennav.style.display = 'block'
    closenav.style.display = 'none'
})

