// кнопка в корзину
const cartButton = document.querySelector('.not_in_cart')
//форма выбора воротника
const { colarType } = document.forms;
// выбранный воротник ?
const selectedColar = colarType.neck.id;
// форма выбора рукава
const { sleeveType } = document.forms;
// выбранный рукав ?
const selectedSleeve = sleeveType.sleeve.id;
// див выбранного основного цвета
const selectedPrimaryColorForm = document.querySelector('#primaryColor')
// выбранный цвет в формате  rgb(152, 163, 162);
const selectedPrimaryColor = selectedPrimaryColorForm.style.background
// див выбранного доп цвета
const selectedPrimaryColorForm = document.querySelector('#secondaryColor')
// выбранный доп цвет в формате rgb(152, 163, 162);
const selectedPrimaryColor = selectedPrimaryColorForm.style.background || 'none'



cartButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const usersItemDesignForTshirt = {selectedColar, selectedSleeve, selectedPrimaryColor, selectedPrimaryColor} 
  const usersItemDesignSocks = {selectedPrimaryColor }
  const usersItemDesignShorts = {selectedPrimaryColor, selectedPrimaryColor}
  
  if (cartButton.classList.contains(shirt_to_cart)){
    localStorage.setItem('in cart', usersItemDesignForTshirt)
  }
  if (cartButton.classList.contains(socks_to_cart)){
    localStorage.setItem('in cart', usersItemDesignSocks)
  }
  if (cartButton.classList.contains(shorts_to_cart)){
    localStorage.setItem('in cart', usersItemDesignShorts)
  }
})
