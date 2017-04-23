const LEN = 222;

export class Keys {

    keys: boolean[];
    prev: boolean[];

    SPACE = 32; 
    LEFT = 37;
    RIGHT = 39;
    UP = 38;
    DOWN = 40;
    CTRL = 17;   
    PAUSE = 80;

    constructor() {
        this.keys = new Array(LEN);
        this.prev = new Array(LEN);

        for (let i = 0; i < LEN; i++) {
            this.keys[i] = this.prev[i] = false;
        }

        window.onkeydown = (e) => {
            this.keys[e.keyCode] = true;
        }

        window.onkeyup = (e) => {
            this.keys[e.keyCode] = false;
        }
    }

    reset() {
        for (let i = 0; i < LEN; i++) {
            this.prev[i] = this.keys[i];
        }
    }

    isPressed(key) {
        return this.prev[key] === false && this.keys[key] === true;
    }

    wasPressed(key) {
        return this.prev[key] && !this.keys[key];
    }

    isDown(key) {
        return this.keys[key];
    }
}

export const keys = new Keys();

