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
  ENEMY.name = name;
  ENEMY.head = enemy.head;
  ENEMY.body = enemy.body;
  ENEMY.weapon = enemy.weapon;
  ENEMY.legs = enemy.legs;
}

enemyDraw();
