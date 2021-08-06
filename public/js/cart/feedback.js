const { feedbackForm } = document.forms;

const username = feedbackForm.name.value;
const phone = feedbackForm.phone.value;
const email = feedbackForm.email.value;
const comment = feedbackForm.comment.value;

feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const orderItems = localStorage.getItem('localStorage.getItem')
  const feedbackResponse = await fetch('путь', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, phone, email, comment, orderItems })
  })
})
