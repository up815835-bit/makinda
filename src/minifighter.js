const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

const position = {
    x: 0,
    y: 0,
};

const movementSpeed = 4;
let velocity = movementSpeed;

window.addEventListener('DOMContentLoaded', function () {
    const canvasEl = document.getElementById('game-canvas');
    const context = canvasEl && canvasEl.getContext('2d');

    if (!canvasEl || !context) {
        return;
    }

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;
    context.fillStyle = 'black';
    context.fillRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

    const sagat = document.getElementById('sagat-image');
    const background = document.getElementById('sagatbackground-image');
    
function frame() {
    if (sagat && sagat.complete && sagat.naturalWidth > 0) {
        position.y = GameViewport.HEIGHT - sagat.naturalHeight;
        position.x += velocity;

        const rightEdge = GameViewport.WIDTH - sagat.naturalWidth;
        if (position.x >= rightEdge) {
            position.x = rightEdge;
            velocity = -movementSpeed;
        } else if (position.x <= 0) {
            position.x = 0;
            velocity = movementSpeed;
        }
    }

    context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

    if (background && background.complete && background.naturalWidth > 0) {
        context.drawImage(background, 0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
    }

    if (sagat && sagat.complete && sagat.naturalWidth > 0) {
        context.drawImage(sagat, position.x, position.y);
    }
    window.requestAnimationFrame(frame);
 }

    frame();
});