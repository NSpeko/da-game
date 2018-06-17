import * as Constants from './constants'
import {
  PLAYER,
  ENEMY
} from './actors'
import {
  pageLoaderSpinnerFunction
} from './spinner'

window.onload = function () {
  document.getElementsByClassName('game-menu')[0].style.top = '-' + Constants.CANVAS_HEIGHT + 'px';
  if (!localStorage.user) {
    document.getElementById('logInModalOpener').click();
  } else {
    $('body').toggleClass('bg-secondary');
    pageLoaderSpinnerFunction();
  }
}

window.onresize = Constants.rebuildCanvas();
setInterval(function () {
  Constants.rebuildCanvas();
  if (ENEMY) ENEMY.rebuild(
    Constants.CANVAS_WIDTH * Constants.PX - 3.2 * Constants.ENEMY_WIDTH * Constants.PX - Constants.WRAP * Constants.PX,
    Constants.CANVAS_HEIGHT * Constants.PX - Constants.ENEMY_HEIGHT * Constants.PX - 3.8 * Constants.VERTICAL_WRAP * Constants.PX
  );
  if (PLAYER) PLAYER.rebuild(
    Constants.WRAP * Constants.PX / 3,
    Constants.CANVAS_HEIGHT * Constants.PX - Constants.PLAYER_HEIGHT * Constants.PX - 4.5 * Constants.VERTICAL_WRAP * Constants.PX);
}, 500);

document.getElementById('menu').addEventListener('click', function () {
  document.getElementById('gameMenu').classList.toggle('hidden');
})