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
    document.getElementsByClassName('game-menu')[0].style.display = 'none'
    document.getElementById('logInModalOpener').click();
  } else {
    $('body').toggleClass('bg-secondary');
  }
  pageLoaderSpinnerFunction();
}

window.onresize = Constants.rebuildCanvas();
setInterval(function () {
  Constants.rebuildCanvas();
  document.getElementsByClassName('game-menu')[0].style.top = '-' + Constants.CANVAS_HEIGHT + 'px';
  if (ENEMY) ENEMY.rebuild(
    Constants.CANVAS_WIDTH - ENEMY.image.width - Constants.WRAP * Constants.PX,
    Constants.CANVAS_HEIGHT - ENEMY.image.height - Constants.VERTICAL_WRAP * Constants.PX
  );
  if (PLAYER) PLAYER.rebuild(
    Constants.WRAP,
    Constants.CANVAS_HEIGHT - PLAYER.image.height - Constants.VERTICAL_WRAP * Constants.PX);
}, 500);

document.getElementById('menu').addEventListener('click', function () {
  document.getElementById('gameMenu').classList.toggle('hidden');
})