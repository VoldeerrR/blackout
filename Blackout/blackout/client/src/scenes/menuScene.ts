import { Scene } from 'three';
import { MainMenu } from '../ui/menus/mainMenu';

export class MenuScene {
    private scene: Scene;
    private mainMenu: MainMenu;

    constructor() {
        this.scene = new Scene();
        this.mainMenu = new MainMenu();
    }

    public init(): void {
        this.mainMenu.createMenu();
        this.scene.add(this.mainMenu.getMenuGroup());
    }

    public update(): void {
        this.mainMenu.update();
    }

    public render(): void {
        // Render logic for the menu scene
    }
}