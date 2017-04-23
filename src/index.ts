import { loop } from './loop';
import { keys } from './keys';

class Game implements IUpdateRender {

    private state: IUpdateRender;

    constructor() {
        this.init();
    }

    init() {
        
    }

    update(dt: number) {
        
    }

    render(dt: number) {
        // render game here

        keys.reset();
    }

}

const game = new Game();

setTimeout(() => {
    loop(game);
}, 1000);