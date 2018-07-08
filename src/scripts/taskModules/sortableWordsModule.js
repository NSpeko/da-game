import getWord from '../tasks/shuffledWords/shuffledWords';
import createSpell from '../gameLogic/spellLogic/spellLifeCycle/createSpell';
import enemyAttack from '../gameLogic/spellLogic/spellLifeCycle/enemyAttack';
import * as Constants from '../gameLogic/constants';
import createTaskQuiz from '../taskModal/createTaskQuiz';
import createSubmitButton from '../taskModal/createSubmitButton';

function createSortableWord(wordArr) {
  const shuffledwordElement = document.createElement('span');
  shuffledwordElement.setAttribute('id', 'sortable');
  wordArr.forEach(el => {
    const letterElement = document.createElement('span');
    letterElement.setAttribute('class', 'letter');
    letterElement.textContent = el;
    shuffledwordElement.appendChild(letterElement);
  });
  document.getElementById('userModalTaskContainer').appendChild(shuffledwordElement);
  $(() => {
    $('#sortable').sortable();
    $('#sortable').disableSelection();
  });
}

function isSorted(answer, spell, start, target) {
  const userAnswer = Array.from(document.querySelectorAll('.letter'))
    .map(el => el.textContent)
    .join('');
  const tasksQuiz = document.getElementById('taskQuiz');
  tasksQuiz.style.color = 'red';
  if (answer.toString().toLowerCase() === userAnswer.toLowerCase().trim()) {
    tasksQuiz.innerText = 'RIGHT!';
    setInterval(createSpell(spell, start, target), Constants.MODAL_DELATION);
  } else {
    tasksQuiz.innerText = `WRONG! Answer is '${answer}'`;
    setInterval(enemyAttack(), Constants.MODAL_DELATION);
  }
  tasksQuiz.style.color = 'black';
}

export default async function sortableWordsModule(spell, start, target) {
  const toDo = 'Sort letters to get the word';
  const [wordForShuffle, answer] = await getWord();
  const task = '';
  createTaskQuiz(toDo, task);
  createSortableWord(wordForShuffle);
  const preventFlag = true;
  createSubmitButton();
  document.getElementById('submitTask').addEventListener('click', () => {
    isSorted(answer, spell, start, target);
  });
  return await preventFlag;
}
