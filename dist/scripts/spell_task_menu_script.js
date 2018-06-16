function arithmeticTaskWindowLoader() {
  const tasksModalBody = document.getElementById('userModalTaskContainer');
  $('#userModalTaskContainer').empty();
  const tempTasksQuiz = document.createElement('h3');
  const [task, answer] = countingTask();
  tempTasksQuiz.innerText = task;
  const tempElemet = document.createElement('input');
  tempElemet.classList.add('form-control');
  tempElemet.setAttribute('type', 'number');
  tasksModalBody.appendChild(tempTasksQuiz);
  tasksModalBody.appendChild(tempElemet);
}