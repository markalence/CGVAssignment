class HUD {
    constructor(hudCanvas, sceneWidth, sceneHeight) {
        this.hudCanvas = hudCanvas;
        this.sceneWidth = sceneWidth;
        this.sceneHeight = sceneHeight;
        this.hudCanvas.width = sceneWidth;
        this.hudCanvas.height = sceneHeight;
        this.hudBitmap = hudCanvas.getContext('2d');
        this.hudBitmap.font = "Normal 40px Arial";
        this.hudBitmap.textAlign = 'center';
        this.hudBitmap.fillStyle = "rgba(189, 195, 199, 1)";
        this.hudBitmap.rect(this.sceneWidth / 10, this.sceneHeight / 1.2, this.sceneWidth / 2, this.sceneHeight / 10);
        this.hudBitmap.fillText('Initializing...', this.sceneWidth / 10, this.sceneHeight / 10);
        this.hudTexture = new THREE.Texture(this.hudCanvas);
        this.hudTexture.needsUpdate = true;
        this.hudmaterial = new THREE.MeshBasicMaterial({map: this.hudTexture});
        this.hudmaterial.transparent = true;
        this.planeGeometry = new THREE.PlaneGeometry(this.sceneWidth, this.sceneHeight);
        this.plane = new THREE.Mesh(this.planeGeometry, this.hudmaterial);
    }

    clearHUD(HEALTH) {
        this.hudBitmap.clearRect(0, 0, this.sceneWidth, this.sceneHeight);
        this.hudBitmap.fillStyle = "rgba(189, 195, 199, 1)";
        this.hudBitmap.fillRect(this.sceneWidth / 6, this.sceneHeight / 1.2, 2 * this.sceneWidth / 3, this.sceneHeight / 18);
        this.hudBitmap.fillStyle = "rgba(255, 0, 0, 1)";
        this.hudBitmap.fillRect(this.sceneWidth / 6, this.sceneHeight / 1.2, 2 * (HEALTH / 100) * this.sceneWidth / 3, this.sceneHeight / 18);
    }

    fillHUD(asteroids, spaceship, keyHandler) {
        if (!keyHandler.keyState[32]) {
            return;
        }
        this.hudBitmap.fillStyle = "rgba(189, 195, 199, 0.5)";
        this.hudBitmap.fillRect(sceneWidth / 3, sceneHeight / 12, sceneWidth / 3, 2 * sceneHeight / 3);
        this.hudBitmap.fillStyle = "rgba(0, 0, 0, 1)";
        asteroids.forEach(asteroid => {
            if (asteroid.model.position.z >= -70 && asteroid.model.position.z < -1) {
                if (Math.abs(asteroid.model.position.x) < 20) {
                    this.drawMiniMap(asteroid.model.position.x, asteroid.model.position.z, asteroid.scale);
                }
            }
        });
        this.hudBitmap.fillStyle = "rgba(0,0,255,0.5)";
        this.hudBitmap.fillRect(this.sceneWidth / 3 + ((spaceship.position.x + 15) / 30) * this.sceneWidth / 3 - 10, (2 / 3) * this.sceneHeight - 20 + this.sceneHeight / 12, 20, 20)
    }

    drawMiniMap(x, z, s) {
        this.hudBitmap.save();
        var newY = 2 * this.sceneHeight / 3 - ((z) / -70) * 2 * this.sceneHeight / 3 + this.sceneHeight / 12;
        var newX = this.sceneWidth / 3 + ((x + 20) / 40) * this.sceneWidth / 3;
        this.hudBitmap.fillStyle = 'rgba(0,0,0,0.5)';
        this.hudBitmap.fillRect(newX, newY, s * 30, s * 30);
        this.hudBitmap.restore();
    }

}