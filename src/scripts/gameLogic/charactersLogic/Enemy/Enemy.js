import * as Constants from '../../constants';
import Actor from '../Actors/Actor';
import Player from '../Player/Player';
import { createEnemy } from '../Actors/creating';

export default class Enemy extends Actor {
  constructor(xLoc, yLoc, type = 'enemy', image, name, build) {
    super(xLoc, yLoc, type, name);
    this.image = {
      head: build.head,
      body: build.body,
      weapon: build.weapon,
      legs: build.legs,
      width: image.width,
      height: image.height
    };
    this.healPoints = Constants.MAX_HEAL_POINTS;
    this.redraw();
  }
  drawInfo() {
    this.drawName(0);
    this.drawHP(this.image.width / 3);
  }
  drawImage() {
    Constants.actorsContext.drawImage(
      this.image.legs,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 6,
      this.place.y +
        (Constants.BODY_HEIGHT * Constants.PX) / 1.5 +
        (Constants.HEAD_HEIGHT * Constants.PX) / 3,
      Constants.LEGS_WIDTH * Constants.PX,
      Constants.LEGS_HEIGHT * Constants.PX
    );
    Constants.actorsContext.drawImage(
      this.image.body,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 3.5,
      this.place.y + (Constants.HEAD_HEIGHT * Constants.PX) / 4,
      Constants.BODY_WIDTH * Constants.PX,
      Constants.BODY_HEIGHT * Constants.PX
    );
    Constants.actorsContext.drawImage(
      this.image.head,
      this.place.x - (Constants.BODY_WIDTH * Constants.PX) / 50,
      this.place.y - (Constants.HEAD_HEIGHT * Constants.PX) / 3,
      Constants.HEAD_WIDTH * Constants.PX,
      Constants.HEAD_HEIGHT * Constants.PX
    );
    Constants.actorsContext.drawImage(
      this.image.weapon,
      this.place.x - 1.1 * Constants.WEAPON_WIDTH * Constants.PX,
      this.place.y +
        (Constants.HEAD_HEIGHT * Constants.PX - (Constants.WEAPON_HEIGHT / 1.5) * Constants.PX),
      Constants.WEAPON_WIDTH * Constants.PX,
      Constants.WEAPON_HEIGHT * Constants.PX
    );
  }
  loose() {
    Player.win();
    createEnemy();
    this.healPoints = this.healPoints;
  }
  clearImage() {
    Constants.actorsContext.clearRect(
      this.place.x - this.image.width / 2,
      this.place.y,
      this.image.width * 1.3,
      this.image.height
    );
  }
}
