const table = document.querySelector("table")
const showOrderDiv = document.querySelector("#showOrderDiv")


table.addEventListener('click', async (e) => {
  const x = e.target.childNodes[0].parentNode;
  const lastId = e.path[1].querySelector('td').innerText;
  if (x.id === `tbButtonDel${lastId}`) {
    const delRequest = await fetch(`/admin/delete/${lastId}`)
    if (delRequest.status === 200) {
      const deleted = e.target.closest("tr")
      deleted.remove()
    }
  }

  if (x.id === `tbButtonView${lastId}`) {
    const showOrder = await fetch(`/admin/show/${lastId}`)
    const resultshowOrder = await showOrder.text()
    showOrderDiv.innerHTML = resultshowOrder
  }
})


//document.body.innerHTML += books



