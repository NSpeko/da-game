import { PLAYER, ENEMY } from '../../charactersLogic/Actors/creating';
import * as Constants from '../../constants';
import initSound from '../spellSupport/initSound';
import stopSound from '../spellSupport/stopSound';
import endSpell from './endSpell';
import getStartX from '../coordinates/getStartX';
import getStartY from '../coordinates/getStartY';
import getCoordinates from '../coordinates/getCoordinates';

export default function createSpell(spell, start, target) {
  initSound(spell);
  let x = getStartX(start, target, spell);
  let y = getStartY(target, spell);
  let distance = Math.abs(
    start.place.x - target.place.x + ENEMY.image.width / 2 + PLAYER.image.width / 2
  );
  if (start.type === 'player') {
    distance += target.image.width / 2;
  }
  if (spell.type === 'heal') {
    start.heal(spell);
    stopSound(spell);
  } else {
    const spellInterval = setInterval(() => {
      Constants.spellContext.clearRect(
        x,
        y,
        spell.width * Constants.PX,
        spell.height * Constants.PX
      );
      [x, y] = getCoordinates(x, y, start, spell, distance);
      Constants.spellContext.drawImage(
        spell.image,
        x,
        y,
        spell.width * Constants.PX,
        spell.height * Constants.PX
      );
      if (start.type === 'player') {
        if (x >= target.place.x && y >= target.place.y) {
          endSpell(spell, target, spellInterval, x, y, Constants.spellContext);
        }
      } else if (x <= target.place.x + target.image.width / 2 && y >= target.place.y) {
        endSpell(spell, target, spellInterval, x, y, Constants.spellContext);
      }
    }, 24);
  }
}
