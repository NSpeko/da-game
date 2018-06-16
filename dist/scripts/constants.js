const spellCanvas = document.getElementById('spellCanvas')
const spellContext = spellCanvas.getContext('2d');
const actorsCanvas = document.getElementById('actors')
const actorsContext = actorsCanvas.getContext('2d');
let CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;;
actorsCanvas.style.left = `-${CANVAS_WIDTH}px`;
const getScale = () => CANVAS_WIDTH / 800
let PX = getScale();
let CANVAS_HEIGHT = 350;
const NAME_SIZE = 25;
const HP_WRAP = 55;
const NAME_WRAP = 15;
const HP_LINE_HEIGHT = 10;
const EFFECT_DURATION = 50;
const LVL_SIZE = 50;
const LVL_WRAP = 10;

function rebuildCanvas() {
  CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;
  PX = getScale();
  CANVAS_HEIGHT = 350 * PX;
  WRAP = CANVAS_WIDTH / 15;
  VERTICAL_WRAP = CANVAS_HEIGHT / 3;
  HEAD_WIDTH = ENEMY_WIDTH / 2.5;
  HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
  BODY_WIDTH = ENEMY_WIDTH;
  BODY_HEIGHT = ENEMY_HEIGHT / 2;
  WEAPON_WIDTH = ENEMY_WIDTH / 2;
  WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
  LEGS_WIDTH = ENEMY_WIDTH / 1.5;
  LEGS_HEIGHT = ENEMY_HEIGHT / 3;
  actorsCanvas.style.left = `-${CANVAS_WIDTH}px`;
  spellCanvas.width = CANVAS_WIDTH;
  spellCanvas.height = CANVAS_HEIGHT;
  actorsCanvas.width = CANVAS_WIDTH;
  actorsCanvas.height = CANVAS_HEIGHT;
  if (ENEMY) ENEMY.rebuild(CANVAS_WIDTH - ENEMY_WIDTH - 4 * WRAP, CANVAS_HEIGHT - ENEMY_HEIGHT - 0.8 * VERTICAL_WRAP);
  if (PLAYER) PLAYER.rebuild(WRAP / 3, CANVAS_HEIGHT - PLAYER_HEIGHT - VERTICAL_WRAP);

}
let PLAYER_WIDTH = 150;
let PLAYER_HEIGHT = 150;
let ENEMY_WIDTH = 1.3 * PLAYER_WIDTH;
let ENEMY_HEIGHT = 1.3 * PLAYER_HEIGHT;
let HEAD_WIDTH = ENEMY_WIDTH / 2.5;
let HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
let BODY_WIDTH = ENEMY_WIDTH;
let BODY_HEIGHT = ENEMY_HEIGHT / 2;
let WEAPON_WIDTH = ENEMY_WIDTH / 2;
let WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
let LEGS_WIDTH = ENEMY_WIDTH / 1.5;
let LEGS_HEIGHT = ENEMY_HEIGHT / 3;
let WRAP = CANVAS_WIDTH / 15;
let VERTICAL_WRAP = CANVAS_HEIGHT / 3;

const HEAL = 30;
const ATTACK = 60;
const ENEMY_PATH = `./resources/images/enemy`;
const MAX_HEAL_POINTS = 300 * PX;

const PLAYER_NUM = 1;
const ENEMY_NUM = 1;
const TASKSLIST = ['counting', 'translation'];

let PLAYER = null;
let ENEMY = null;