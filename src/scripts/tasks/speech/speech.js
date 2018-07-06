import { getJSON } from '../../getJSON';

const speechDictionaryUrl = '/resources/dictionaries/speech-dictionary.json';
const getSpeechWord = () => {
  const lang = 'eng';
  return getJSON(speechDictionaryUrl)
    .then(data => new Promise((resolve) => {
      const words = JSON.parse(data);
      resolve(words);
    }))
    .then(words => new Promise((resolve) => {
      let word;
      while (!word) {
        word = words[Math.round(Math.random() * words.length)];
        if (word) resolve(word[lang]);
      }
    }))
    .catch((error) => {
      throw new Error(error);
    });
};

export { getSpeechWord };
