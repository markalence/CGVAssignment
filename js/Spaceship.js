class Spaceship {
    collided = false;
    lastFrameCollided = 0;

    constructor(spaceship) {
        this.spaceship = spaceship;
        var box = new THREE.Box3().setFromObject(this.spaceship);
        var shape = new CANNON.Box(new CANNON.Vec3(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z));
        this.bbox = new CANNON.Body({
            mass: 10,
        });
        this.bbox.addShape(shape);

        //if collided, subtract health and play the metalRattle
        this.bbox.addEventListener("collide", function (e) {
            collided = true;
            if(spaceship.meme != true){
                lastFrameCollided = frameNumber;
            }
            HEALTH -= Math.abs(e.contact.getImpactVelocityAlongNormal()) / 7;
            if (HEALTH < 0) {
                HEALTH = 0;
            }
            if (metalRattle.volume < 0.3) {
                metalRattle.volume = 1;
            }
            if (spaceship.meme === true) {
                var milk = new Audio('sounds/milk.mp3');
                var oof = new Audio('sounds/oof.mp3');
                var yeet = new Audio('sounds/yeet.mp3');
                var bruh = new Audio('sounds/bruh.mp3');
                milk.volume = 0.8;
                oof.volume = 1;
                yeet.volume = 1;
                var sounds = [bruh, yeet, milk, oof];
                if (HEALTH < 5) {
                    sounds.forEach(sound => {
                        sound.volume = 0;
                        sound.pause();
                    })
                }
                console.log('assssss');
                if (frameNumber - lastFrameCollided > 4 && HEALTH > 0) {
                    sounds[Math.floor(Math.random() * 4)].play();
                }
                lastFrameCollided = frameNumber;
                return;

            }
                metalRattle.play();
        });
        ambience.play();
        this.bbox.collisionResponse = true;
        this.bbox.addShape(shape);
    }

    //update spaceship position and rotations after a collision
    updateSpaceship() {
        this.bbox.velocity.set(0, 0, 0);
        this.bbox.position.copy(this.spaceship.position);
        if (collided) {
            console.log('COLLLIDED');
            this.spaceship.quaternion.copy(this.bbox.quaternion);
            this.bbox.angularVelocity.x *= Math.cos((frameNumber - lastFrameCollided) * 0.01);
            this.bbox.angularVelocity.y *= Math.cos((frameNumber - lastFrameCollided) * 0.01);
            this.bbox.angularVelocity.z *= Math.cos((frameNumber - lastFrameCollided) * 0.01);
            this.bbox.quaternion.x *= 0.92;
            this.bbox.quaternion.y *= 0.92;
            this.bbox.quaternion.z *= 0.92;
            this.spaceship.quaternion.copy(this.bbox.quaternion);
            metalRattle.volume *= 0.95;
            if (Math.abs(this.bbox.angularVelocity.x) < 0.0005 && Math.abs(this.bbox.angularVelocity.y) < 0.0005 && Math.abs(this.bbox.angularVelocity.z) < 0.0005) {
                collided = false;
                metalRattle.pause();
                metalRattle.currentTime = 0;
                this.bbox.quaternion.set(0, 0, 0, 1);
                this.spaceship.quaternion.set(0, 0, 0, 1);
            }

        } else {
            this.bbox.quaternion.copy(this.spaceship.quaternion);
        }
    }

}