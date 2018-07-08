import createTaskQuiz from './createTaskQuiz';
import createSolveElement from './createSolveElement';
import createSubmitButton from './createSubmitButton';
import isSolved from './isSolved';
import * as Constants from '../gameLogic/constants';

export default function buildTaskModal(toDo, task, answer, type, spell, start, target) {
  createTaskQuiz(toDo, task);
  createSolveElement(type);
  createSubmitButton();
  document.getElementById('submitTask').addEventListener('click', () => {
    isSolved(answer, spell, start, target);
  });
  document.getElementById('userAnswer').addEventListener('keyup', evt => {
    evt.preventDefault();
    if (evt.keyCode === Constants.KEYBOARDEVENT.ENTER) {
      document.getElementById('submitTask').click();
    }
  });
}
