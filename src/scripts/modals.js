function taskWindowLoader(spell, start, target) {
  $('#userModalTaskContainer').empty();
  $('#modalFooter').empty();
  addTask(spell, start, target);
}

async function addTask(spell, start, target) {
  const randomTask = TASKSLIST[~~(Math.random() * TASKSLIST.length)];
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
    case 'speech':
      toDo = 'Write what you hear';
      type = 'text';
      task = '';
      answer = await getSpeechWord();
      setTimeout(function () {
        speakToMe(answer)
      }, SPEECH_DELATION);
      break;
  }
  createTaskQuiz(toDo, task);
  createSolveElement(type);
  createSubmitButton();
  document.getElementById('submitTask').addEventListener('click', function () {
    isSolved(answer, spell, start, target);
  });

}

function speakToMe(word) {
  const synth = window.speechSynthesis;
  synth.getVoices();
  const wordSpeech = new SpeechSynthesisUtterance(word);
  synth.speak(wordSpeech);
}

function isSolved(answer, spell, start, target) {
  const userAnswer = document.getElementById('userAnswer').value;
  const tasksQuiz = document.getElementById('taskQuiz');
  tasksQuiz.style.color = 'red';
  if (answer == userAnswer) {
    tasksQuiz.innerText = `RIGHT!`;
    setInterval(createSpell(spell, start, target), MODAL_DELATION);
  } else {
    tasksQuiz.innerText = `WRONG! Answer is '${answer}'`;
    setInterval(enemyAttack(), MODAL_DELATION);
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
}