import getRandomCountNum from '../getRandomCountNum';

// now it's unstable and i know why, but it's secret
export default function typeSign() {
  const SIGN_ARRAY = ['-', '+', '*'];
  const MAX_COUNTING_NUM = 20;
  const sign = SIGN_ARRAY[Math.floor(Math.random() * SIGN_ARRAY.length)];
  const firstNum = getRandomCountNum(MAX_COUNTING_NUM);
  const secondNum = getRandomCountNum(MAX_COUNTING_NUM);
  const answer = eval(`${firstNum} ${sign} ${secondNum}`);
  const task = `${firstNum} ... ${secondNum} = ${answer}`;
  return [task, sign];
}
