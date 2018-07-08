import getRandomSpell from '../spellSupport/getRandomSpell';
import createSpell from './createSpell';
import { PLAYER, ENEMY } from '../../charactersLogic/Actors/creating';

export default function enemyAttack() {
  const randomSpell = getRandomSpell();
  createSpell(randomSpell, ENEMY, PLAYER);
}
