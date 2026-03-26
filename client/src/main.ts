import { WebGLRenderer } from './renderer/webglRenderer';
import { LoadingScreen } from './boot/loadingScreen';
import { MenuScene } from './scenes/menuScene';
import { GameScene } from './scenes/gameScene';
import { ClientSocket } from './networking/clientSocket';
import { Auth } from './auth/auth';
import { Settings } from './settings/settings';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const renderer = new WebGLRenderer(canvas);
const loadingScreen = new LoadingScreen(renderer);
const menuScene = new MenuScene(renderer);
const gameScene = new GameScene(renderer);
const clientSocket = new ClientSocket();
const auth = new Auth();
const settings = new Settings();

async function init() {
    await loadingScreen.show();
    await auth.initialize();
    menuScene.show();
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    if (gameScene.isActive) {
        gameScene.update();
        renderer.render(gameScene);
    }
}

init();
gameLoop();