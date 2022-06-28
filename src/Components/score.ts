
export class Score {
  scoreBoard: HTMLDivElement;
  score: number;

  constructor() {
    this.scoreBoard = document.createElement('div');
    this.score = 0
  }

  createScoreBoard() {
    const bg = document.querySelector("#bg");
    this.scoreBoard.id = "score_board";
    this.scoreBoard.innerHTML = `<span id="score">Score: ${this.score}</span>`
    bg?.appendChild(this.scoreBoard);
  }

  getPoint() {
    this.score += 1;
    const scoreBoard = document.querySelector('#score_board');
    if (scoreBoard) {
      const bg = document.querySelector("#bg");
      scoreBoard.innerHTML = `<span>Score: ${this.score}</span>`;
      bg?.appendChild(scoreBoard)
    }
  }
}

export default new Score();
