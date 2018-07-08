import getWord from '../tasks/shuffledWords/shuffledWords';

function createShuffledWord(wordArr) {
  const shuffledwordElement = document.createElement('span');
  wordArr.forEach(el => {
    const letterElement = document.createElement('span');
    letterElement.setAttribute('class', 'letter');
    letterElement.textContent = el;
    shuffledwordElement.appendChild(letterElement);
  });
  document.getElementById('userModalTaskContainer').appendChild(shuffledwordElement);
}

export default async function shuffledWordsModule() {
  const toDo = 'What word is it';
  const type = 'text';
  const task = '';
  const [shuffledWord, answer] = await getWord();
  createShuffledWord(shuffledWord);
  return await [toDo, task, answer, type];
}
