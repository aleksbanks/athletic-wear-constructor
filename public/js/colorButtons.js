const allColors = document.querySelector('.colors')
const selectedColor = document.querySelector('.selectedColor')

document.addEventListener('click', async (e) => {
  if (e.target.parentNode.classList.contains('colors')) {
    console.log(e.target);
    delete selectedColor.classList[0].background
    selectedColor.classList.add(e.target.classList[0])
  }
})
