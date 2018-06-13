const translationFolder = document.currentScript.src.split('/').slice(0, -1).join('/');
const translationDictionaryUrl = `${translationFolder}/languages-dictionary.json`;

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
  console.log(`${unTranslated} - ${translated}`);
}

drawTranslations();
