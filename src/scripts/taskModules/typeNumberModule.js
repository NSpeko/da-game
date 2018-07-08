import typeNumber from '../tasks/typeNumber/typeNumber';

export default function typeNumberModule() {
  const toDo = 'Type right X';
  const type = 'number';
  const [task, answer] = typeNumber();
  return [toDo, task, answer, type];
}
