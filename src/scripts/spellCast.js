import {
  SPELLLIST
} from './spells'
import {
  PLAYER,
  ENEMY
} from './actors'
import * as Constants from './constants'

function createSpell(spell, start, target) {
  initSound(spell);
  let x = getStartX(start, target, spell);
  let y = getStartY(target, spell);
  const distance = Math.abs(start.place.x - target.place.x + ENEMY.image.width / 2 + PLAYER.image.width / 2);

  if (spell.type === 'heal') {
    start.heal(spell);
    stopSound(spell);
  } else {
    let spellInterval = setInterval(function () {
      Constants.spellContext.clearRect(x, y, spell.width, spell.height);
      [x, y] = getCoordinates(x, y, start, spell, distance);
      Constants.spellContext.drawImage(spell.image, x, y, spell.width, spell.height);
      if (start.type === 'player') {
        if (x >= target.place.x && y >= target.place.y) {
          endSpell(spell, target, spellInterval, x, y, Constants.spellContext)
        }
      } else {
        if (x <= target.place.x + target.image.width / 2 && y >= target.place.y) {
          endSpell(spell, target, spellInterval, x, y, Constants.spellContext)
        }
      }
    }, 24)
  }
}

function getStartY(target, spell) {
  let y = target.place.y + target.image.height / 4;
  if (spell.type === 'drop') {
    y = 0;
  }
  return y
}

function getStartX(start, target, spell) {
  let x = start.place.x;
  if (start.type === 'player') {
    x += start.image.width / 2;
  }
  if (spell.type === 'drop') {
    x = target.place.x;
  }
  return x
}

function getCoordinates(x, y, start, spell, distance) {
  let newX = x;
  let newY = y;
  let distancePart;
  if (x >= distance - distance / 4) {
    distancePart = 4
  } else if (x >= distance / 2) {
    distancePart = 3
  } else if (x <= distance / 4) {
    distancePart = 1
  } else {
    distancePart = 2
  }

  switch (spell.type) {
    case 'flying':
      if (newX >= distance / 2 - distance / 12 && newX <= distance / 2 + distance / 12) {
        newY -= 0;
      } else if (start.type === 'enemy') {
        switch (distancePart) {
          case 1:
            newY += spell.step.y / 2;
            break;
          case 2:
            newY += spell.step.y / 3
            break;
          case 3:
            newY -= spell.step.y / 3
            break;
          case 4:
            newY -= spell.step.y / 2
            break;
        }
      } else if (start.type === 'player') {
        switch (distancePart) {
          case 1:
            newY -= spell.step.y / 2;
            break;
          case 2:
            newY -= spell.step.y / 3;
            break;
          case 3:
            newY += spell.step.y / 6;
            break;
          case 4:
            newY += spell.step.y / 3;
            break;
        }
      }
      break;
    case 'straight':
      newY += spell.step.y;
      break;
    case 'jiggling':
      newY += spell.step.y;
      spell.step.y *= -1;
      break;
    case 'drop':
      newY += spell.step.y;
      break;
  }
  if (start.type === 'player') {
    newX += spell.step.x;
  } else newX -= spell.step.x;
  return [newX, newY]
}

function stopAnimation(interval, x = 0, y = 0, context, width = canvasWidth, height = canvasHeight) {
  clearInterval(interval);
  context.clearRect(x, y, width, height);
}

function endSpell(spell, target, spellInterval, x, y, spellContext) {
  spellAttack(spell, target);
  stopAnimation(spellInterval, x, y, spellContext, spell.width, spell.height);
}

function spellAttack(spell, target) {
  stopSound(spell);
  target.damaged();
}

function getRandomSpell() {
  let spellNumber = ~~(Math.random() * SPELLLIST.length)
  return SPELLLIST[spellNumber]
}

function enemyAttack() {
  let randomSpell = getRandomSpell();
  createSpell(randomSpell, ENEMY, PLAYER);
}

function stopSound(spell) {
  spell.sound.pause();
  spell.sound.currentTime = 0;
}

function initSound(spell) {
  spell.sound.loop = true;
  spell.sound.play();
}

export {
  enemyAttack
}
export {
  createSpell
}