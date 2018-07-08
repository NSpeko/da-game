import { getJSON } from '../../global/getJSON';

const speechDictionaryUrl = '/resources/dictionaries/speech-dictionary.json';
export default function getSpeechWord() {
  const lang = 'eng';
  return getJSON(speechDictionaryUrl)
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
            word = words[Math.floor(Math.random() * words.length)];
            if (word) resolve(word[lang]);
          }
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}
