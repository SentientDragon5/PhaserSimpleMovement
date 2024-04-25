class Move extends Phaser.Scene {
    
    constructor(){
        super("Move");
        this.px = 400;
        this.py = 500;
        this.moveSpeed = 5;
        this.bulletSpeed = 5;
        this.bullets = [];
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("player", "tile_0301.png");
        this.load.image("bullet", "tile_0020.png");
    }

    create() {
        my.sprite.player = this.add.sprite(this.px, this.py, "player");
        my.sprite.player.scale = 4;
    }
    update() {

        let dx = (this.input.keyboard.addKey('A').isDown ? -1 : 0
            + this.input.keyboard.addKey('D').isDown ? 1 : 0) * this.moveSpeed;

        my.sprite.player.x += dx;
        if(dx < -0.1) my.sprite.player.flipX = true;
        if(dx > 0.1)  my.sprite.player.flipX = false;

        if(this.input.keyboard.addKey('Space').isDown){
            let s = this.add.sprite(my.sprite.player.x, my.sprite.player.y, "bullet");
            s.scale = 4;
            this.bullets.push(s);
        }

        this.bullets.forEach(b => {
            b.y -= 10;
        });
    }

}