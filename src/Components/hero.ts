import game from "./game";

export class Hero {
  hero: HTMLDivElement;
  life: number;
  status: 'left' | 'right' | 'back' | 'front';
  positionX: number;

  constructor(x: number) {
    this.hero = document.createElement("div");
    this.life = 5;
    this.status = 'front';
    this.positionX = x;
  }

  createHero() {
    this.hero.id = "hero";
    this.hero.style.left = `${this.positionX}px`;
    game.bg.appendChild(this.hero);
  }

  move(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowRight":
        if (this.positionX === 750) return;
        this.positionX += 10;
        this.hero.style.left = `${this.positionX}px`;
        this.hero.className = "hero right";
        this.status = 'right';
        break;
      case "ArrowLeft":
        if (this.positionX === 30) return;
        this.positionX -= 10;
        this.hero.style.left = `${this.positionX}px`;
        this.hero.className = "hero left";
        this.status = 'left';
        break;
      case 'ArrowUp':
        this.hero.className = "hero back";
        this.status = 'back';
        break;
      default:
        return;
    }
  }
}

export default new Hero(400);
