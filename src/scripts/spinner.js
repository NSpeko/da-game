function pageLoaderSpinnerFunction() {
  $('document').ready(function () {
    setTimeout(function () {
      $('#pageLoaderSpinnerElement').toggleClass('not-displayed');
      $('#onlyLoggedUserContent').toggleClass('not-displayed');
      $('body').toggleClass('bg-secondary');
    }, 200);
  });
}

export {
  pageLoaderSpinnerFunction
}