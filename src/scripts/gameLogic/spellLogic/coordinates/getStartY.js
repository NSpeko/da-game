export default function getStartY(target, spell) {
  let y = target.place.y + target.image.height / 4;
  if (spell.type === 'drop') {
    y = 0;
  }
  return y;
}
