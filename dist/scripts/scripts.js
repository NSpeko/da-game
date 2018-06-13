const getJSON = url => new Promise((resolve) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function sendData() {
    if (this.status === 200) {
      resolve(this.response);
    }
  };
  xhr.send();
});

const spellbuttons = document.getElementsByClassName('spellButton');

let spellCanvas = document.getElementById('spellCanvas')
  spellCanvas.width = CANVAS_WIDTH;
  spellCanvas.height = CANVAS_HEIGHT;
let spellContext = spellCanvas.getContext('2d');

function enemyDamaged() {
  if (ENEMY.healPoints-ATTACK > 0) {
    ENEMY.attacked();
    console.log(ENEMY.healPoints);
  }
  else {
    PLAYER.win();
    console.log(PLAYER.score)
    console.log('new monster')
    ENEMY.healPoints = MAX_HEAL_POINTS;
  }
}

function playerDamaged() {
  if (PLAYER.healPoints-ATTACK > 0) {
    PLAYER.attacked();
    console.log(PLAYER.healPoints)
  }
  else {
    PLAYER.loose()
  }
}

function justSpell(spell) {
  spellbuttons[0].addEventListener('click', function () {
    if (confirm('solved?')) createSpell(spell, PLAYER, ENEMY);
    else createSpell(spell, ENEMY, PLAYER);
  })
  spellbuttons[1].addEventListener('click', function () {
    createSpell(spell, ENEMY, PLAYER);
  })
}

justSpell(star)