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

function justSpell(spell) {
  spellbuttons[0].addEventListener('click', function () {
    if (confirm('solved?')) createSpell(spell, PLAYER, ENEMY);
    else {
      enemyAttack();
    }
  })
  spellbuttons[1].addEventListener('click', function () {
    enemyAttack();
  })
}

justSpell(fireball)