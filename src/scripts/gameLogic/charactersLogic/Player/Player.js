import Actor from '../Actors/Actor';
import * as Constants from '../../constants';
import { createEnemy } from '../Actors/creating';
import createGameScoreList from './createGameScoreList';

export default class Player extends Actor {
  // ???
  constructor(xLoc, yLoc, type = 'player', image, name) {
    super(xLoc, yLoc, type, name);
    this.score = 0;
    this.image = image;
    this.redraw();
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  drawImage() {
    Constants.actorsContext.drawImage(
      this.image,
      this.place.x,
      this.place.y,
      this.image.width,
      this.image.height
    );
  }
  drawInfo() {
    this.drawName(-this.image.width / 3);
    this.drawHP(this.place.x / 3);
    this.drawLevel();
  }
  drawLevel() {
    Constants.actorsContext.font = `${Constants.LVL_SIZE * Constants.PX}px Verdana`;
    Constants.actorsContext.fillStyle = 'orange';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.fillText(
      this.score + 1,
      Constants.CANVAS_WIDTH / 2 - this.score * Constants.PX,
      Constants.LVL_WRAP * Constants.PX + Constants.LVL_SIZE * Constants.PX
    );
  }
  static win() {
    this.score += 1;
    createEnemy();
  }
  loose() {
    const gameWindow = $('#gameWindow');
    $('#onlyLoggedUserContent')[0].style.display = 'none';
    gameWindow.toggleClass('main-game-container main-score-container bg-light');
    let allScores = [];
    if (localStorage.scoreAll) {
      allScores = JSON.parse(localStorage.scoreAll);
    }
    const currentScore = {
      name: this.name,
      score: this.score
    };
    createGameScoreList(allScores, currentScore);
    gameWindow.append(
      '<button class="btn btn-primary" onclick="location.reload();">Repeat?</button>'
    );
    localStorage.scoreAll = JSON.stringify(allScores);
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  clearImage() {
    Constants.actorsContext.clearRect(
      this.place.x,
      this.place.y,
      this.image.width,
      this.image.heigth
    );
  }
}
