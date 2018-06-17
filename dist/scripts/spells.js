let SPELLLIST = [];

class Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    this.name = name;
    this.image = new Image();
    this.image.src = `${SPELL_IMAGE_PATH}${imageSrc}`;
    this.sound = new Audio(`${SPELL_SOUND_PATH}${soundSrc}`);
    this.width = width * PX;
    this.height = height * PX;
    this.step = {
      x: stepX * PX,
      y: stepY * PX
    }
    SPELLLIST.push(this);
  }
}

class straightSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX, stepY = 0)
    this.type = 'straight';
  }
}

class dropSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepY, stepX) {
    super(name, imageSrc, soundSrc, width, height, stepX = 0, stepY)
    this.type = 'drop';
  }
}

class flyingSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX, stepY)
    this.type = 'flying';
  }
}

class jigglingSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX, stepY)
    this.type = 'jiggling';
  }
}

class Heal extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX = 0, stepY = 0)
    this.type = 'heal';
  }
}

const fireball = new flyingSpell('Fireball', `fireball.gif`, `meteor.mp3`, 100, 100, 10, 20);
const meteor = new dropSpell('Meteor', `fireball.gif`, `bzing.ogg`, 200, 200, 12);
const arrow = new straightSpell('Arrow', `fireball.gif`, `meteor.wav`, 100, 100, 12);
const star = new jigglingSpell('Star', `fireball.gif`, `meteor.wav`, 100, 100, 12, 8);
const heal = new Heal('Heal', `heal.png`, `meteor.mp3`, 200, 200);