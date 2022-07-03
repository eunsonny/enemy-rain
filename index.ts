import { Game } from './src/Components/game';
// import game from './src/Components/game';

import './src/Styles/style.css';

 const game = new Game();
 const init = () => {
   const startButton = document.querySelector("button");
   startButton?.addEventListener('click', game.start);
 }

 init();
