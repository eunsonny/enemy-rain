import stage from "./stage";
import score from "./score";
import hero from "./hero";
import { Enemy } from "./enemy";

export class Game {
  bg: HTMLDivElement;
  enemyRain: number;
  enemies: Array<Enemy>;

  constructor() {
    this.bg = document.querySelector("#bg") as HTMLDivElement;
    this.enemyRain = 0;
    this.enemies = [];
  }

  start() {
    console.log("start game");
    score.renderScoreBoard();
    stage.renderStageBoard();
    hero.createHero();
    document.addEventListener("keydown", (e) => hero.move(e));

    const gameOverText = document.querySelector('#game_over');
    if (gameOverText) {
      gameOverText.remove();
    }

    stage.start();
  }

  end() {
    // 메인으로 가기
    console.log("game end");
    stage.level = 1;
    stage.time = 0
    score.score = 0;
    this.bg.innerHTML = '';
    
    const gameOver = document.createElement('span');
    gameOver.id = 'game_over';
    gameOver.innerText = "game Over";
    this.bg.appendChild(gameOver);
  }
}

export default new Game();
