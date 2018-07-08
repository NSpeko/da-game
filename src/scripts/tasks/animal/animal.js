import { getJSON } from '../../global/getJSON';

const animalDictionaryUrl = '/resources/dictionaries/animals-dictionary.json';
const animalImagesUrl = '/resources/images/tasks/animals/';
export default function getAnimalImage() {
  return getJSON(animalDictionaryUrl)
    .then(
      data =>
        new Promise(resolve => {
          const animals = JSON.parse(data);
          resolve(animals);
        })
    )
    .then(
      animals =>
        new Promise(resolve => {
          let animal;
          while (!animal) {
            animal = animals[Math.floor(Math.random() * animals.length)];
            if (animal) resolve([`${animalImagesUrl}${animal.image}`, animal.name]);
          }
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}
