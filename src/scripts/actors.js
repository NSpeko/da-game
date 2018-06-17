import * as Constants from './constants'
import {
  enemyDraw
}
from './monster/monster-creation'

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
    Constants.actorsContext.font = `${Constants.NAME_SIZE * Constants.PX}px Verdana`;
    Constants.actorsContext.fillStyle = 'black';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.fillText(this.name, this.place.x - nameWrap * Constants.PX, this.place.y - Constants.NAME_WRAP * Constants.PX);
  }
  drawHP(hpWrap) {
    let hpPercent = this.healPoints / Constants.MAX_HEAL_POINTS;
    Constants.actorsContext.fillStyle = 'red';
    Constants.actorsContext.fillRect(
      this.place.x - hpWrap,
      this.place.y - Constants.HP_WRAP * Constants.PX,
      hpPercent * this.image.width,
      Constants.HP_LINE_HEIGHT * Constants.PX
    );
    Constants.actorsContext.fillStyle = 'black';
    Constants.actorsContext.strokeRect(
      this.place.x - hpWrap,
      this.place.y - Constants.HP_WRAP * Constants.PX,
      this.image.width,
      Constants.HP_LINE_HEIGHT * Constants.PX
    );
  }
  rebuild(rebuildedX, rebuildedY) {
    this.place = {
      x: rebuildedX * Constants.PX,
      y: rebuildedY * Constants.PX
    };
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

function createPlayer(gender, name) {
  const playerImg = new Image();
  const playerNumber = Math.ceil(Math.random() * Constants.PLAYER_NUM);
  playerImg.src = `../resources/images/player/hero_${gender}_${playerNumber}.png`;
  playerImg.width = Constants.PLAYER_WIDTH * Constants.PX;
  playerImg.height = Constants.PLAYER_HEIGHT * Constants.PX;
  PLAYER = new Player(
    Constants.WRAP / 3,
    Constants.CANVAS_HEIGHT - Constants.PLAYER_HEIGHT - Constants.VERTICAL_WRAP,
    'player',
    playerImg,
    name
  );
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
    this.drawHP(this.place.x);
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
    allScores.sort((a, b) => {
      return b.score - a.score;
    });
    return [tempLength, allScores];
  }
  createGameScoreList(allScores, currentScore) {
    const $gameWindow = $('#gameWindow');
    $gameWindow.append('<h3>Score List</h3>');
    let tempCurrUserScoreOutput = document.createElement('P');
    tempCurrUserScoreOutput.innerText = `Your Score: ${currentScore.score}`;
    $gameWindow.append(tempCurrUserScoreOutput);
    let topCount = Constants.TOP_COUNT;
    [topCount, allScores] = this.getTop(allScores, topCount, currentScore);
    for (let i = 0; i < topCount; i += 1) {
      let tempContent = document.createElement('h3');
      tempContent.innerText = `${i + 1}. ${allScores[i].name} ${allScores[i].score} `;
      $gameWindow.append(tempContent);
    }
  }
  loose() {
    const gameWindow = $('#gameWindow');
    $('#onlyLoggedUserContent')[0].style.display = 'none';
    gameWindow.toggleClass('main-game-container main-score-container bg-light');
    let allScores = [];
    if (!!localStorage.scoreAll) {
      allScores = JSON.parse(localStorage.scoreAll);
    }
    const currentScore = {
      name: this.name,
      score: this.score
    };
    this.createGameScoreList(allScores, currentScore);
    gameWindow.append('<button class="btn btn-primary" onclick="location.reload();">Repeat?</button>');
    localStorage.scoreAll = JSON.stringify(allScores);
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  clearImage() {
    Constants.actorsContext.clearRect(this.place.x, this.place.y, this.image.width, this.image.heigth);
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
    this.drawName(this.name.length);
    this.drawHP(this.image.width / 3);
  }
  drawImage() {
    Constants.actorsContext.drawImage(
      this.image.legs,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 6,
      this.place.y + (Constants.BODY_HEIGHT * Constants.PX) / 1.5 + (Constants.HEAD_HEIGHT * Constants.PX) / 3,
      this.image.legs.width,
      this.image.legs.heigth
    );
    Constants.actorsContext.drawImage(
      this.image.body,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 4.2,
      this.place.y + (Constants.HEAD_HEIGHT * Constants.PX) / 2,
      this.image.body.width,
      this.image.body.heigth
    );
    Constants.actorsContext.drawImage(
      this.image.head,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 50,
      this.place.y,
      this.image.head.width,
      this.image.head.heigth
    );
    Constants.actorsContext.drawImage(
      this.image.weapon,
      this.place.x - 0.9 * Constants.WEAPON_WIDTH * Constants.PX,
      this.place.y + Constants.HEAD_HEIGHT * Constants.PX - (Constants.WEAPON_HEIGHT / 2) * Constants.PX,
      this.image.weapon.width,
      this.image.weapon.heigth
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
      Constants.CANVAS_WIDTH - Constants.ENEMY_WIDTH - 4 * Constants.WRAP,
      Constants.CANVAS_HEIGHT - Constants.ENEMY_HEIGHT - 0.8 * Constants.VERTICAL_WRAP,
      'enemy',
      enemyImg,
      name,
      build
    );
  });
}

function drawHeroes() {
  let hero = JSON.parse(localStorage.getItem('user'));
  if (hero && hero.gender && hero.name) {
    createPlayer(hero.gender, hero.name);
    createEnemy();
  }
}

drawHeroes();

export {
  PLAYER,
  ENEMY,
  drawHeroes
}