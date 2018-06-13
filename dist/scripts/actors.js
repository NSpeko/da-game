let actorsCanvas = document.getElementById('actors')
actorsCanvas.width = CANVAS_WIDTH;
actorsCanvas.height = CANVAS_HEIGHT;
let actorsContext = actorsCanvas.getContext('2d');

class Actor {
  constructor(xLoc, yLoc, type, name) {
    this.place = {
      x: xLoc,
      y: yLoc
    }
    this.type = type;
    if (name) this.name = name;
    this.healPoints = MAX_HEAL_POINTS;
  }
  attacked() {
    this.healPoints -= ATTACK;
  }
}

class Player extends Actor {
  constructor(xLoc, yLoc, type, image, name) {
    super(xLoc, yLoc, type = 'player', name);
    this.score = 0;
    this.image = image;
    this.playerInitalise(image, xLoc, yLoc);
  }
  playerInitalise(image, xLoc, yLoc) {
    setInterval(function () {
      actorsContext.drawImage(image, xLoc, yLoc, image.width, image.height);
    }, 24)
  }
  win() {
    this.score += 1;
  }
  heal() {
    if (this.healPoints<=MAX_HEAL_POINTS-HEAL)
      this.healPoints += HEAL;
    else (this.healPoints = MAX_HEAL_POINTS)
  }
  loose() {
    createEnemy();
    PLAYER.healPoints = MAX_HEAL_POINTS;
    console.log(ENEMY)
  }
}

class Enemy extends Actor {
  constructor(xLoc, yLoc, type, image, name) {
    super(xLoc, yLoc, type = 'enemy', name);
    this.image = image;
    this.enemyInitalise(image, xLoc, yLoc);
  }
  enemyInitalise(image, xLoc, yLoc) {
    setInterval(function () {
      actorsContext.drawImage(image, xLoc, yLoc, image.width, image.height);
    }, 24)
  }
}

function createPlayer(gender, name) {
  const playerImg = new Image();
  playerImg.src = `./resources/images/player_${gender}.png`;
  playerImg.width = PLAYER_WIDTH;
  playerImg.height = PLAYER_HEIGHT;
  PLAYER = new Player (WRAP, CANVAS_HEIGHT - PLAYER_HEIGHT, 'player', playerImg, name);
}

function createEnemy() { //change later
  const enemyImg = new Image();
  enemyImg.src = './resources/images/enemy.png';
  enemyImg.width = ENEMY_WIDTH;
  enemyImg.height = ENEMY_HEIGHT;
  enemyDraw();
  ENEMY = new Enemy (CANVAS_WIDTH - ENEMY_WIDTH - WRAP, CANVAS_HEIGHT - ENEMY_HEIGHT, 'enemy', enemyImg, name)
}

createPlayer('male', 'Pasha');
createEnemy();