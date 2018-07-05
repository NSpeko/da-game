const $canvasContainer=$('#gameWindow');
const $spellCanvas = $('#spellCanvas')[0];
const spellContext = $spellCanvas.getContext('2d');
const actorsCanvas = document.getElementById('actors')
const actorsContext = actorsCanvas.getContext('2d');
let CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;
let CANVAS_HEIGHT = 350;
const getScale = () => CANVAS_WIDTH / 800
let PX = getScale();

function rebuildCanvas() {
  CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;
  PX = getScale();
  CANVAS_HEIGHT = 350 * PX;
  $canvasContainer.height(CANVAS_HEIGHT);
  $spellCanvas.width = CANVAS_WIDTH;
  $spellCanvas.height = CANVAS_HEIGHT;
  actorsCanvas.width = CANVAS_WIDTH;
  actorsCanvas.height = CANVAS_HEIGHT;
}

const PLAYER_WIDTH = 150;
const PLAYER_HEIGHT = 150;
const ENEMY_WIDTH = 1.3 * PLAYER_WIDTH;
const ENEMY_HEIGHT = 1.3 * PLAYER_HEIGHT;
const HEAD_WIDTH = ENEMY_WIDTH / 2.5;
const HEAD_HEIGHT = ENEMY_HEIGHT / 2.5;
const BODY_WIDTH = ENEMY_WIDTH;
const BODY_HEIGHT = ENEMY_HEIGHT / 2;
const WEAPON_WIDTH = ENEMY_WIDTH / 2;
const WEAPON_HEIGHT = ENEMY_HEIGHT / 2;
const LEGS_WIDTH = ENEMY_WIDTH / 1.25;
const LEGS_HEIGHT = ENEMY_HEIGHT / 1.5;

const WRAP = 40;
const VERTICAL_WRAP = 30;
const HP_WRAP_PLAYER = 50;
const NAME_WRAP_PLAYER = 15;
const HP_WRAP_ENEMY = 65;
const NAME_WRAP_ENEMY = 30;

const NAME_SIZE = 18;
const HP_LINE_HEIGHT = 10;
const EFFECT_DURATION = 50;
const LVL_SIZE = 50;
const LVL_WRAP = 10;


const ENEMY_PATH = `../resources/images/enemy`;
const PLAYER_PATH = '../resources/images/player';
const PLAYER_FEMALE_NUM = 1;
const PLAYER_MALE_NUM = 2;

const SPELL_IMAGE_PATH = `../resources/images/spell/`;
const SPELL_SOUND_PATH = `../resources/audio/spell/`;
const MAX_HEAL_POINTS = 310;
const HEAL = 30;
const ATTACK = 60;

const TOP_COUNT = 10;
const TASKSLIST = ['counting', 'translation', 'speech'];
const MAX_COUNTING_NUM = 20;
const SIGN_ARRAY = ['-', '+', '*'];
const MODAL_DELATION = 2000;
const SPEECH_DELATION = 800;

export {
  PLAYER_PATH,
  rebuildCanvas,
  PLAYER_FEMALE_NUM,
  PLAYER_MALE_NUM,
  TASKSLIST,
  MAX_COUNTING_NUM,
  SIGN_ARRAY,
  MODAL_DELATION,
  SPEECH_DELATION,
  PLAYER,
  ENEMY,
  HEAL,
  ATTACK,
  ENEMY_PATH,
  SPELL_IMAGE_PATH,
  SPELL_SOUND_PATH,
  MAX_HEAL_POINTS,
  TOP_COUNT,
  WRAP,
  VERTICAL_WRAP,
  $spellCanvas,
  spellContext,
  actorsCanvas,
  actorsContext,
  CANVAS_WIDTH,
  PX,
  CANVAS_HEIGHT,
  NAME_SIZE,
  HP_WRAP_PLAYER,
  NAME_WRAP_PLAYER,
  NAME_WRAP_ENEMY,
  HP_WRAP_ENEMY,
  HP_LINE_HEIGHT,
  EFFECT_DURATION,
  LVL_SIZE,
  LVL_WRAP,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  ENEMY_WIDTH,
  ENEMY_HEIGHT,
  HEAD_WIDTH,
  HEAD_HEIGHT,
  BODY_WIDTH,
  BODY_HEIGHT,
  WEAPON_WIDTH,
  WEAPON_HEIGHT,
  LEGS_WIDTH,
  LEGS_HEIGHT
};