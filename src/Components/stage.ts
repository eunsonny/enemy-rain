import game from "./game";
import score from "./score";
import { lastStageLevel, timeLimit } from "../../constant";
import { Enemy } from "./enemy";


export class Stage {
  stageBoard: HTMLDivElement;
  level: number;
  time: number;
  timeBoard: HTMLDivElement;
  enemies: Array<Enemy>;
  enemySpeed: number;
  enemyInterval: number;
  
  enemyRain: number;
  timeStart: number;

  constructor() {
    this.stageBoard = document.createElement('div');
    this.timeBoard = document.createElement('div');
    this.level = 1;
    this.time = 0;
    this.timeStart = 0;
    this.enemies = [];
    this.enemyRain = 0;

    this.enemySpeed = 5;
    this.enemyInterval = 1000;
  }

  renderStageBoard() {
    this.stageBoard.id = "stage_board";
    this.stageBoard.innerHTML = `<span id="score">Stage: level ${this.level}</span>`
    game.bg.appendChild(this.stageBoard);
  }
  
  renderTimeBoard() {
    this.timeBoard.innerHTML = `<span id="time">${this.getTimeText()}</span>`
    game.bg.appendChild(this.timeBoard);
  }

  getTimeText() {
    const minutes = ('0' + Math.floor(this.time / 60)).slice(-2);
    const seconds = ('0' + Math.floor(this.time % 60)).slice(-2);
    return `${minutes} : ${seconds}`;
  }

  updateTime() {
   this.time += 1;
  }

  start() {
    this.renderTimeBoard();
    this.enemyRain = setInterval(() => {
      this.enemies.push(new Enemy(30, 'ghost'));
    }, this.enemyInterval);

    this.timeStart = setInterval(() => {
      this.updateTime();
      this.renderTimeBoard();
      this.renderStageBoard();

      if (this.time === timeLimit + 1) {
        this.end('over');
      }
    }, 1000);
  }

  goToNextLevel() {
    this.level += 1;
    score.score = 0;
    this.time = 0;
    this.enemySpeed = this.enemySpeed * this.level;
    this.enemyInterval = this.enemyInterval - (this.level * 100);

    score.renderScoreBoard();
    this.renderStageBoard();
    this.start();
  }

  end(type: 'clear' | 'over') {
    clearInterval(this.enemyRain);
    clearInterval(this.timeStart);
    this.enemies.forEach((enemy) => enemy.die());
    
    if (type === 'over') {
      alert('time over');
      game.end();
    }

    if (type === 'clear') {
      if (this.level === lastStageLevel) {
        alert('all clear');
        return game.end();
      }

      alert(`level ${this.level} stage is clear`);
      if (confirm("Do you want to go to next stage?")) {
        return this.goToNextLevel();
      } else {
        return game.end();
      }
    }
  }
}

export default new Stage();
