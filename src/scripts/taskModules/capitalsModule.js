import getCapital from '../tasks/countryCapitals/countryCapitals';

export default async function capitalsModule() {
  const toDo = 'Write capital';
  const type = 'text';
  const [task, answer] = await getCapital();
  return await [toDo, task, answer, type];
}
