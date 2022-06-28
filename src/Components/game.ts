import hero from "./hero";
import score from "./score";
import stage from "./stage";
import { Enemy } from "./enemy";

export class Game {
  bg: HTMLDivElement
  enemyRain: number;
  enemies: Array<any>;

  constructor() {
    this.bg = document.querySelector('#bg') as HTMLDivElement;
    this.enemyRain = 0
    this.enemies = [];
  }

  start() {
    console.log("start game");
    score.createScoreBoard();
    stage.createStageBoard();
    hero.createHero();

    this.enemyRain = setInterval(() => {
      this.enemies.push(new Enemy(30, 'ghost'));
    }, stage.enemyInterval);

    document.addEventListener("keydown", (e) => hero.move(e));
  }

  end() {
    console.log('game end')
    
    clearInterval(this.enemyRain);
    this.enemies.forEach((enemy) => enemy.die());
    alert(`level ${stage.level} stage is over`);

    if (stage.level < 3) {
      if (!confirm('Do you want to go to next stage?')) return;
      score.score = 0;
      stage.goToNext();
    } else {
      alert('Game over!');
    }
  }
}

export default new Game();
