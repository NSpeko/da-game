window.onload = function () {
  document.getElementsByClassName('game-menu')[0].style.top = '-' + CANVAS_HEIGHT + 'px';
  if (!localStorage.user) {
    document.getElementById('logInModalOpener').click();
  } else {
      $('body').toggleClass('bg-secondary');
      pageLoaderSpinnerFunction();
  }
}

class User {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

function logUserIn(name, gender) {
  const user = new User(name, gender);
  if (user.name && user.gender) {
    localStorage.user = JSON.stringify(user);
      $('body').toggleClass('bg-secondary');
    pageLoaderSpinnerFunction();
  }
  drawHeroes();
}