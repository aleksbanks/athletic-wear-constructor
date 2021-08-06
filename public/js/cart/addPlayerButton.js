const modalWindow = document.querySelector('.players')
const playerTemplate = `<div class="first rowPlayer d-flex flex-column align-items-center"
style="position: relative; padding-top: 15px; border: 1px dashed #CCC; background: #f5f5f5;">
<p>
  <input name="number" class="form-control" style="width: 50px; display: inline-block;" type="text"
    name="number" placeholder="№">
  <input name="lastName" class="form-control" style="width: 250px; display: inline-block;" type="text"
    name="namePlayer" placeholder="Фамилия/надпись">
  <select name="size" required="" class="form-control" style="width: 110px; display: inline-block;">
    <option selected="" disabled="">Размер</option>
    <option value="YS">YXS (86-104)</option>
    <option value="YS">YS (104-116)</option>
    <option value="YM">YM (116-128)</option>
    <option value="YL">YL (128-140)</option>
    <option value="YL">YXL (140-152)</option>
    <option value="YL">Y2XL (152-164)</option>
    <option value="S">S (46)</option>
    <option value="M">M (48-50)</option>
    <option value="L">L (50-52)</option>
    <option value="XL">XL (52-54)</option>
    <option value="XXL">XXL (56-58)</option>
    <option value="XXXL">XXXL (60-62)</option>
  </select>
</p>
<p><button class="add btn btn btn-green btn-xl addPlayer" style="outline: none;">Добавить
    игрока</button></p>
    <span class="del">Удалить</span></div>
</div>
`

// adding new player
modalWindow.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    e.preventDefault();
    const newPlayer = document.createElement('div')
    modalWindow.appendChild(newPlayer)
    newPlayer.innerHTML = playerTemplate;
  }
})

// deleting player
modalWindow.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    e.preventDefault();
    const postParent = e.target.closest('.rowPlayer')
    postParent.remove()
  }

})

// на кнопку продолжить
// all information on local storage

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('closeplayers')) {
    let arrayOfPlayers = []
    e.preventDefault();
    const playerInfo = document.querySelectorAll('.rowPlayer');
    console.log(playerInfo);
    const logo = playerInfo[0].querySelector(".logo").value
    arrayOfPlayers.push({ logo })
    for (let i = 0; i < playerInfo.length; i++) {
      console.log(playerInfo.item(i));
      const number = playerInfo.item(i).querySelector('.number');
      const lastName = playerInfo.item(i).querySelector(".lastName");
      const size = playerInfo.item(i).querySelector(".size");
      arrayOfPlayers.push({ number, lastName, size })
    }
    if (localStorage.getItem('order')) {
      localStorage.order = JSON.stringify(arrayOfPlayers);
    } else {
    localStorage.setItem('order', JSON.stringify(arrayOfPlayers))}
  }

})


