const colorObj = {
  color1: '#ffffff',
  color2: '#201600',
  color3: '#f3c449',
  color4: '#497c4f',
  color5: '#38683a',
  color6: '#b74642',
  color7: '#d86c43',
  color8: '#581f04',
  color9: '#c464a3',
  color10: '#d96b78',
  color11: '#364774',
  color12: '#6cb8c8',
  color13: '#5586ad',
  color14: '#8eaada',
  color15: '#111f40',
  color16: '#99c45a',
  color17: '#4b355f',
  color18: '#6564a9',
  color19: '#98a3a2',
  color20: '#989a9d',
  color21: '#4d5056',
};
const allColors = document.querySelector('.colors')
const selectedColor = document.querySelector('#primaryColor')
const selectedColor1 = document.querySelector('#secondaryColor')
window.primaryColor = false;
window.secondaryColor = false

document.addEventListener('click', async (e) => {
  if (e.target.parentNode.classList.contains('colors') && window.primaryColor) {
    selectedColor.classList.remove(...selectedColor.classList)
    selectedColor.classList.add(e.target.classList[0], 'selectedColor')
    const color = e.target.classList[0];
    const firstColor = document.getElementsByClassName('firstColor');
    for (let i = 0; i < firstColor.length; i++) {
      firstColor[i].style.fill = colorObj[color];
    }
  }
})


document.addEventListener('click', async (e) => {
  if (e.target.parentNode.classList.contains('colors') && window.secondaryColor) {
    selectedColor1.classList.remove(...selectedColor1.classList)
    selectedColor1.classList.add(e.target.classList[0], 'selectedColor')
    const color = e.target.classList[0];
    const secondColor = document.getElementsByClassName('secondColor');
    for (let i = 0; i < secondColor.length; i++) {
      secondColor[i].style.fill = colorObj[color];
    }
  }
})

selectedColor.addEventListener('click', () => {
  window.primaryColor = true
  window.secondaryColor = false
})

selectedColor1.addEventListener('click', () => {
  window.secondaryColor = true
  window.primaryColor = false
})
