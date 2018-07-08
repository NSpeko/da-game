import stopSound from '../spellSupport/stopSound';

export default function spellAttack(spell, target) {
  stopSound(spell);
  target.damaged();
}
