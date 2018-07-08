import * as Constants from '../../constants';

export default class Actor {
  constructor(xLoc, yLoc, type, name) {
    this.place = {
      x: xLoc * Constants.PX,
      y: yLoc * Constants.PX
    };
    this.type = type;
    if (name) {
      this.name = name;
    } else {
      this.name = 'John Smith';
    }
    this.healPoints = Constants.MAX_HEAL_POINTS;
  }
  redraw() {
    this.clearImage();
    this.drawImage();
    this.drawInfo();
    this.drawHP();
  }
  drawName(nameWrap) {
    let NAME_WRAP = 0;
    if (this.type === 'enemy') {
      NAME_WRAP = Constants.NAME_WRAP_ENEMY * Constants.PX;
    } else if (this.type === 'player') {
      NAME_WRAP = Constants.NAME_WRAP_PLAYER * Constants.PX;
    }
    Constants.actorsContext.font = `${Constants.NAME_SIZE * Constants.PX}px Verdana`;
    Constants.actorsContext.fillStyle = 'red';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.fillText(
      this.name,
      this.place.x - nameWrap * Constants.PX,
      this.place.y - NAME_WRAP
    );
    Constants.actorsContext.fillStyle = 'black';
    Constants.actorsContext.textAlign = 'center';
    Constants.actorsContext.strokeText(
      this.name,
      this.place.x - nameWrap * Constants.PX,
      this.place.y - NAME_WRAP
    );
  }
  drawHP(hpWrap) {
    const hpPercent = this.healPoints / Constants.MAX_HEAL_POINTS;
    let HP_WRAP = 0;
    if (this.type === 'enemy') {
      HP_WRAP = Constants.HP_WRAP_ENEMY * Constants.PX;
    } else if (this.type === 'player') {
      HP_WRAP = Constants.HP_WRAP_PLAYER * Constants.PX;
    }
    Constants.actorsContext.fillStyle = 'red';
    Constants.actorsContext.fillRect(
      this.place.x - hpWrap * Constants.PX,
      this.place.y - HP_WRAP,
      hpPercent * this.image.width,
      Constants.HP_LINE_HEIGHT * Constants.PX
    );
    Constants.actorsContext.fillStyle = 'black';
    Constants.actorsContext.strokeRect(
      this.place.x - hpWrap * Constants.PX,
      this.place.y - HP_WRAP,
      this.image.width,
      Constants.HP_LINE_HEIGHT * Constants.PX
    );
  }
  rebuild(rebuildedX, rebuildedY) {
    this.place = {
      x: rebuildedX,
      y: rebuildedY
    };
    if (this.type === 'enemy') {
      this.image.width = Constants.ENEMY_WIDTH * Constants.PX;
      this.image.height = Constants.ENEMY_HEIGHT * Constants.PX;
    } else if (this.type === 'player') {
      this.image.width = Constants.PLAYER_WIDTH * Constants.PX;
      this.image.height = Constants.PLAYER_HEIGHT * Constants.PX;
    }
    this.redraw();
  }
  heal(spell) {
    Constants.spellContext.drawImage(
      spell.image,
      this.place.x - this.image.width / 4,
      this.place.y,
      spell.width,
      spell.height
    );
    if (this.healPoints <= Constants.MAX_HEAL_POINTS - Constants.HEAL) {
      this.healPoints += Constants.HEAL;
    } else {
      this.healPoints = Constants.MAX_HEAL_POINTS;
    }
    this.effect();
    setTimeout(() => {
      Constants.spellContext.clearRect(
        this.place.x - this.image.width / 4,
        this.place.y,
        spell.width,
        spell.height
      );
    }, 500);
  }
  effect(time) {
    this.clearImage();
    setTimeout(() => {
      this.clearImage();
      this.redraw();
    }, time);
  }
  damaged() {
    if (this.healPoints - Constants.ATTACK > 0) {
      this.healPoints -= Constants.ATTACK;
      this.effect(Constants.EFFECT_DURATION);
    } else {
      this.loose();
    }
  }
}
