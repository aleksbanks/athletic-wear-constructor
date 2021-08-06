const allColors = document.querySelector('.colors')
const selectedColor = document.querySelector('#primaryColor')

document.addEventListener('click', async (e) => {
  if (e.target.parentNode.classList.contains('colors')) {
    selectedColor.classList.remove(...selectedColor.classList)
    selectedColor.classList.add(e.target.classList[0], 'selectedColor')
  }
})

const selectedColor1 = document.querySelector('#secondaryColor')
document.addEventListener('click', async (e) => {
  if (e.target.parentNode.classList.contains('colors')) {
    selectedColor1.classList.remove(...selectedColor1.classList)
    selectedColor1.classList.add(e.target.classList[0], 'selectedColor')
  }
})

