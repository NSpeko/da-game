window.onresize = rebuildCanvas();
setInterval(function () {
  rebuildCanvas();
}, 500);

function collapseGameMenu() {
  document.getElementById('gameMenu').classList.toggle('hidden');
}

function fullReload() {
  createEnemy();
  createPlayer('male', 'faustav'); //createPlayerDialogue(); 
}

function addSpellButtons() {
  const spellMenu = document.getElementById('spellMenu');
  const healMenu = document.getElementById('healMenu');
  SPELLLIST.forEach(el => {
    spellElement = createSpellElement(el);
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

function createSpellElement(spell) {
  let spellElement = document.createElement('button');
  spellElement.setAttribute('name', spell.name);
  spellElement.setAttribute('class', 'btn btn-primary');
  spellElement.textContent = spell.name;
  spellElement.setAttribute('data-toggle', 'modal');
  spellElement.setAttribute('data-target', '#solveGameTaskModal');
  return spellElement
}

addSpellButtons();

document.getElementById('loginSubmit').addEventListener('click', function () {
  let name = document.getElementById('userName').value;
  let genderBlock = Array.from(document.querySelectorAll('.user-gender'));
  let gender = genderBlock.filter(el => el.checked)[0].name;
  logUserIn(name, gender);
  $('#logInModal').modal('toggle');
})