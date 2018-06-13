function createSpell(spell, start, target) {
  let x = start.place.x;
  let y = target.place.y + target.image.height/4;
  if (spell.type === 'drop') {
    x = target.place.x;
    y = 0;
  }
  //spell.sound.play();
  let spellInterval = setInterval(function () {
    spellContext.clearRect(x, y, spell.width, spell.height)
    //if (spell.type === 'flying' && x<=(target.place.x - start.place.x)/2) spell.step.y *= -1; 
    if (start.type === 'player') x += spell.step.x;
      else x -= spell.step.x;
    y += spell.step.y
    spellContext.drawImage(spell.image, x, y, spell.width, spell.height);
    if (start.type === 'player') {
      if (x >= target.place.x && y >= target.place.y) {
        enemyDamaged();
        //spell.sound.pause();
        stopAnimation(spellInterval, x, y, spellContext, spell.width, spell.height);
      }
    }
    else { 
      if (x <= target.place.x + target.image.width/2 && y >= target.place.y) {
        playerDamaged();
        //spell.sound.pause();
        stopAnimation(spellInterval, x, y, spellContext, spell.width, spell.height)
      }
    }
  }, 24)
}

function stopAnimation(interval, x = 0, y = 0, context, width = canvasWidth, height = canvasHeight) {
  clearInterval(interval);
  context.clearRect(x, y, width, height);
}