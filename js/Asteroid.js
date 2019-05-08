class Asteroid {

    static modelsLoaded = false;
    static models = [];

    constructor(index, speed, x, y, z) {
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

}