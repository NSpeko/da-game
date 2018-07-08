export default function getStartX(start, target, spell) {
  let { x } = start.place;
  if (start.type === 'player') {
    x += start.image.width / 2;
  }
  if (spell.type === 'drop') {
    x = target.place.x;
  }
  return x;
}
