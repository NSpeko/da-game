import { SPELLLIST } from '../spells';

export default function getRandomSpell() {
  const spellNumber = Math.floor(Math.random() * SPELLLIST.length);
  return SPELLLIST[spellNumber];
}
