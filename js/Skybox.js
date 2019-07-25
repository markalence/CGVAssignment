class Skybox{
    constructor(path){
        var skyBoxGeo = new THREE.CubeGeometry(1500, 1500, 1500);
        var skyBoxMats = [
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(path + '/right.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(path + '/left.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(path + '/up.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(path + '/down.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(path + '/back.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(path + '/front.png'),
                side: THREE.DoubleSide
            })
        ];
        skybox = new THREE.Mesh(skyBoxGeo, skyBoxMats);
        return skybox;
    }
}