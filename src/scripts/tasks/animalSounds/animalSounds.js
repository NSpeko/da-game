import { getJSON } from '../../getJSON';

const animalSoundsDictionaryUrl = '/resources/dictionaries/animalSounds-dictionary.json';

export default function getAnimal() {
  return getJSON(animalSoundsDictionaryUrl)
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
            animal = animals[Math.round(Math.random() * animals.length)];
            if (animal) resolve([animal.sound, animal.name]);
          }
        })
    )
    .catch(error => {
      throw new Error(error);
    });
}
