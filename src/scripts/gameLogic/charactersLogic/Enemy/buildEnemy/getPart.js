import * as Constants from '../../../constants';

export default function getPart(enemy, partName) {
  const partSrc = `${Constants.ENEMY_PATH}/${partName}/${partName}_${enemy[partName]}.png`;
  const part = new Image();
  part.width = Constants[`${partName.toUpperCase()}_WIDTH`] * Constants.PX;
  part.heigth = Constants[`${partName.toUpperCase()}_HEIGHT`] * Constants.PX;
  part.src = partSrc;
  return part;
}
