import {
  getJSON
} from '../getJSON'
import * as Constants from '../constants'

const monsterDictionaryUrl = `/resources/dictionaries/enemies-dictionary.json`;

const buildEnemy = (enemies, partName, enemy) => new Promise((resolve) => {
  let part;
  while (!part) {
    part = enemies[partName][Math.round(Math.random() * enemies[partName].length)];
    if (part) {
      enemy[partName] = part;
      resolve(part);
    }
  }
});

const getEnemy = () => {
  const parts = ['adj', 'type', 'name', 'head', 'body', 'weapon', 'legs'];
  const enemy = {};
  return getJSON(monsterDictionaryUrl)
    .then(data =>
      new Promise((resolve) => {
        const enemies = JSON.parse(data)['enemies'];
        parts.forEach(partName => buildEnemy(enemies, partName, enemy));
        resolve(enemy);
      }))
    .catch((error) => {
      throw new Error(error);
    });
};

async function enemyDraw() {
  const enemy = await getEnemy();
  const name = `${enemy.adj} ${enemy.type} ${enemy.name}`;
  const headSrc = `${Constants.ENEMY_PATH}/head/head_${enemy.head}.png`;
  let head = new Image();
  head.width = Constants.HEAD_WIDTH * Constants.PX;
  head.heigth = Constants.HEAD_HEIGHT * Constants.PX;
  head.src = headSrc;
  const bodySrc = `${Constants.ENEMY_PATH}/torso/torso_${enemy.body}.png`;
  let body = new Image();
  body.width = Constants.BODY_WIDTH * Constants.PX;
  body.heigth = Constants.BODY_HEIGHT * Constants.PX;
  body.src = bodySrc;
  const weaponSrc = `${Constants.ENEMY_PATH}/weapon/weapon_${enemy.weapon}.png`;
  let weapon = new Image();
  weapon.width = Constants.WEAPON_WIDTH * Constants.PX;
  weapon.heigth = Constants.WEAPON_HEIGHT * Constants.PX;
  weapon.src = weaponSrc;
  const legsSrc = `${Constants.ENEMY_PATH}/legs/legs_${enemy.legs}.png`;
  let legs = new Image();
  legs.width = Constants.LEGS_WIDTH * Constants.PX;
  legs.heigth = Constants.LEGS_HEIGHT * Constants.PX;
  legs.src = legsSrc;
  const build = {
    head: head,
    body: body,
    weapon: weapon,
    legs: legs
  }
  return [name, build]
}

export {
  enemyDraw
}