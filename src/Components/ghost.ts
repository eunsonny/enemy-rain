
export class Ghost {
  ghost: HTMLDivElement;
  positionX: number;
  positionY: number;

  constructor(x: number, y: number) {
    this.ghost = document.createElement("div");
    this.positionX = x;
    this.positionY = y;
  }

  createGhost() {

  }
}