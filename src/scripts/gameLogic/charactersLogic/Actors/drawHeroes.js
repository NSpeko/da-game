import { createPlayer, createEnemy } from './creating';

export default function drawHeroes() {
  const hero = JSON.parse(localStorage.getItem('user'));
  if (hero && hero.gender && hero.name) {
    createPlayer(hero.gender, hero.name);
    createEnemy();
  }
}
