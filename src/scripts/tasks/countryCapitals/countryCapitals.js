import { getJSON } from '../../global/getJSON';

const capitalsDictionaryUrl = '/resources/dictionaries/capitals-dictionary.json';

export default function getCapital() {
  return getJSON(capitalsDictionaryUrl)
    .then(
      data =>
        new Promise(resolve => {
          const entries = JSON.parse(data);
          resolve(entries);
        })
    )
    .then(
      entries =>
        new Promise(resolve => {
          let entry;
          while (!entry) {
            entry = entries[Math.floor(Math.random() * entries.length)];
            if (entry) resolve([entry.country, entry.capital]);
          }
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}
