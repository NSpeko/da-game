import getFlag from '../tasks/flag/flag';
import drawImage from './drawImage';

export default async function flagModule() {
  const toDo = "Who's is this flag?";
  const type = 'text';
  const task = '';
  const [flagImage, answer] = await getFlag();
  drawImage(flagImage);
  return await [toDo, task, answer, type];
}
