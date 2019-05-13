class KeyHandler {

    constructor(spaceship) {
        this.spaceship = spaceship;
        this.keyState = {};
    }

    handleKeys() {
        if (this.keyState[39]) {
            if (this.spaceship.position.x < 15) {
                this.spaceship.position.x += 0.2;
            }
            if (this.spaceship.rotation.z > -1) {
                this.spaceship.rotation.z -= 0.1;
            }
        }
        if (this.keyState[37]) {
            if (this.spaceship.position.x > -15) {
                this.spaceship.position.x -= 0.2;
            }
            if (this.spaceship.rotation.z < 1) {
                this.spaceship.rotation.z += 0.1;
            }
        }
        if (this.keyState[38]) {
            if (this.spaceship.position.y < 15) {
                this.spaceship.position.y += 0.2;
            }
            if (this.spaceship.rotation.x < 1) {
                this.spaceship.rotation.x += 0.1;
            }
        }
        if (this.keyState[40]) {
            if (this.spaceship.position.y > -15) {
                this.spaceship.position.y -= 0.2;
            }
            if (this.spaceship.rotation.x > -1) {
                this.spaceship.rotation.x -= 0.1;
            }
        }
        if (!(this.keyState[39] || this.keyState[37])) {
            if (Math.abs(this.spaceship.rotation.z) <= 0.1) {
                this.spaceship.rotation.z = 0;
            }
            if (this.spaceship.rotation.z > 0) {
                this.spaceship.rotation.z -= 0.1;
            }
            if (this.spaceship.rotation.z < 0) {
                this.spaceship.rotation.z += 0.1;
            }
        }
        if (!(this.keyState[38] || this.keyState[40])) {
            if (Math.abs(this.spaceship.rotation.x) <= 0.1) {
                this.spaceship.rotation.x = 0;
            }
            if (this.spaceship.rotation.x > 0) {
                this.spaceship.rotation.x -= 0.1;
            }
            if (this.spaceship.rotation.x < 0) {
                this.spaceship.rotation.x += 0.1;
            }
        }
    }

}