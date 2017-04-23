const timestamp = () => {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

let now;
let delta = 0;
let last = timestamp();

const DT = 1/60;
const ONE_SECOND = 1000;

const init = (game: IUpdateRender) => {

    const frame = () => {
        now = timestamp();
        delta += Math.min(1, (now - last) / ONE_SECOND);
        
        while(delta > DT) {
            game.update(DT);
            delta -= DT;
        }

        game.render(delta);

        last = now;
        
        requestAnimationFrame(frame);        
    }

    frame();
}

export const loop = (state: IUpdateRender) => {
    init(state);
}





