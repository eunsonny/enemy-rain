import hero from './hero';


export class Game {
  constructor() {

  }

  startGame() {
    console.log('start game')
    hero.createHero();
    document.addEventListener("keydown", (e) => hero.move(e))
  }

  endGame() {

  }
}

export default new Game();