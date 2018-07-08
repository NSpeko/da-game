import enemyDraw from '../Enemy/buildEnemy/enemyDraw';
import * as Constants from '../../constants';
import Player from '../Player/Player';
import Enemy from '../Enemy/Enemy';
import drawHeroes from './drawHeroes';

let ENEMY;
let PLAYER;

function createPlayer(gender, name) {
  const playerImg = new Image();
  const genderNum = `PLAYER_${gender.toUpperCase()}_NUM`;
  const playerNumber = Math.ceil(Math.random() * Constants[genderNum]);
  playerImg.src = `${Constants.PLAYER_PATH}/hero_${gender}_${playerNumber}.png`;
  playerImg.width = Constants.PLAYER_WIDTH * Constants.PX;
  playerImg.height = Constants.PLAYER_HEIGHT * Constants.PX;
  PLAYER = new Player(
    Constants.WRAP * Constants.PX,
    Constants.CANVAS_HEIGHT - Constants.PLAYER_HEIGHT - Constants.VERTICAL_WRAP * Constants.PX,
    'player',
    playerImg,
    name
  );
}

function createEnemy() {
  const enemyImg = new Image();
  enemyImg.width = Constants.ENEMY_WIDTH * Constants.PX;
  enemyImg.height = Constants.ENEMY_HEIGHT * Constants.PX;
  enemyDraw().then(([name, build]) => {
    ENEMY = new Enemy(
      Constants.CANVAS_WIDTH - Constants.ENEMY_WIDTH - Constants.WRAP * Constants.PX,
      Constants.CANVAS_HEIGHT - Constants.ENEMY_HEIGHT - Constants.VERTICAL_WRAP * Constants.PX,
      'enemy',
      enemyImg,
      name,
      build
    );
  });
}

drawHeroes();

export { PLAYER, ENEMY, createEnemy, createPlayer };
