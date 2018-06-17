const speechFolder = document.currentScript.src.split('/').slice(0, -1).join('/');
const speechDictionaryUrl = `${speechFolder}/speech-dictionary.json`;

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

async function speech() {
  const word = await getSpeechWord();
}