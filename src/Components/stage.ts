import game from "./game";

export class Stage {
  stageBoard: HTMLDivElement;
  level: number;
  enemySpeed: number;
  enemyInterval: number;

  constructor() {
    this.stageBoard = document.createElement('div');
    this.level = 1;
    this.enemySpeed = 5;
    this.enemyInterval = 1000;
  }

  createStageBoard() {
    this.stageBoard.id = "stage_board";
    this.stageBoard.innerHTML = `<span id="score">Stage: level ${this.level}</span>`
    game.bg.appendChild(this.stageBoard);
  }

  goToNext() {
    this.level += 1;
    this.enemySpeed = this.enemySpeed * this.level;
    this.enemyInterval = this.enemyInterval - (this.level * 100);

    game.start();

    setTimeout(() => {
      game.end()
    }, 30000)
  }
}

export default new Stage();
