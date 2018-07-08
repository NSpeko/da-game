export default function stopSound(spell) {
  spell.sound.pause();
  spell.sound.currentTime = 0;
}
