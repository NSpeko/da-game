import { PLAYER, ENEMY } from '../../charactersLogic/Actors/creating';
import { SPELLLIST } from '../spells';
import createSpellElement from './createSpellElement';
import taskWindowLoader from '../../../taskModal/taskWindowLoader';

export default function addSpellButtons() {
  const spellMenu = document.getElementById('spellMenu');
  const healMenu = document.getElementById('healMenu');
  SPELLLIST.forEach(el => {
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

addSpellButtons();
