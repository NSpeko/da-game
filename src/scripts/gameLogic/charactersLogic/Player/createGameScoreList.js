import * as Constants from '../../constants';
import getTop from './getTop';

export default function createGameScoreList(allScores, currentScore) {
  let allScopeScores = allScores;
  const $gameWindow = $('#gameWindow');
  $gameWindow.append('<h3>Score List</h3>');
  const tempCurrUserScoreOutput = document.createElement('P');
  tempCurrUserScoreOutput.innerText = `Your Score: ${currentScore.score}`;
  $gameWindow.append(tempCurrUserScoreOutput);
  let topCount = Constants.TOP_COUNT;
  [topCount, allScopeScores] = getTop(allScopeScores, topCount, currentScore);
  for (let i = 0; i < topCount; i += 1) {
    const tempContent = document.createElement('h3');
    tempContent.innerText = `${i + 1}. ${allScopeScores[i].name} ${allScopeScores[i].score} `;
    $gameWindow.append(tempContent);
  }
}
