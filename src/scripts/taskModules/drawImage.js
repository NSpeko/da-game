export default function drawImage(imageSrc) {
  const imageElement = document.createElement('img');
  imageElement.setAttribute('src', imageSrc);
  imageElement.setAttribute('width', '50%');
  imageElement.style.border = 'black 1px solid';
  document.getElementById('userModalTaskContainer').appendChild(imageElement);
}
