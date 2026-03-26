import { Scene } from 'three';
import { WebGLRenderer } from '../renderer/webglRenderer';
import { MainMenu } from '../scenes/menuScene';

export class LoadingScreen {
    private scene: Scene;
    private renderer: WebGLRenderer;
    private loadingText: HTMLElement;

    constructor(renderer: WebGLRenderer) {
        this.renderer = renderer;
        this.scene = new Scene();
        this.loadingText = document.createElement('div');
        this.setupLoadingScreen();
    }

    private setupLoadingScreen() {
        this.loadingText.style.position = 'absolute';
        this.loadingText.style.top = '50%';
        this.loadingText.style.left = '50%';
        this.loadingText.style.transform = 'translate(-50%, -50%)';
        this.loadingText.style.color = '#ffffff';
        this.loadingText.style.fontSize = '24px';
        this.loadingText.innerText = 'Loading...';
        document.body.appendChild(this.loadingText);
    }

    public startLoading() {
        this.animateLoading();
    }

    private animateLoading() {
        // Animation logic for loading screen
        requestAnimationFrame(() => this.animateLoading());
        this.renderer.render(this.scene);
    }

    public loadingComplete() {
        document.body.removeChild(this.loadingText);
        const mainMenu = new MainMenu(this.renderer);
        mainMenu.show();
    }
}