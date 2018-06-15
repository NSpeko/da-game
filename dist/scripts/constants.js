const spellCanvas = document.getElementById('spellCanvas')
const spellContext = spellCanvas.getContext('2d');
const actorsCanvas = document.getElementById('actors')
const actorsContext = actorsCanvas.getContext('2d');
let CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;;
actorsCanvas.style.left = `-${CANVAS_WIDTH}px`;
const getScale = () => CANVAS_WIDTH / 800
let PX = getScale();
let CANVAS_HEIGHT = 350 * PX;

function rebuildCanvas() {
  CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;
  PX = getScale();
  CANVAS_HEIGHT = 350 * PX;
  HEAD_WIDTH = ENEMY_WIDTH / 2.5;
  HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
  BODY_WIDTH = ENEMY_WIDTH;
  BODY_HEIGHT = ENEMY_HEIGHT / 2;
  WEAPON_WIDTH = ENEMY_WIDTH / 2;
  WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
  LEGS_WIDTH = ENEMY_WIDTH / 1.5;
  LEGS_HEIGHT = ENEMY_HEIGHT / 3
  HEAL = 30 * PX;
  ATTACK = 60 * PX;
  actorsCanvas.style.left = `-${CANVAS_WIDTH}px`;
  spellCanvas.width = CANVAS_WIDTH;
  spellCanvas.height = CANVAS_HEIGHT;
  actorsCanvas.width = CANVAS_WIDTH;
  actorsCanvas.height = CANVAS_HEIGHT;
  if (ENEMY) ENEMY.rebuild(CANVAS_WIDTH - ENEMY_WIDTH - WRAP, CANVAS_HEIGHT - ENEMY_HEIGHT);
  if (PLAYER) PLAYER.rebuild(WRAP, CANVAS_HEIGHT - PLAYER_HEIGHT);
}
let PLAYER_WIDTH = 200 * PX;
let PLAYER_HEIGHT = 200 * PX;
let ENEMY_WIDTH = 1.3 * PLAYER_WIDTH;
let ENEMY_HEIGHT = 1.3 * PLAYER_HEIGHT;
let HEAD_WIDTH = ENEMY_WIDTH / 2.5;
let HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
let BODY_WIDTH = ENEMY_WIDTH;
let BODY_HEIGHT = ENEMY_HEIGHT / 2;
let WEAPON_WIDTH = ENEMY_WIDTH / 2;
let WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
let LEGS_WIDTH = ENEMY_WIDTH / 1.5;
let LEGS_HEIGHT = ENEMY_HEIGHT / 3
let HEAL = 30 * PX;
let ATTACK = 60 * PX;
let WRAP = 0 * PX;

const ENEMY_PATH = `./resources/images/enemy`;;
const MAX_HEAL_POINTS = 300 * PX;

const PLAYER_NUM = 1;
const ENEMY_NUM = 1;

let PLAYER = null;
let ENEMY = null;