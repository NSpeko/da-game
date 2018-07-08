import { getJSON } from '../../../../global/getJSON';
import buildEnemy from './buildEnemy';

const monsterDictionaryUrl = '/resources/dictionaries/enemies-dictionary.json';

export default function getEnemy() {
  const parts = ['adj', 'type', 'name', 'head', 'body', 'weapon', 'legs'];
  const enemy = {};
  return getJSON(monsterDictionaryUrl)
    .then(
      data =>
        new Promise(resolve => {
          const { enemies } = JSON.parse(data);
          parts.forEach(partName => buildEnemy(enemies, partName, enemy));
          resolve(enemy);
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}
