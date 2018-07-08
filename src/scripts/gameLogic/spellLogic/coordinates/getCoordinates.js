import * as Constants from '../../constants';

export default function getCoordinates(x, y, start, spell, distance) {
  let newX = x;
  let newY = y;
  let distancePart;
  if (x >= distance - distance / 4) {
    distancePart = 4;
  } else if (x >= distance / 2) {
    distancePart = 3;
  } else if (x <= distance / 4) {
    distancePart = 1;
  } else {
    distancePart = 2;
  }

  switch (spell.type) {
    case 'flying':
      if (newX >= distance / 2 - distance / 12 && newX <= distance / 2 + distance / 12) {
        newY -= 0;
      } else if (start.type === 'enemy') {
        switch (distancePart) {
          case 1:
            newY += spell.step.y * Constants.PX;
            break;
          case 2:
            newY += spell.step.y * (Constants.PX / 2);
            break;
          case 3:
            newY -= spell.step.y * (Constants.PX / 2);
            break;
          case 4:
            newY -= spell.step.y * Constants.PX;
            break;
        }
      } else if (start.type === 'player') {
        switch (distancePart) {
          case 1:
            newY -= spell.step.y * Constants.PX;
            break;
          case 2:
            newY -= spell.step.y * (Constants.PX / 2);
            break;
          case 3:
            newY += spell.step.y * (Constants.PX / 6);
            break;
          case 4:
            newY += spell.step.y * (Constants.PX / 2);
            break;
        }
      }
      break;
    case 'straight':
      newY += spell.step.y * Constants.PX;
      break;
    case 'jiggling':
      newY += spell.step.y * Constants.PX;
      spell.step.y *= -1;
      break;
    case 'drop':
      newY += spell.step.y * Constants.PX;
      break;
  }
  if (start.type === 'player') {
    newX += spell.step.x;
  } else newX -= spell.step.x;
  return [newX, newY];
}
