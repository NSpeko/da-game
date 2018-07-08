import getRandomTask from './getRandomTask';
import countingModule from './countingModule';
import typeNumberModule from './typeNumberModule';
import typeSignModule from './typeSignModule';
import translationModule from './translationModule';
import capitalsModule from './capitalsModule';
import animalsModule from './animalsModule';
import animalsSoundsModule from './animalsSoundsModule';
import shuffledWordsModule from './shuffledWordsModule';
import speechModule from './speechModule';
import flagModule from './flagModule';
import sortableWordsModule from './sortableWordsModule';
import buildTaskModal from '../taskModal/buildTaskModal';

export default async function addTask(spell, start, target) {
  const randomTask = getRandomTask();
  let type;
  let toDo;
  let task;
  let answer;
  let preventFlag = false;
  switch (randomTask) {
    case 'counting':
      [toDo, task, answer, type] = countingModule();
      break;
    case 'typeNumber':
      [toDo, task, answer, type] = typeNumberModule();
      break;
    case 'typeSign':
      [toDo, task, answer, type] = typeSignModule();
      break;
    case 'translation':
      [toDo, task, answer, type] = await translationModule();
      break;
    case 'capitals':
      [toDo, task, answer, type] = await capitalsModule();
      break;
    case 'animalSounds':
      [toDo, task, answer, type] = await animalsSoundsModule();
      break;
    case 'flag':
      [toDo, task, answer, type] = await flagModule();
      break;
    case 'animals':
      [toDo, task, answer, type] = await animalsModule();
      break;
    case 'shuffledWords':
      [toDo, task, answer, type] = await shuffledWordsModule();
      break;
    case 'speech':
      [toDo, task, answer, type] = await speechModule();
      break;
    case 'sortableWords':
      preventFlag = await sortableWordsModule(spell, start, target);
      break;
  }
  if (!preventFlag) {
    buildTaskModal(toDo, task, answer, type, spell, start, target);
  }
}
