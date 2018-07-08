import * as Constants from './constants';
import {ENEMY, PLAYER} from './actors';
import pageLoaderSpinnerFunction from './spinner';

window.onload = () => {
    // When the user clicks the button, open the modal
    document.getElementById('logInModalOpener').onclick = function () {
        document.getElementById('logInModal').classList.toggle('not-displayed');
    };
// When the user clicks on <button> (x), close the modal
    document.getElementById('closeLogInModal').onclick = function () {
        document.getElementById('logInModal').classList.toggle('not-displayed');
    };
// When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target === document.getElementById('logInModal')) {
            document.getElementById('logInModal').classList.toggle('not-displayed');
        }
    };
    
    document.getElementsByClassName('game-menu')[0].style.top = `-${Constants.CANVAS_HEIGHT}px`;
    if (!localStorage.user) {
        document.getElementsByClassName('game-menu')[0].style.display = 'none';
        document.getElementById('logInModalOpener').click();
    } else {
        $('body').toggleClass('bg-secondary');
    }
    pageLoaderSpinnerFunction();
};

window.onresize = Constants.rebuildCanvas();
setInterval(() => {
    Constants.rebuildCanvas();
    document.getElementsByClassName('game-menu')[0].style.top = `-${Constants.CANVAS_HEIGHT}px`;
    if (ENEMY) {
        ENEMY.rebuild(
            Constants.CANVAS_WIDTH - ENEMY.image.width - Constants.WRAP * Constants.PX,
            Constants.CANVAS_HEIGHT - ENEMY.image.height - Constants.VERTICAL_WRAP * Constants.PX
        );
    }
    if (PLAYER) {
        PLAYER.rebuild(
            Constants.WRAP,
            Constants.CANVAS_HEIGHT - PLAYER.image.height - Constants.VERTICAL_WRAP * Constants.PX
        );
    }
}, 500);

document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('gameMenu').classList.toggle('hidden');
});
