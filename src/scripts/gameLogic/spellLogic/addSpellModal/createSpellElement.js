import * as Constants from '../../constants';

export default function createSpellElement(spell) {
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
