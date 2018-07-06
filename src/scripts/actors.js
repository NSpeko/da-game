import * as Constants from './constants';
import enemyDraw from './monster/monster-creation';

let ENEMY;
let PLAYER;

class Actor {
  constructor(xLoc, yLoc, type, name) {
    this.place = {
      x: xLoc * Constants.PX,
      y: yLoc * Constants.PX
    };
    this.type = type;
    if (name) {
      this.name = name;
    } else {
      this.name = 'John Smith';
    }
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  redraw() {
    this.clearImage();
    this.drawImage();
    this.drawInfo();
    this.drawHP();
  }
  drawName(nameWrap) {
    let NAME_WRAP = 0;
    if (this.type === 'enemy') {
      NAME_WRAP = Constants.NAME_WRAP_ENEMY * Constants.PX;
    } else if (this.type === 'player') {
      NAME_WRAP = Constants.NAME_WRAP_PLAYER * Constants.PX;
    }
    Constants.actorsContext.font = `${Constants.NAME_SIZE * Constants.PX}px Verdana`;
    Constants.actorsContext.fillStyle = 'red';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.fillText(
      this.name,
      this.place.x - nameWrap * Constants.PX,
      this.place.y - NAME_WRAP
    );
    Constants.actorsContext.fillStyle = 'black';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.strokeText(
      this.name,
      this.place.x - nameWrap * Constants.PX,
      this.place.y - NAME_WRAP
    );
  }
  drawHP(hpWrap) {
    const hpPercent = this.healPoints / Constants.MAX_HEAL_POINTS;
    let HP_WRAP = 0;
    if (this.type === 'enemy') {
      HP_WRAP = Constants.HP_WRAP_ENEMY * Constants.PX;
    } else if (this.type === 'player') {
      HP_WRAP = Constants.HP_WRAP_PLAYER * Constants.PX;
    }
    Constants.actorsContext.fillStyle = 'red';
    Constants.actorsContext.fillRect(
      this.place.x - hpWrap * Constants.PX,
      this.place.y - HP_WRAP,
      hpPercent * this.image.width,
      Constants.HP_LINE_HEIGHT * Constants.PX
    );
    Constants.actorsContext.fillStyle = 'black';
    Constants.actorsContext.strokeRect(
      this.place.x - hpWrap * Constants.PX,
      this.place.y - HP_WRAP,
      this.image.width,
      Constants.HP_LINE_HEIGHT * Constants.PX
    );
  }
  rebuild(rebuildedX, rebuildedY) {
    this.place = {
      x: rebuildedX,
      y: rebuildedY
    };
    if (this.type === 'enemy') {
      this.image.width = Constants.ENEMY_WIDTH * Constants.PX;
      this.image.height = Constants.ENEMY_HEIGHT * Constants.PX;
    } else if (this.type === 'player') {
      this.image.width = Constants.PLAYER_WIDTH * Constants.PX;
      this.image.height = Constants.PLAYER_HEIGHT * Constants.PX;
    }
    this.redraw();
  }
  heal(spell) {
    Constants.spellContext.drawImage(
      spell.image,
      this.place.x - this.image.width / 4,
      this.place.y,
      spell.width,
      spell.height
    );
    if (this.healPoints <= Constants.MAX_HEAL_POINTS - Constants.HEAL) {
      this.healPoints += Constants.HEAL;
    } else {
      this.healPoints = Constants.MAX_HEAL_POINTS;
    }
    this.effect();
    setTimeout(() => {
      Constants.spellContext.clearRect(
        this.place.x - this.image.width / 4,
        this.place.y,
        spell.width,
        spell.height
      );
    }, 500);
  }
  effect(time) {
    this.clearImage();
    setTimeout(() => {
      this.clearImage();
      this.redraw();
    }, time);
  }
  damaged() {
    if (this.healPoints - Constants.ATTACK > 0) {
      this.healPoints -= Constants.ATTACK;
      this.effect(Constants.EFFECT_DURATION);
    } else {
      this.loose();
    }
  }
}

class Enemy extends Actor {
  constructor(xLoc, yLoc, type, image, name, build) {
    super(xLoc, yLoc, (type = 'enemy'), name);
    this.image = {
      head: build.head,
      body: build.body,
      weapon: build.weapon,
      legs: build.legs,
      width: image.width,
      height: image.height
    };
    this.healPoints = Constants.MAX_HEAL_POINTS;
    this.redraw();
  }
  drawInfo() {
    this.drawName(0);
    this.drawHP(this.image.width / 3);
  }
  drawImage() {
    Constants.actorsContext.drawImage(
      this.image.legs,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 6,
      this.place.y +
        (Constants.BODY_HEIGHT * Constants.PX) / 1.5 +
        (Constants.HEAD_HEIGHT * Constants.PX) / 3,
      Constants.LEGS_WIDTH * Constants.PX,
      Constants.LEGS_HEIGHT * Constants.PX
    );
    Constants.actorsContext.drawImage(
      this.image.body,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 3.5,
      this.place.y + (Constants.HEAD_HEIGHT * Constants.PX) / 4,
      Constants.BODY_WIDTH * Constants.PX,
      Constants.BODY_HEIGHT * Constants.PX
    );
    Constants.actorsContext.drawImage(
      this.image.head,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 50,
      this.place.y - (Constants.HEAD_HEIGHT * Constants.PX) / 3,
      Constants.HEAD_WIDTH * Constants.PX,
      Constants.HEAD_HEIGHT * Constants.PX
    );
    Constants.actorsContext.drawImage(
      this.image.weapon,
      this.place.x - 1.1 * Constants.WEAPON_WIDTH * Constants.PX,
      this.place.y +
        (Constants.HEAD_HEIGHT * Constants.PX - (Constants.WEAPON_HEIGHT / 1.5) * Constants.PX),
      Constants.WEAPON_WIDTH * Constants.PX,
      Constants.WEAPON_HEIGHT * Constants.PX
    );
  }
  loose() {
    PLAYER.win();
    createEnemy();
  }
  clearImage() {
    Constants.actorsContext.clearRect(
      this.place.x - this.image.width / 2,
      this.place.y,
      this.image.width * 1.3,
      this.image.height
    );
  }
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

class Player extends Actor {
  constructor(xLoc, yLoc, type, image, name) {
    super(xLoc, yLoc, (type = 'player'), name);
    this.score = 0;
    this.image = image;
    this.redraw();
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  drawImage() {
    Constants.actorsContext.drawImage(
      this.image,
      this.place.x,
      this.place.y,
      this.image.width,
      this.image.height
    );
  }
  drawInfo() {
    this.drawName(-this.image.width / 3);
    this.drawHP(this.place.x / 3);
    this.drawLevel();
  }
  drawLevel() {
    Constants.actorsContext.font = `${Constants.LVL_SIZE * Constants.PX}px Verdana`;
    Constants.actorsContext.fillStyle = 'orange';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.fillText(
      this.score + 1,
      Constants.CANVAS_WIDTH / 2 - this.score * Constants.PX,
      Constants.LVL_WRAP * Constants.PX + Constants.LVL_SIZE * Constants.PX
    );
  }
  win() {
    this.score += 1;
    createEnemy();
  }
  getTop(allScores, topCount, currentScore) {
    let tempLength = topCount;
    allScores.push(currentScore);
    if (allScores.length < topCount) {
      tempLength = allScores.length;
    }
    allScores.sort((a, b) => b.score - a.score);
    return [tempLength, allScores];
  }
  createGameScoreList(allScores, currentScore) {
    const $gameWindow = $('#gameWindow');
    $gameWindow.append('<h3>Score List</h3>');
    const tempCurrUserScoreOutput = document.createElement('P');
    tempCurrUserScoreOutput.innerText = `Your Score: ${currentScore.score}`;
    $gameWindow.append(tempCurrUserScoreOutput);
    let topCount = Constants.TOP_COUNT;
    [topCount, allScores] = this.getTop(allScores, topCount, currentScore);
    for (let i = 0; i < topCount; i += 1) {
      const tempContent = document.createElement('h3');
      tempContent.innerText = `${i + 1}. ${allScores[i].name} ${allScores[i].score} `;
      $gameWindow.append(tempContent);
    }
  }
  loose() {
    const gameWindow = $('#gameWindow');
    $('#onlyLoggedUserContent')[0].style.display = 'none';
    gameWindow.toggleClass('main-game-container main-score-container bg-light');
    let allScores = [];
    if (localStorage.scoreAll) {
      allScores = JSON.parse(localStorage.scoreAll);
    }
    const currentScore = {
      name: this.name,
      score: this.score
    };
    this.createGameScoreList(allScores, currentScore);
    gameWindow.append(
      '<button class="btn btn-primary" onclick="location.reload();">Repeat?</button>'
    );
    localStorage.scoreAll = JSON.stringify(allScores);
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  clearImage() {
    Constants.actorsContext.clearRect(
      this.place.x,
      this.place.y,
      this.image.width,
      this.image.heigth
    );
  }
}

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

function drawHeroes() {
  const hero = JSON.parse(localStorage.getItem('user'));
  if (hero && hero.gender && hero.name) {
    createPlayer(hero.gender, hero.name);
    createEnemy();
  }
}

drawHeroes();

export { PLAYER, ENEMY, drawHeroes };
