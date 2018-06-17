window.onload = function () {
  document.getElementsByClassName('game-menu')[0].style.top = '-' + CANVAS_HEIGHT + 'px';
  if (!localStorage.user) {
    document.getElementById('logInModalOpener').click();
  } else {
    $('body').toggleClass('bg-secondary');
    pageLoaderSpinnerFunction();
  }
}

window.onresize = rebuildCanvas();
setInterval(function () {
  rebuildCanvas();
}, 500);

function collapseGameMenu() {
  document.getElementById('gameMenu').classList.toggle('hidden');
}

document.getElementById('loginSubmit').addEventListener('click', function () {
  let name = document.getElementById('userName').value;
  let genderBlock = Array.from(document.querySelectorAll('.user-gender'));
  let gender = genderBlock.filter(el => el.checked)[0].value;
  logUserIn(name, gender);
  $('#logInModal').modal('toggle');
})