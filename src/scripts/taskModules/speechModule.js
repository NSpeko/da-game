import getSpeechWord from '../tasks/speech/speech';
import * as Constants from '../gameLogic/constants';

function speakToMe(word) {
  const synth = window.speechSynthesis;
  synth.getVoices();
  const wordSpeech = new SpeechSynthesisUtterance(word);
  wordSpeech.lang = 'en-US';
  wordSpeech.pitch = 0.7;
  synth.speak(wordSpeech);
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

export default async function speechModule() {
  const toDo = 'Write what you hear';
  const type = 'text';
  const task = '';
  const answer = await getSpeechWord();
  setTimeout(() => {
    speakToMe(answer);
  }, Constants.SPEECH_DELATION);
  createRepeatButton(answer);
  return await [toDo, task, answer, type];
}
