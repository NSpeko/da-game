import * as Constants from './constants';
import countingTask from './tasks/counting/counting';
import getSpeechWord from './tasks/speech/speech';
import getTranslation from './tasks/translation/translation';
import { createSpell, enemyAttack } from './spellCast';
import getCapital from './tasks/countryCapitals/countryCapitals';
import getAnimal from './tasks/animalSounds/animalSounds';
import getFlag from './tasks/flag/flag';
import getAnimalImage from './tasks/animal/animal';

export default function taskWindowLoader(spell, start, target) {
  $('#userModalTaskContainer').empty();
  $('#modalFooter').empty();
  addTask(spell, start, target);
}

async function addTask(spell, start, target) {
  const randomTask = Constants.TASKSLIST[Math.floor(Math.random() * Constants.TASKSLIST.length)];
  let type;
  let toDo;
  let task;
  let answer;
  switch (randomTask) {
    case 'counting':
      toDo = 'Count';
      type = 'number';
      [task, answer] = countingTask();
      break;
    case 'translation':
      toDo = 'Translate';
      type = 'text';
      [task, answer] = await getTranslation();
      break;
    case 'capitals':
      toDo = 'Write capital';
      type = 'text';
      [task, answer] = await getCapital();
      break;
    case 'animalSounds':
      toDo = 'Write animal';
      type = 'text';
      [task, answer] = await getAnimal();
      break;
    case 'flag':
      toDo = "Who's is this flag?";
      type = 'text';
      task = '';
      const [flagImage, flagCountry] = await getFlag();
      answer = flagCountry;
      drawImage(flagImage);
      break;
    case 'animals':
      toDo = 'Who is it?';
      type = 'text';
      task = '';
      const [animalImage, animalName] = await getAnimalImage();
      answer = animalName;
      drawImage(animalImage);
      break;
    case 'speech':
      toDo = 'Write what you hear';
      type = 'text';
      task = '';
      answer = await getSpeechWord();
      setTimeout(() => {
        speakToMe(answer);
      }, Constants.SPEECH_DELATION);
      createRepeatButton(answer);
      break;
  }
  createTaskQuiz(toDo, task);
  createSolveElement(type);
  createSubmitButton();
  document.getElementById('submitTask').addEventListener('click', () => {
    isSolved(answer, spell, start, target);
  });
  document.getElementById('userAnswer').addEventListener('keyup', evt => {
    evt.preventDefault();
    if (evt.keyCode === Constants.KEYBOARDEVENT.ENTER) {
      document.getElementById('submitTask').click();
    }
  });
}

function drawImage(imageSrc) {
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', imageSrc);
  imageElement.setAttribute('width', '50%');
  imageElement.style.border = 'black 1px solid';
  document.getElementById('userModalTaskContainer').appendChild(imageElement);
}

function speakToMe(word) {
  const synth = window.speechSynthesis;
  synth.getVoices();
  const wordSpeech = new SpeechSynthesisUtterance(word);
  wordSpeech.lang = 'en-US';
  wordSpeech.pitch = 0.7;
  synth.speak(wordSpeech);
}

function isSolved(answer, spell, start, target) {
  const userAnswer = document.getElementById('userAnswer').value;
  const tasksQuiz = document.getElementById('taskQuiz');
  tasksQuiz.style.color = 'red';
  if (answer.toString().toLowerCase() === userAnswer.toLowerCase().trim()) {
    tasksQuiz.innerText = 'RIGHT!';
    setInterval(createSpell(spell, start, target), Constants.MODAL_DELATION);
  } else {
    tasksQuiz.innerText = `WRONG! Answer is '${answer}'`;
    setInterval(enemyAttack(), Constants.MODAL_DELATION);
  }
  tasksQuiz.style.color = 'black';
}

function createSubmitButton() {
  const submitButton = document.createElement('button');
  submitButton.setAttribute('class', 'btn btn-primary float-left');
  submitButton.setAttribute('id', 'submitTask');
  submitButton.setAttribute('data-dismiss', 'modal');
  submitButton.innerHTML = 'Submit';
  document.getElementById('modalFooter').appendChild(submitButton);
}

function createRepeatButton(word) {
  const repeatButton = document.createElement('button');
  repeatButton.setAttribute('class', 'btn btn-danger float-right');
  repeatButton.setAttribute('id', 'repeatTask');
  repeatButton.innerHTML = 'Repeat';
  repeatButton.addEventListener('click', () => {
    speakToMe(word);
  });
  document.getElementById('modalFooter').appendChild(repeatButton);
}

function createTaskQuiz(toDo, task) {
  const tempTasksQuiz = document.createElement('h3');
  tempTasksQuiz.setAttribute('id', 'taskQuiz');
  tempTasksQuiz.innerText = `${toDo}: ${task}`;
  document.getElementById('userModalTaskContainer').appendChild(tempTasksQuiz);
}

function createSolveElement(type) {
  const tempElemet = document.createElement('input');
  tempElemet.classList.add('form-control');
  tempElemet.setAttribute('id', 'userAnswer');
  tempElemet.setAttribute('type', `${type}`);
  document.getElementById('userModalTaskContainer').appendChild(tempElemet);
  document.onkeypress = () => {
    document.getElementById('userAnswer').focus();
  };
}
