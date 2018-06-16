function arithmeticTaskWindowLoader() {
    const tasksModalBody = document.getElementById('userModalTaskContainer');
    $('#userModalTaskContainer').empty();
    let tempTasksQuiz=document.createElement('h3');
    tempTasksQuiz.innerText='2+2';
    let tempElemet=document.createElement('input');
    tempElemet.classList.add('form-control');
    tempElemet.setAttribute('type','number');
    tasksModalBody.appendChild(tempTasksQuiz);
    tasksModalBody.appendChild(tempElemet);
}