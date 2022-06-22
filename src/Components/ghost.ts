
export class Ghost {
  ghost: HTMLDivElement;
  // positionX: number;
  // positionY: number;

  constructor() {
    this.ghost = document.createElement("div");
    // this.positionX = x;
    // this.positionY = y;
  }

  createGhost() {
    const bg = document.querySelector('#bg');
    this.ghost = document.createElement("div");
    this.ghost.className = 'ghost';
    this.ghost.style.left = Math.random() * 755 + 'px';
    bg?.appendChild(this.ghost);
  }
}

export default new Ghost()
