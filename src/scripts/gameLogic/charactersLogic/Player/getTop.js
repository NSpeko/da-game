export default function getTop(allScores, topCount, currentScore) {
  let tempLength = topCount;
  allScores.push(currentScore);
  if (allScores.length < topCount) {
    tempLength = allScores.length;
  }
  allScores.sort((a, b) => b.score - a.score);
  return [tempLength, allScores];
}
