import getRandomCountNum from '../getRandomCountNum';

export default function countingTask() {
  const SIGN_ARRAY = ['-', '+', '*'];
  const MAX_COUNTING_NUM = 20;
  const sign = SIGN_ARRAY[Math.floor(Math.random() * SIGN_ARRAY.length)];
  const firstNum = getRandomCountNum(MAX_COUNTING_NUM);
  const secondNum = getRandomCountNum(MAX_COUNTING_NUM);
  const task = `${firstNum} ${sign} ${secondNum}`;
  const answer = eval(task);
  return [task, answer];
}
