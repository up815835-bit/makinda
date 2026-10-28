const cammy = document.getElementById('cammy-image');

const position = {
    x: 0,
    y: 0,
};

let velocity = movementSpeed;

function frame() 
    if (cammy && cammy.complete && cammy.naturalWidth > 0) {
        position.y = GameViewport.HEIGHT - cammy.naturalHeight;
        position.x += velocity;

        const rightEdge = GameViewport.WIDTH - cammy.naturalWidth;
        if (position.x >= rightEdge) {
            position.x = rightEdge;
            velocity = -movementSpeed;
        } else if (position.x <= 0) {
            position.x = 0;
            velocity = movementSpeed;
        }
    }

    window.requestAnimationFrame(frame);