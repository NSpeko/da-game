import createSpell from '../gameLogic/spellLogic/spellLifeCycle/createSpell';
import enemyAttack from '../gameLogic/spellLogic/spellLifeCycle/enemyAttack';
import * as Constants from '../gameLogic/constants';

export default function isSolved(answer, spell, start, target) {
  const userAnswer = document.getElementById('userAnswer').value;
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
