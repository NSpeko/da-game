import {
  getJSON
} from '../../getJSON'

const translationDictionaryUrl = `/resources/dictionaries/languages-dictionary.json`;
const getTranslation = () => {
  const fromLang = 'eng';
  const toLang = 'rus';

  return getJSON(translationDictionaryUrl)
    .then(data => new Promise((resolve) => {
      const words = JSON.parse(data);
      resolve(words);
    }))
    .then(words => new Promise((resolve) => {
      let word;
      while (!word) {
        word = words[Math.round(Math.random() * words.length)];
        if (word) resolve([word[fromLang], word[toLang]]);
      }
    }))
    .catch((error) => {
      throw new Error(error);
    });
};

async function drawTranslations() {
  const [unTranslated, translated] = await getTranslation();
}

export {
  getTranslation
}