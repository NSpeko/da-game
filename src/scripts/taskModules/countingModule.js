import countingTask from '../tasks/counting/counting';

export default function countingModule() {
  const toDo = 'Count';
  const type = 'number';
  const [task, answer] = countingTask();
  return [toDo, task, answer, type];
}
