window.onresize = rebuildCanvas();
setInterval(function () {
  rebuildCanvas();
}, 500);

function fullReload() {
  createEnemy();
  createPlayer('male', 'faustav'); //createPlayerDialogue(); 
}

function addSpellButtons() {
  const spellMenu = document.getElementById('spellMenu');
  const healMenu = document.getElementById('healMenu');
  SPELLLIST.forEach(el => {
    let spellElement = document.createElement('button');
    spellElement.setAttribute('name', el.name);
    spellElement.setAttribute('class', 'btn btn-primary');
    spellElement.textContent = el.name;
    spellElement.setAttribute('data-toggle', 'modal');
    spellElement.setAttribute('data-target', '#solveGameTaskModal');
    if (el.type === 'heal') {
      spellElement.addEventListener('click', function () {
        taskWindowLoader(el, PLAYER, PLAYER);
      });
      healMenu.appendChild(spellElement);
    } else {
      spellElement.addEventListener('click', function () {
        taskWindowLoader(el, PLAYER, ENEMY);
      });
      spellMenu.appendChild(spellElement);
    }
  });
}

//justSpell(fireball);
addSpellButtons();