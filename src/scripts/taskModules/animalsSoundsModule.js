import getAnimal from '../tasks/animalSounds/animalSounds';

export default async function animalsSoundsModule() {
  const toDo = 'Write animal';
  const type = 'text';
  const [task, answer] = await getAnimal();
  return await [toDo, task, answer, type];
}
