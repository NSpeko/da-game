import typeSign from '../tasks/typeSign/typeSign';

export default function typeSignModule() {
  const toDo = 'Type right sign';
  const type = 'text';
  const [task, answer] = typeSign();
  return [toDo, task, answer, type];
}
