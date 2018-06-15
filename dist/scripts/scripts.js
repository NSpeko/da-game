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

window.onresize = rebuildCanvas();
setInterval(function () {
  rebuildCanvas();
}, 1000)

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