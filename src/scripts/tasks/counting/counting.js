import * as Constants from '../../constants';

export default function countingTask() {
  const signArray = Constants.SIGN_ARRAY;
  const sign = signArray[Math.floor(Math.random() * signArray.length)];
  const firstNum = getRandomCountNum(Constants.MAX_COUNTING_NUM);
  const secondNum = getRandomCountNum(Constants.MAX_COUNTING_NUM);
  const task = `${firstNum} ${sign} ${secondNum}`;
  const answer = eval(task);
  return [task, answer];
}

const getRandomCountNum = maxNum => Math.round(Math.random() * maxNum);
