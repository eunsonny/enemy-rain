export class Hero {
  hero: HTMLDivElement;
  positionX: number;

  constructor(x: number) {
    this.hero = document.createElement("div");
    this.positionX = x;
  }

  createHero() {
    const bg = document.querySelector("#bg");
    this.hero.id = "hero";
    this.hero.style.left = this.positionX + "px";
    bg?.appendChild(this.hero);
  }

  move(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowRight":
        if (this.positionX === 750) return;
        this.positionX += 10;
        this.hero.style.left = this.positionX + 'px';
        this.hero.className = "hero right"
        break;
      case "ArrowLeft":
        if (this.positionX === 30) return;
        this.positionX -= 10;
        this.hero.style.left = this.positionX + 'px';
        this.hero.className = "hero left"
      default:
        return;
    }
  }
}

export default new Hero(400);
