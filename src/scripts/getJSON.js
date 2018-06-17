const getJSON = url => new Promise((resolve) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function sendData() {
    if (this.status === 200) {
      resolve(this.response);
    }
  };
  xhr.send();
});