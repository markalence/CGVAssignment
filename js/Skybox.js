class Skybox{
    constructor(){
        var skyBoxGeo = new THREE.CubeGeometry(1500, 1500, 1500);
        var skyBoxMats = [
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('skyboxes/skybox2/Right_1K_TEX.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('skyboxes/skybox2/Left_1K_TEX.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('skyboxes/skybox2/Up_1K_TEX.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('skyboxes/skybox2/Down_1K_TEX.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('skyboxes/skybox2/Back_1K_TEX.png'),
                side: THREE.DoubleSide
            }),
            new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('skyboxes/skybox2/Front_1K_TEX.png'),
                side: THREE.DoubleSide
            })
        ];
        skybox = new THREE.Mesh(skyBoxGeo, skyBoxMats);
        return skybox;
    }
}