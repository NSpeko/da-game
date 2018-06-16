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
}, 500)

function justSpell(spell) {
  // spellbuttons[0].addEventListener('click', function () {
  //   if (confirm('solved?')) createSpell(spell, PLAYER, ENEMY);
  //   else {
  //     enemyAttack();
  //   }
  // })
  // spellbuttons[1].addEventListener('click', function () {
  //   enemyAttack();
  // })
}

function solveTask(spell, start, target) {
  const randomTask = ~~(Math.random() * TASKSLIST.length);
  if (!showTask(TASKSLIST[randomTask])) {
    enemyAttack();
  } else {
    createSpell(spell, start, target);
  }
}

function fullReload() {
  createEnemy();
  createPlayer('male', 'faustav'); //createPlayerDialogue(); 
}

function showTask(task) {
  console.log(task);
  return Math.round(Math.random());
}

function addSpellButtons() {
  const spellMenu = document.getElementById('spellMenu');
  const healMenu = document.getElementById('healMenu');
  SPELLLIST.forEach(el => {
    let spellElement = document.createElement('button');
    spellElement.setAttribute('name', el.name);
    spellElement.setAttribute('class', 'btn btn-primary');
    spellElement.textContent = el.name;
    spellElement.setAttribute('modal', 'modal');
    if (el.type === 'heal') {
      spellElement.addEventListener('click', function () {
        solveTask(el, PLAYER, PLAYER);
      });
      healMenu.appendChild(spellElement);
    } else {
      spellElement.addEventListener('click', function () {
        solveTask(el, PLAYER, ENEMY);
      });
      spellMenu.appendChild(spellElement);
    }
  });
}

justSpell(fireball);
addSpellButtons()