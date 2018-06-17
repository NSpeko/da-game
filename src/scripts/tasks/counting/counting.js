import * as Constants from '../../constants'

const countingTask = () => {
  const signArray = Constants.SIGN_ARRAY;
  const sign = signArray[~~(Math.random() * signArray.length)];
  const firstNum = getRandomCountNum(Constants.MAX_COUNTING_NUM);
  const secondNum = getRandomCountNum(Constants.MAX_COUNTING_NUM);
  const task = `${firstNum} ${sign} ${secondNum}`;
  const answer = eval(task);
  return [task, answer]
}

const getRandomCountNum = (maxNum) => Math.round(Math.random() * maxNum);

export {
  countingTask
}