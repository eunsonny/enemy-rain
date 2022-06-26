import hero from "./hero";
import score from "./score";
import { Enemy } from "./enemy";

export class Game {
  enemyRain: number;

  constructor() {
    this.enemyRain = 0
  }

  start() {
    console.log("start game");
    score.createScoreBoard();
    hero.createHero();

    // this.enemyRain = setInterval(() => {
    //   new Enemy(30);
    // }, 1000);

    document.addEventListener("keydown", (e) => hero.move(e));
  }

  end() {
    console.log('game end')
    clearInterval(this.enemyRain);
  }
}

export default new Game();
