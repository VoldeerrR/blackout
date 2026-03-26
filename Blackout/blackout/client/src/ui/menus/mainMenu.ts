import { Scene } from 'three';
import { Button } from '../components/button';
import { Text } from '../components/text';

export class MainMenu {
    private scene: Scene;
    private buttons: Button[];

    constructor(scene: Scene) {
        this.scene = scene;
        this.buttons = [];
        this.createMenu();
    }

    private createMenu() {
        const title = new Text('BLACKOUT', { fontSize: 48, position: { x: 0, y: 100 } });
        this.scene.add(title);

        const playButton = new Button('Play', { position: { x: 0, y: 0 } });
        playButton.onClick = this.startGame.bind(this);
        this.buttons.push(playButton);
        this.scene.add(playButton);

        const settingsButton = new Button('Settings', { position: { x: 0, y: -50 } });
        settingsButton.onClick = this.openSettings.bind(this);
        this.buttons.push(settingsButton);
        this.scene.add(settingsButton);

        const exitButton = new Button('Exit', { position: { x: 0, y: -100 } });
        exitButton.onClick = this.exitGame.bind(this);
        this.buttons.push(exitButton);
        this.scene.add(exitButton);
    }

    private startGame() {
        // Logic to start the game
    }

    private openSettings() {
        // Logic to open settings menu
    }

    private exitGame() {
        // Logic to exit the game
    }

    public update() {
        // Update logic for the main menu (e.g., button hover effects)
    }
}