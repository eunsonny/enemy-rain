import hero from './hero';
import score from './score';
import game from './game';

export class Enemy {
  enemy: HTMLDivElement;
  character: string;
  positionX: number;
  positionY: number;
  enemyDown: number;

  constructor(y: number, characterName: string) {
    this.enemy = document.createElement("div");
    this.character = characterName;
    this.positionX = Math.random() * 755;
    this.positionY = y;
    this.enemyDown = 0;
    this.creatEnemy();
  }

  creatEnemy() {
    this.enemy.className = this.character;
    this.enemy.style.left = `${this.positionX}px`;
    this.enemy.style.top = `${this.positionY}px`;
    game.bg.appendChild(this.enemy);
    this.goDown();
  }

  goDown() {
    this.enemyDown = setInterval(() => {
       if (this.positionY < 545) {
        this.positionY += 5;
        this.enemy.style.top = `${this.positionY}px`;
       }

       if (this.positionY === 485) {
         if ((Math.abs(hero.positionX - this.positionX) <= 35) && hero.status === 'back') {
            this.die();
            score.plusPoint();
         }  
       }

       if (this.positionY === 545) {
         this.die()
       }
    }, 100)
  }

  die() {
    this.enemy.className = 'ghost die';
    clearInterval(this.enemyDown);
    setTimeout(() => {
      game.bg.removeChild(this.enemy);
    }, 2000)
  }
}

