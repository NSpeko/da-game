export default function typeNumber() {
  const SIGN_ARRAY = ['-', '+', '*'];
  const MAX_COUNTING_NUM = 20;
  const sign = SIGN_ARRAY[Math.floor(Math.random() * SIGN_ARRAY.length)];
  const firstNum = getRandomCountNum(MAX_COUNTING_NUM);
  const secondNum = getRandomCountNum(MAX_COUNTING_NUM);
  const answer = eval(`${firstNum} ${sign} ${secondNum}`);
  const task = `${firstNum} ${sign} X = ${answer}`;
  return [task, secondNum];
}

const getRandomCountNum = maxNum => Math.round(Math.random() * maxNum);
