class Asteroid {

    static modelsLoaded = false;
    static asteroidsPassed = 0;
    static models = [];

    static setFrequency(frequency){
        this.frequency = frequency;
    }
    constructor(index, speed, x, y, z,) {
        this.index = index;
        this.model = Asteroid.models[index].clone();
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.z = z;
        this.model.position.set(x, y, z);
        this.scale = Math.random() / 4 + 0.25;
        this.model.scale.set(this.scale, this.scale, this.scale);
        this.xRotationSpeed = Math.random() / 20;
        this.yRotationSpeed = Math.random() / 20;
        this.children = this.model.children;
    };

    moveForward() {
        this.model.position.z += this.speed;
    };

    doRotate() {
        this.model.rotation.x += this.xRotationSpeed;
        this.model.rotation.y += this.yRotationSpeed;
    };

    static loadPaths() {
        var paths = ['models/asteroid1/asteroid1', 'models/asteroid2/asteroid2', 'models/asteroid3/asteroid3'];
        paths.forEach(path => {
            new THREE.MTLLoader()
                .load(path + '.mtl', function (materials) {
                    materials.preload();
                    new THREE.OBJLoader()
                        .setMaterials(materials)
                        .load(path + '.obj', function (object) {
                            object.castShadow = true;
                            Asteroid.models.push(object);
                            Asteroid.modelsLoaded = true;
                        });
                });
        });
    }

    static updateAsteroids(asteroids, frameNumber){
        asteroids.forEach(asteroid => {
            asteroid.model.position.copy(casteroids[asteroids.indexOf(asteroid)].position);
            asteroid.doRotate();
            if (asteroid.model.position.z > 10) {
                cworld.remove(casteroids[asteroids.indexOf(asteroid)]);
                casteroids.splice(asteroids.indexOf(asteroid), 1);
                scene.remove(lspheres[asteroids.indexOf(asteroid)]);
                asteroids.splice(asteroids.indexOf(asteroid), 1);
                scene.remove(asteroid.model);
                this.asteroidsPassed += 1;
            }
        });
        if (asteroids.length >= 0 && frameNumber % this.frequency == 0 && asteroidsLoaded && this.asteroidsPassed < 1500) {
            return true;
        }
    }

}