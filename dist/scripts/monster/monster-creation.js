const enemyCreationFolder = document.currentScript.src.split('/').slice(0, -1).join('/');
const monsterDictionaryUrl = `${enemyCreationFolder}/enemies-dictionary.json`;

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
        const enemies = JSON.parse(data).enemies;
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
  const headSrc = `${ENEMY_PATH}/head/head_${enemy.head}.png`;
  let head = new Image();
  head.width = HEAD_WIDTH;
  head.heigth = HEAD_HEIGHT;
  head.src = headSrc;
  const bodySrc = `${ENEMY_PATH}/torso/torso_${enemy.body}.png`;
  let body = new Image();
  body.width = BODY_WIDTH;
  body.heigth = BODY_HEIGHT;
  body.src = bodySrc;
  const weaponSrc = `${ENEMY_PATH}/weapon/weapon_${enemy.weapon}.png`;
  let weapon = new Image();
  weapon.width = WEAPON_WIDTH;
  weapon.heigth = WEAPON_HEIGHT;
  weapon.src = weaponSrc;
  const legsSrc = `${ENEMY_PATH}/legs/legs_${enemy.legs}.png`;
  let legs = new Image();
  legs.width = LEGS_WIDTH;
  legs.heigth = LEGS_HEIGHT;
  legs.src = legsSrc;
  const build = {
    head: head,
    body: body,
    weapon: weapon,
    legs: legs
  }
  return [name, build]
}