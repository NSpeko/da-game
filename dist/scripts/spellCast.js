function createSpell(spell, start, target) {
  let x = start.place.x;
  if (start.type === 'player') {
    x += start.image.width / 2;
  }
  let y = target.place.y + target.image.height / 4;
  spell.sound.loop = true;
  spell.sound.play();
  const distance = Math.abs(start.place.x - target.place.x + ENEMY.image.width / 2 + PLAYER.image.width / 2);
  if (spell.type === 'drop') {
    x = target.place.x;
    y = 0;
  }
  let spellInterval = setInterval(function () {
    spellContext.clearRect(x, y, spell.width, spell.height)
    if (spell.type === 'flying') {
      if (x >= distance / 2 - distance / 12 && x <= distance / 2 + distance / 12) {
        y -= 0;
      }
      if (start.type === 'enemy') {
        if (x >= distance - distance / 4) {
          y -= spell.step.y / 2
        } else if (x >= distance / 2) {
          y -= spell.step.y / 3
        } else if (x <= distance / 4) {
          y += spell.step.y / 2
        } else {
          y += spell.step.y / 3
        }
      }
      else if (start.type === 'player') {
        if (x <= distance / 3) {
          y -= spell.step.y / 2
        } else if (x <= distance / 2) {
          y -= spell.step.y / 3
        } else if (x >= distance -  distance / 4) {
          y += spell.step.y / 3
        } else {
          y += spell.step.y / 6
        }
      }
    }
    else if (spell.type === 'straight') {
      y += spell.step.y;
    }
    else if (spell.type === 'jiggling') {
      y += spell.step.y;
      spell.step.y *= -1;
    }
    if (start.type === 'player') x += spell.step.x;
      else x -= spell.step.x;
    spellContext.drawImage(spell.image, x, y, spell.width, spell.height);
    if (start.type === 'player') {
      if (x >= target.place.x && y >= target.place.y) {
        enemyDamaged();
        spell.sound.pause();
        damage(x - WRAP, y - target.image.height/4, target.image.width, target.image.height);
        stopAnimation(spellInterval, x, y, spellContext, spell.width, spell.height);
      }
    } else {
      if (x <= target.place.x + target.image.width / 2 && y >= target.place.y) {
        playerDamaged();
        spell.sound.pause();
        damage(x - target.image.width/2, y - target.image.height/4, target.image.width, target.image.height);
        stopAnimation(spellInterval, x, y, spellContext, spell.width, spell.height);
      }
    }
  }, 24)
}

function damage(x, y, width, height) {       
  actorsContext.clearRect(x, y, width, height)
  setTimeout(() => actorsContext.clearRect(x, y, width, height), 24)
}

function stopAnimation(interval, x = 0, y = 0, context, width = canvasWidth, height = canvasHeight) {
  clearInterval(interval);
  context.clearRect(x, y, width, height);
}