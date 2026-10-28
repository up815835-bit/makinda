const sagat = document.getElementById('sagat-image');

const position = {
    x: 0,
    y: 0,
};

let velocity = movementSpeed;

function frame() 
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

    window.requestAnimationFrame(frame);