import game from './src/Components/game';
import './src/Styles/style.css';

game.start();

setTimeout(() => {
  game.end()
}, 30000)
