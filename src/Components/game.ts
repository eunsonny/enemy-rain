import hero from "./hero";
import { Enemy } from "./enemy";

export class Game {
  constructor() {}

  start() {
    console.log("start game");
    hero.createHero();

    // setInterval(() => {
    //   new Enemy(30);
    // }, 3000);
    document.addEventListener("keydown", (e) => hero.move(e));
  }

  end() {}
}

export default new Game();
