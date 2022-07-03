import { scoreGoal } from './../../constant';
import stage from "./stage";


export class Score {
  scoreBoard: HTMLDivElement;
  score: number;

  constructor() {
    this.scoreBoard = document.createElement('div');
    this.score = 0
  }

  renderScoreBoard() {
    const bg = document.querySelector("#bg");
    this.scoreBoard.id = "score_board";
    this.scoreBoard.innerHTML = `<span id="score">Score: ${this.score}</span>`
    bg?.appendChild(this.scoreBoard);
  }

  plusPoint() {
    this.score += 1;
    const scoreBoard = document.querySelector('#score_board');
    if (scoreBoard) {
      const bg = document.querySelector("#bg");
      scoreBoard.innerHTML = `<span>Score: ${this.score}</span>`;
      bg?.appendChild(scoreBoard)
    }

    if (this.score === scoreGoal) {
      stage.end('clear');
    }
  }
}

export default new Score();
