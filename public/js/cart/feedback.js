const { feedbackForm } = document.forms;

const username = feedbackForm.name.value;
const phone = feedbackForm.phone.value;
const email = feedbackForm.email.value;
const comment = feedbackForm.comment.value;

feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const orderTshirt = localStorage.getItem('tshirt')
  const orderShorts = localStorage.getItem('shorts')
  const orderSocks = localStorage.getItem('socks')
  const orderAllPlayers = localStorage.getItem('order')
  const orderItems = [orderAllPlayers, orderTshirt, orderShorts, orderSocks]
  const feedbackResponse = await fetch('/orders/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, phone, email, comment, orderItems })
  })
  localStorage.clear()
})
