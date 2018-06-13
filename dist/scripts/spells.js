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

const fireball = new flyingSpell('Fireball', './resources/images/boom.png', './resources/audio/meteor.mp3', 100, 100, 12, 6);
const meteor = new dropSpell('Meteor', './resources/images/boom.png', './resources/audio/bzing.ogg', 200, 200, 12);
const arrow = new straightSpell('Arrow', './resources/images/boom.png', './resources/audio/meteor.wav', 100, 100, 12);
const star = new jigglingSpell('Star', './resources/images/boom.png', './resources/audio/meteor.wav', 100, 100, 12, 8);
//const fireSpell = new straightSpell('./resources/images/boom.png', 50, 50, 12);