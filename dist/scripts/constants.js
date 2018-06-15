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
  actorsCanvas.style.left = `-${CANVAS_WIDTH}px`;
  spellCanvas.width = CANVAS_WIDTH;
  spellCanvas.height = CANVAS_HEIGHT;
  actorsCanvas.width = CANVAS_WIDTH;
  actorsCanvas.height = CANVAS_HEIGHT;
  if (ENEMY) ENEMY.redraw();
  if (PLAYER) PLAYER.redraw();
}

const ENEMY_PATH = `./resources/images/enemy`;
const PLAYER_WIDTH = 200 * PX;
const PLAYER_HEIGHT = 200 * PX;
const ENEMY_WIDTH = 1.3 * PLAYER_WIDTH;
const ENEMY_HEIGHT = 1.3 * PLAYER_HEIGHT;
const HEAD_WIDTH = ENEMY_WIDTH / 2.5;
const HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
const BODY_WIDTH = ENEMY_WIDTH;
const BODY_HEIGHT = ENEMY_HEIGHT / 2;
const WEAPON_WIDTH = ENEMY_WIDTH / 2;
const WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
const LEGS_WIDTH = ENEMY_WIDTH / 1.5;
const LEGS_HEIGHT = ENEMY_HEIGHT / 3;
const MAX_HEAL_POINTS = 300 * PX;
const HEAL = 30 * PX;
const ATTACK = 60 * PX;
const WRAP = 0 * PX;

const PLAYER_NUM = 1;
const ENEMY_NUM = 1;

let PLAYER = null;
let ENEMY = null;