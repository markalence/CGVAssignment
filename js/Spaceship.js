class Spaceship {
    collided = false;
    constructor(spaceship) {
        this.spaceship = spaceship;
        var box = new THREE.Box3().setFromObject(this.spaceship);
        var shape = new CANNON.Box(new CANNON.Vec3(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z));
        this.bbox = new CANNON.Body({
            mass: 10,
        });
        this.bbox.addShape(shape);
        this.bbox.addEventListener("collide", function (e) {
            collided = true;
            lastFrameCollided = frameNumber;
            HEALTH -= Math.abs(e.contact.getImpactVelocityAlongNormal()) / 7;
            if(HEALTH<0){
                HEALTH = 0;
            }
            if (metalRattle.volume < 0.3) {
                metalRattle.volume = 1;
            }
            metalRattle.play();
        });
        ambience.play();
        this.bbox.collisionResponse = true;
        this.bbox.addShape(shape);
    }

    updateSpaceship() {
        this.bbox.velocity.set(0, 0, 0);
        this.bbox.position.copy(this.spaceship.position);
        if (collided) {
            console.log('COLLLIDED')
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

    hasCollided(collided){
        this.collided = collided;
    }

}