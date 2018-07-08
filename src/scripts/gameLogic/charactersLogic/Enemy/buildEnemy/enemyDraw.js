import getPart from './getPart';
import getEnemy from './getEnemy';

export default async function enemyDraw() {
  const enemy = await getEnemy();
  const name = `${enemy.adj} ${enemy.type} ${enemy.name}`;
  const head = getPart(enemy, 'head');
  const body = getPart(enemy, 'body');
  const weapon = getPart(enemy, 'weapon');
  const legs = getPart(enemy, 'legs');
  const build = {
    head,
    body,
    weapon,
    legs
  };
  return [name, build];
}
