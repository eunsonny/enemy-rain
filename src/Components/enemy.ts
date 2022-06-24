import hero from './hero';

export class Enemy {
  enemy: HTMLDivElement;
  positionX: number;
  positionY: number;
  enemyDown: number;
  // enemyDown: NodeJs.timeout;

  constructor(y: number) {
    this.enemy = document.createElement("div");
    this.positionX = Math.random() * 755;
    this.positionY = y;
    this.enemyDown = 0;
    this.createGhost();
  }

  createGhost() {
    const bg = document.querySelector("#bg");
    // this.ghost = document.createElement("div");
    this.enemy.className = "enemy";
    // this.enemy.style.left = Math.random() * 755 + "px";
    this.enemy.style.left = `${this.positionX}px`;
    this.enemy.style.top = `${this.positionY}px`;
    bg?.appendChild(this.enemy);
  
    this.goDown()
  }

  goDown() {
    // console.log('godown')
    this.enemyDown = setInterval(() => {
       if (this.positionY < 545) {
        this.positionY += 5;
        this.enemy.style.top = `${this.positionY}px`;
       }

       if (this.positionY === 485) {
        // console.log('hero', hero.positionX)
        // console.log(this.positionX)
         if (Math.abs(hero.positionX - this.positionX) <= 35) {
            console.log('collis');
            this.die();
         }  
       }

       if (this.positionY === 545) {
         this.die()
       }
    }, 100)
  }

  die() {
    this.enemy.className = 'enemy die';
    clearInterval(this.enemyDown);
    setTimeout(() => {
      const bg = document.querySelector("#bg");
      bg?.removeChild(this.enemy);
    }, 2000)
  }
}

