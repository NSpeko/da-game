import getTranslation from '../tasks/translation/translation';

export default async function translationModule() {
  const toDo = 'Translate';
  const type = 'text';
  const [task, answer] = await getTranslation();
  return await [toDo, task, answer, type];
}
