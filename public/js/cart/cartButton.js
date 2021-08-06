let color, secondary_color, colorSocks, colorShorts;
//форма выбора воротника
const { colarType } = document.forms;
// выбранный воротник 
let collar = 'r';
colarType.addEventListener('change', (e) => {
  colar = e.target.value
})
// форма выбора рукава
const { sleeveType } = document.forms;
// выбранный рукав ?
let sleeve = 'short';
sleeveType.addEventListener('change', (e) => {
  sleeve = e.target.value
})
// див выбранного основного цвета футболка
const selectedPrimaryColorFormShirt = document.querySelector('#primaryColorShirt')
// выбранный цвет в формате  rgb(152, 163, 162);
if (selectedPrimaryColorFormShirt) {

   color = selectedPrimaryColorFormShirt.style.background;
}
// див выбранного доп цвета футболка
const selectedSecondaryColorFormShirt = document.querySelector('#secondaryColorShirt')
// выбранный доп цвет в формате rgb(152, 163, 162);
if (selectedSecondaryColorFormShirt) {
   secondary_color = selectedSecondaryColorFormShirt.style.background;
}

//див выбранного основного цвета носки
const selectedPrimaryColorFormSocks = document.querySelector('#primaryColorSocks')
// выбранный цвет в формате  rgb(152, 163, 162);
if (selectedPrimaryColorFormSocks) {
   colorSocks = selectedPrimaryColorFormSocks.style.background;
}

// див выбранного основного цвета шорты
const selectedPrimaryColorFormShorts = document.querySelector('#primaryColorShorts')
// выбранный цвет в формате  rgb(152, 163, 162);
if (selectedPrimaryColorFormShorts) {
   colorShorts = selectedPrimaryColorFormShorts.style.background;
}



document.addEventListener('click', (e) => {

  if (e.target.classList.contains('not_in_cart')) {
    console.log(e.target);
    e.preventDefault();
    const usersItemDesignForTshirt = { collar, sleeve, color, secondary_color }
    const usersItemDesignSocks = { colorSocks }
    const usersItemDesignShorts = { colorShorts }

    if (e.target.classList.contains('shirt_to_cart')) {
      if (localStorage.getItem('tshirt')) {
        localStorage.tshirt = JSON.stringify(usersItemDesignForTshirt)
      } else {
        localStorage.setItem('tshirt', JSON.stringify(usersItemDesignForTshirt))
      }
    }
    if (e.target.classList.contains('socks_to_cart')) {
      if (localStorage.getItem('socks')) {
        localStorage.socks = usersItemDesignSocks;
      } else {
        localStorage.setItem('socks', JSON.stringify(usersItemDesignSocks))
      }
    }
    if (e.target.classList.contains('shorts_to_cart')) {
      if (localStorage.getItem('shorts')) {
        localStorage.shorts = usersItemDesignShorts;
      } else {
        localStorage.setItem('shorts', JSON.stringify(usersItemDesignShorts))
      }
    }
  }
})


