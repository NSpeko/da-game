import spellAttack from './spellAttack';
import stopAnimation from '../../../global/stopAnimation';
import * as Constants from '../../constants';

export default function endSpell(spell, target, spellInterval, x, y, spellContext) {
  spellAttack(spell, target);
  stopAnimation(
    spellInterval,
    x,
    y,
    spellContext,
    spell.width * Constants.PX,
    spell.height * Constants.PX
  );
}
