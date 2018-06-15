window.onload = function () {
  if (!localStorage.user) {
    document.getElementById('logInModalOpener').click();
  } else {
    document.getElementById('onlyLoggedUserContent').style.display = 'block';
  }
}

class User {
  constructor(firstName, email) {
    this.firstName = firstName;
    this.email = email;
  }
}

class Score {
  constructor(user, gameMode, time) {
    this.user = user;
    this.gameMode = gameMode;
    this.time = time;
  }
}

function logUserInByForm() {
  let tempForm = document.forms['loginForm'];
  if (tempForm['userName'].value !== '' && tempForm['userEmail'].value !== '') {
    localStorage.user = JSON.stringify(new User(tempForm['userName'].value, tempForm['userEmail'].value));
    window.click();
    document.getElementById('onlyLoggedUserContent').style.display = 'block';
  }
}