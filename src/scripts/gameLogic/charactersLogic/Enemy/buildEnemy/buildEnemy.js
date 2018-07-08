export default function buildEnemy(enemies, partName, enemy) {
  new Promise(resolve => {
    let part;
    while (!part) {
      part = enemies[partName][Math.round(Math.random() * enemies[partName].length)];
      if (part) {
        enemy[partName] = part;
        resolve(part);
      }
    }
  });
}
