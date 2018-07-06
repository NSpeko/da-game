import { getJSON } from '../../getJSON';

const flagDictionaryUrl = '/resources/dictionaries/countryFlags-dictionary.json';
const flagImagesUrl = '/resources/images/tasks/flags/';
export default function getFlag() {
  return getJSON(flagDictionaryUrl)
    .then(
      data =>
        new Promise(resolve => {
          const flags = JSON.parse(data);
          resolve(flags);
        })
    )
    .then(
      flags =>
        new Promise(resolve => {
          let flag;
          while (!flag) {
            flag = flags[Math.round(Math.random() * flags.length)];
            if (flag) resolve([`${flagImagesUrl}${flag.image}`, flag.country]);
          }
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}
