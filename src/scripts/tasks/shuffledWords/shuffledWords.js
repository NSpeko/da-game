import { getJSON } from '../../getJSON';

const wordsDictionaryUrl = '/resources/dictionaries/words-dictionary.json';
const language = 'eng';

export default function getWord() {
  return getJSON(wordsDictionaryUrl)
    .then(
      data =>
        new Promise(resolve => {
          const words = JSON.parse(data);
          resolve(words);
        })
    )
    .then(
      words =>
        new Promise(resolve => {
          let word;
          while (!word) {
            word = words[Math.round(Math.random() * words.length)][language];
            if (word) {
              const shuffled = shuffleWord(word);
              resolve([shuffled, word]);
            }
          }
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}

function shuffleWord(word) {
  const wordForShuffle = word.split('');
  for (let i = wordForShuffle.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordForShuffle[i], wordForShuffle[j]] = [wordForShuffle[j], wordForShuffle[i]];
  }
  return wordForShuffle;
}
