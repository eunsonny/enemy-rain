import hero from './hero';
import ghost from './ghost';


export class Game {
  constructor() {

  }

  startGame() {
    console.log('start game')
    hero.createHero();
    // ghost.createGhost();
    // setInterval(ghost.createGhost, 1000);
    document.addEventListener("keydown", (e) => hero.move(e))
  }

  endGame() {

  }
}

export default new Game();