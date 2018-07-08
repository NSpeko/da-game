import * as Constants from '../gameLogic/constants';

export default function getRandomTask() {
  return Constants.TASKSLIST[Math.floor(Math.random() * Constants.TASKSLIST.length)];
}
