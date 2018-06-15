class Actor {
  constructor(xLoc, yLoc, type, name) {
    this.place = {
      x: xLoc,
      y: yLoc
    };
    this.type = type;
    if (name) {
      this.name = name;
    } else {
      this.name = 'John Smith';
    }
    this.healPoints = MAX_HEAL_POINTS;
  }
  redraw() {
    this.clearImage();
    this.drawImage();
    this.drawInfo();
    this.drawHP();
  }
  drawName(nameWrap) {
    actorsContext.font = `${25 * PX}px Verdana`;
    actorsContext.fillStyle = "black";
    actorsContext.textAlign = "center";
    actorsContext.fillText(this.name, this.place.x + nameWrap, this.place.y - 15 * PX);
  }
  drawHP(hpWrap) {
    let hpPercent = this.healPoints / MAX_HEAL_POINTS;
    actorsContext.fillStyle = 'red'
    actorsContext.fillRect(this.place.x - hpWrap, this.place.y - 55 * PX, hpPercent * this.image.width, 10 * PX)
    actorsContext.fillStyle = 'black';
    actorsContext.strokeRect(this.place.x - hpWrap, this.place.y - 55 * PX, this.image.width, 10 * PX)
  }
  rebuild(rebuildedX, rebuildedY) {
    this.place = {
      x: rebuildedX,
      y: rebuildedY
    }
    this.redraw();
  }
  heal(spell) {
    spellContext.drawImage(spell.image, this.place.x - this.image.width / 4, this.place.y, spell.width, spell.height);
    if (this.healPoints <= MAX_HEAL_POINTS - HEAL) {
      this.healPoints += HEAL;
    } else {
      this.healPoints = MAX_HEAL_POINTS;
    }
    this.effect();
    setTimeout(() => {
      spellContext.clearRect(this.place.x - this.image.width / 4, this.place.y, spell.width, spell.height)
    }, 500);
  }
  effect(time) {
    this.clearImage()
    setTimeout(() => {
      this.clearImage();
      this.redraw();
    }, time)
  }
  damaged() {
    if (this.healPoints - ATTACK > 0) {
      this.healPoints -= ATTACK;
      this.effect(50);
    } else {
      this.loose();
    }
  }
}

function createPlayer(gender, name) {
  const playerImg = new Image();
  const playerNumber = Math.ceil(Math.random() * PLAYER_NUM);
  playerImg.src = `./resources/images/player/hero_${gender}_${playerNumber}.png`;
  playerImg.width = PLAYER_WIDTH;
  playerImg.height = PLAYER_HEIGHT;
  PLAYER = new Player(WRAP, CANVAS_HEIGHT - PLAYER_HEIGHT, 'player', playerImg, name);
}

class Player extends Actor {
  constructor(xLoc, yLoc, type, image, name) {
    super(xLoc, yLoc, (type = 'player'), name);
    this.score = 0;
    this.image = image;
    this.redraw();
    this.healPoints = MAX_HEAL_POINTS;
  }
  drawImage() {
    actorsContext.drawImage(this.image, this.place.x, this.place.y, this.image.width, this.image.height);
  }
  drawInfo() {
    this.drawName(this.image.width / 2);
    this.drawHP(0);
    this.drawLevel();
  }
  drawLevel() {
    actorsContext.font = `${20 * PX}px Verdana`;
    actorsContext.fillStyle = "black";
    actorsContext.textAlign = "center";
    actorsContext.fillText(`(${this.score})`, this.place.x + this.image.width / 2 + 12 * this.name.length * PX, this.place.y - 15 * PX);
  }
  win() {
    this.score += 1;
    createEnemy();
  }
  loose() {
    alert(this.score)
    this.healPoints = MAX_HEAL_POINTS;
  }
  clearImage() {
    actorsContext.clearRect(this.place.x, this.place.y, this.image.width, this.image.heigth);
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
    this.healPoints = MAX_HEAL_POINTS;
    this.redraw();
  }
  drawInfo() {
    this.drawName(this.image.width / 6);
    this.drawHP(this.image.width / 3);
  }
  drawImage() {
    actorsContext.drawImage(
      this.image.legs,
      this.place.x - BODY_WIDTH / 12,
      this.place.y + BODY_HEIGHT + HEAD_HEIGHT / 3,
      this.image.legs.width,
      this.image.legs.heigth
    );
    actorsContext.drawImage(
      this.image.body,
      this.place.x - BODY_WIDTH / 4.2,
      this.place.y + HEAD_HEIGHT / 2,
      this.image.body.width,
      this.image.body.heigth
    );
    actorsContext.drawImage(
      this.image.head,
      this.place.x - BODY_WIDTH / 50,
      this.place.y,
      this.image.head.width,
      this.image.head.heigth
    );
    actorsContext.drawImage(
      this.image.weapon,
      this.place.x - WEAPON_WIDTH,
      this.place.y + HEAD_HEIGHT - WEAPON_HEIGHT / 3,
      this.image.weapon.width,
      this.image.weapon.heigth
    );
  }
  loose() {
    PLAYER.win();
    console.log(PLAYER.score);
    console.log('new monster');
    createEnemy();
  }
  clearImage() {
    actorsContext.clearRect(this.place.x - this.image.width / 2, this.place.y, this.image.width * 1.3, this.image.height);
  }
}

function createEnemy() {
  const enemyImg = new Image();
  enemyImg.width = ENEMY_WIDTH;
  enemyImg.height = ENEMY_HEIGHT;
  enemyDraw().then(([name, build]) => {
    ENEMY = new Enemy(
      CANVAS_WIDTH - ENEMY_WIDTH - WRAP,
      CANVAS_HEIGHT - ENEMY_HEIGHT,
      'enemy',
      enemyImg,
      name,
      build
    );
  });
}

createPlayer('male', 'Pasha');
createEnemy();