const addPlayerForm = document.querySelector('#addPlayer');
const modalWindow = document.querySelector('.players')

// adding new player
addPlayerForm.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    e.preventDefault();
    const newPlayer = document.createElement('div')
    modalWindow.appendChild(newPlayer)
    newPlayer.innerHTML = playerTemplate;
  }
})

// deleting player
addPlayerForm.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    e.preventDefault();
    const postParent = e.target.closest('.rowPlayer')
    postParent.remove()
  }

})

const playerTemplate = `<div class="rowPlayer d-flex flex-column align-items-center"><span class="numb"></span> 
          <p>
            <input class="form-control" style="width: 50px; display: inline-block;" type="text" name="number" placeholder="№">
            <input class="form-control" style="width: 250px; display: inline-block;" type="text" name="namePlayer" placeholder="Фамилия/надпись">
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

          <div style="padding: 0 20px 10px;">
            <label style="width: 250px; text-align: left; cursor: pointer;"><input type="checkbox" name="printFIO" data-price="150" data-price2="150"> Нанесение фамилии <sup>+150 руб.</sup> </label>
            <label style="width: 300px; text-align: left; cursor: pointer;"><input type="checkbox" name="printNumber" data-price="200" data-price2="200"> Нанесение номера на спине <sup>+200 руб.</sup></label><br><br>

            <label><input type="checkbox" name="shirt" checked="checked" data-price="0"> Футболка</label>
            <label><input type="checkbox" name="short" data-price="0"> Шорты</label>
            <label><input type="checkbox" name="gaiter" data-price="0"> Гетры</label>
            <!-- <label class="hidden"><input class="partner" type="checkbox" name="goalstream" data-price="0" /> Goalstream</label> -->
          </div>
          <p><button class="add btn btn btn-green btn-xl" style="outline: none;">Добавить игрока</button></p>
        <span class="del">Удалить</span></div>
`
