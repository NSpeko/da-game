export default function stopAnimation(interval, x = 0, y = 0, context, width, height) {
  clearInterval(interval);
  context.clearRect(x, y, width, height);
}
