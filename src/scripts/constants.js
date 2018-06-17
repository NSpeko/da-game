const spellCanvas = document.getElementById('spellCanvas')
const spellContext = spellCanvas.getContext('2d');
const actorsCanvas = document.getElementById('actors')
const actorsContext = actorsCanvas.getContext('2d');
let CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;
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
  PLAYER_WIDTH = 100 * PX;
  PLAYER_HEIGHT = 100 * PX;
  ENEMY_WIDTH = 1.5 * PLAYER_WIDTH;
  ENEMY_HEIGHT = 1.5 * PLAYER_HEIGHT;
  WRAP = CANVAS_WIDTH / 30;
  VERTICAL_WRAP = CANVAS_HEIGHT / 3;
  HEAD_WIDTH = ENEMY_WIDTH / 2.5;
  HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
  BODY_WIDTH = ENEMY_WIDTH;
  BODY_HEIGHT = ENEMY_HEIGHT / 2;
  WEAPON_WIDTH = ENEMY_WIDTH / 2;
  WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
  LEGS_WIDTH = ENEMY_WIDTH / 1.25;
  LEGS_HEIGHT = ENEMY_HEIGHT / 1.5;
  VERTICAL_WRAP = CANVAS_HEIGHT / 10;
  actorsCanvas.style.left = `-${CANVAS_WIDTH}px`;
  spellCanvas.width = CANVAS_WIDTH;
  spellCanvas.height = CANVAS_HEIGHT;
  actorsCanvas.width = CANVAS_WIDTH;
  actorsCanvas.height = CANVAS_HEIGHT;
  if (ENEMY) ENEMY.rebuild(CANVAS_WIDTH * PX - 3.2 * ENEMY_WIDTH * PX - WRAP * PX, CANVAS_HEIGHT * PX - ENEMY_HEIGHT * PX - 3.8 * VERTICAL_WRAP * PX);
  if (PLAYER) PLAYER.rebuild(WRAP * PX / 3, CANVAS_HEIGHT * PX - PLAYER_HEIGHT * PX - 4.5 * VERTICAL_WRAP * PX);
}
let PLAYER_WIDTH = 150;
let PLAYER_HEIGHT = 150;
let ENEMY_WIDTH = 1.5 * PLAYER_WIDTH;
let ENEMY_HEIGHT = 1.5 * PLAYER_HEIGHT;
let HEAD_WIDTH = ENEMY_WIDTH / 2.5;
let HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
let BODY_WIDTH = ENEMY_WIDTH;
let BODY_HEIGHT = ENEMY_HEIGHT / 2;
let WEAPON_WIDTH = ENEMY_WIDTH / 2;
let WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
let LEGS_WIDTH = ENEMY_WIDTH / 1.5;
let LEGS_HEIGHT = ENEMY_HEIGHT / 3;
let WRAP = CANVAS_WIDTH / 15;
let VERTICAL_WRAP = CANVAS_HEIGHT / 10;

const HEAL = 30;
const ATTACK = 60;
const ENEMY_PATH = `../resources/images/enemy`;
const SPELL_IMAGE_PATH = `../resources/images/spell/`;
const SPELL_SOUND_PATH = `../resources/audio/spell/`;
const MAX_HEAL_POINTS = 300 * PX;

const PLAYER_NUM = 1;
const ENEMY_NUM = 1;
const TASKSLIST = ['counting', 'translation', 'speech'];
const MAX_COUNTING_NUM = 20;
const SIGN_ARRAY = ['-', '+', '*'];
const MODAL_DELATION = 2000;
const SPEECH_DELATION = 1000;

let PLAYER = null;
let ENEMY = null;