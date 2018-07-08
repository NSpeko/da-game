import getAnimalImage from '../tasks/animal/animal';
import drawImage from './drawImage';

export default async function animalsModule() {
  const toDo = 'Who is it?';
  const type = 'text';
  const task = '';
  const [animalImage, answer] = await getAnimalImage();
  drawImage(animalImage);
  return await [toDo, task, answer, type];
}
