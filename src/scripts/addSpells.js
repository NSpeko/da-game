import * as Constants from './constants';
import { SPELLLIST } from './spells';
import { taskWindowLoader } from './modals';
import { PLAYER, ENEMY } from './actors';

function addSpellButtons() {
  const spellMenu = document.getElementById('spellMenu');
  const healMenu = document.getElementById('healMenu');
  SPELLLIST.forEach((el) => {
    const spellElement = createSpellElement(el);
    if (el.type === 'heal') {
      spellElement.addEventListener('click', () => {
        taskWindowLoader(el, PLAYER, PLAYER);
      });
      healMenu.appendChild(spellElement);
    } else {
      spellElement.addEventListener('click', () => {
        taskWindowLoader(el, PLAYER, ENEMY);
      });
      spellMenu.appendChild(spellElement);
    }
  });
}

function createSpellElement(spell) {
  const spellElement = document.createElement('button');
  spellElement.setAttribute('class', 'btn btn-primary btn-lg btn-block');
  spellElement.textContent = spell.name;
  const spellImage = spell.image;
  spellImage.width = 30 * Constants.PX;
  spellImage.height = 30 * Constants.PX;
  spellElement.appendChild(spellImage);
  spellElement.setAttribute('data-toggle', 'modal');
  spellElement.setAttribute('data-target', '#solveGameTaskModal');
  return spellElement;
}

addSpellButtons();
