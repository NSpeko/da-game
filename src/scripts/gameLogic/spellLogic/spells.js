import * as Constants from '../constants';

class Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    this.name = name;
    this.image = new Image();
    this.image.src = `${Constants.SPELL_IMAGE_PATH}${imageSrc}`;
    this.sound = new Audio(`${Constants.SPELL_SOUND_PATH}${soundSrc}`);
    this.width = width;
    this.height = height;
    this.step = {
      x: stepX,
      y: stepY
    };
  }
}

class StraightSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX, (stepY = 0));
    this.type = 'straight';
  }
}

class DropSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepY, stepX) {
    super(name, imageSrc, soundSrc, width, height, (stepX = 0), stepY);
    this.type = 'drop';
  }
}

class FlyingSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX, stepY);
    this.type = 'flying';
  }
}

class JigglingSpell extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, stepX, stepY);
    this.type = 'jiggling';
  }
}

class Heal extends Spell {
  constructor(name, imageSrc, soundSrc, width, height, stepX, stepY) {
    super(name, imageSrc, soundSrc, width, height, (stepX = 0), (stepY = 0));
    this.type = 'heal';
  }
}

const fireball = new FlyingSpell('Fireball', 'fireball.png', 'fireball.ogg', 100, 100, 10, 20);
const meteor = new DropSpell('Meteor', 'meteor.png', 'meteor.ogg', 200, 200, 12);
const arrow = new StraightSpell('Arrow', 'arrow.png', 'arrow.ogg', 100, 100, 12);
const star = new JigglingSpell('Star', 'star.png', 'star.ogg', 100, 100, 12, 8);
const heal = new Heal('Heal', 'heal.png', 'heal.ogg', 200, 200);

const SPELLLIST = [fireball, meteor, arrow, star, heal];
export { SPELLLIST };
