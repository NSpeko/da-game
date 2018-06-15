let SPELLLIST = [];

class Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    this.name = name;
    this.image = new Image();
    this.image.src = imageSrc;
    this.sound = new Audio(soundSrc);
    this.width = width;
    this.height = height;
    this.step = {
      x: stepX,
      y: stepY
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

const fireball = new flyingSpell('Fireball', './resources/images/spell/fireball.gif', './resources/audio/spell/meteor.mp3', 100 * PX, 100 * PX, 12 * PX, 6 * PX);
const meteor = new dropSpell('Meteor', './resources/images/spell/fireball.gif', './resources/audio/spell/bzing.ogg', 200 * PX, 200 * PX, 12 * PX);
const arrow = new straightSpell('Arrow', './resources/images/spell/fireball.gif', './resources/audio/spell/meteor.wav', 100 * PX, 100 * PX, 12 * PX);
const star = new jigglingSpell('Star', './resources/images/spell/fireball.gif', './resources/audio/spell/meteor.wav', 100 * PX, 100 * PX, 12 * PX, 8 * PX);
const heal = new Heal('Heal', './resources/images/spell/fireball.gif', './resources/audio/spell/meteor.wav', 400 * PX, 400 * PX);