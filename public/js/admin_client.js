const table = document.querySelector("table")
const showOrderButton = document.querySelector("#showOrderButton")

table.addEventListener('click', async (e) => {
  const x = e.target.childNodes[0].parentNode;
  const lastId = e.path[1].querySelector('td').innerText;
  if (x.id === `tbButtonDel${lastId}`) {
    const delRequest = await fetch(`/admin/delete/${lastId}`)
    if (delRequest.status === 200) {
      // e.target.remove()
      const deleted = e.target.closest("tr")
      deleted.remove()
    }
  }
})

showOrderButton.addEventListener('click', (e)=>{
  
})



// chat.addEventListener('click', async (e) => {
//   if (e.target.classList.contains('deleteMessage')) { // проверяем была ли нажата кнопка 'deleteMessage'
//     // console.log(e.target.parentNode.id);
//     const delRequest = await fetch(`/text/delete/${e.target.parentNode.id}`); // отправляем фетч с ид кнопки на ручку '/delete/:id'
//     // console.log(delRequest);
//     if (delRequest.status === 200) { // если ручка в ответ отправляет 200, значит удаление прошло успешно и удаляем элемент со страницы
//       e.target.parentNode.remove();
//     }
//   }
// });
