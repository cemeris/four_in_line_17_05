const board = document.querySelector('.game_board');
const template = document.querySelector('#game_cell');

for (let index = 0; index < 100; index++) {
  const new_cell = template.content.firstElementChild.cloneNode(true);
  new_cell.dataset.id = index;
  board.append(new_cell);
}