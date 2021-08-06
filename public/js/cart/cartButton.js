// кнопка в корзину
const toCartButton = document.querySelector('.not_in_cart')
//форма выбора воротника
const { colarType } = document.forms;
// выбранный воротник ?
let selectedColar;
colarType.addEventListener('change', (e) => {
  selectedColar = e.target.value
})
// форма выбора рукава
const { sleeveType } = document.forms;
// выбранный рукав ?
let selectedSleeve;
sleeveType.addEventListener('change', (e) => {
  selectedSleeve = e.target.value
})
// див выбранного основного цвета
const selectedPrimaryColorForm = document.querySelector('#primaryColor')
// выбранный цвет в формате  rgb(152, 163, 162);
const selectedPrimaryColor = selectedPrimaryColorForm.style.background
// див выбранного доп цвета
const selectedSecondaryColorForm = document.querySelector('#secondaryColor')
// выбранный доп цвет в формате rgb(152, 163, 162);
const selectedSecondaryColor = selectedSecondaryColorForm.style.background || 'none'



toCartButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const usersItemDesignForTshirt = { selectedColar, selectedSleeve, selectedPrimaryColor, selectedPrimaryColor }
  const usersItemDesignSocks = { selectedPrimaryColor }
  const usersItemDesignShorts = { selectedPrimaryColor, selectedSecondaryColor }

  if (toCartButton.classList.contains(shirt_to_cart)) {
    localStorage.setItem('in cart', usersItemDesignForTshirt)
  }
  if (toCrtButton.classList.contains(socks_to_cart)) {
    localStorage.setItem('in cart', usersItemDesignSocks)
  }
  if (toCartButton.classList.contains(shorts_to_cart)) {
    localStorage.setItem('in cart', usersItemDesignShorts)
  }
})


