const CANVAS_WIDTH = document.getElementById('gameWindow').offsetWidth;
const getScale = () => ~~(CANVAS_WIDTH / 800)
const PX = getScale();
const CANVAS_HEIGHT = 450 * PX;
const ENEMY_PATH = `./resources/images/enemy`;
const PLAYER_WIDTH = 290 * PX;
const PLAYER_HEIGHT = 290 * PX;
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
const WRAP = 20 * PX;

const PLAYER_NUM = 1;
const ENEMY_NUM = 1;

let PLAYER = null;
let ENEMY = null;