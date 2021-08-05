const shortsButton = document.querySelector('#shorts')

shortsButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/shorts')
  const result = await response.text();
  const shortsPage = document.querySelector('.item');
  shortsPage.innerHTML = result;
})

const shirtButton = document.querySelector('#tshirt')

shirtButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/tshirts')
  const result = await response.text();
  const shortsPage = document.querySelector('.item');
  shortsPage.innerHTML = result;
})

const socksButton = document.querySelector('#socks')

socksButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/socks')
  const result = await response.text();
  const shortsPage = document.querySelector('.item');
  shortsPage.innerHTML = result;
})

const cartButton = document.querySelector('#cart')

cartButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const response = await fetch('/cart')
  const result = await response.text();
  const shortsPage = document.querySelector('.item');
  shortsPage.innerHTML = result;
})
