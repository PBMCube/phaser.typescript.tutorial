module PlayAroundWithSprites {

  export class GameContent extends Phaser.State {

    player: PlayAroundWithSprites.Player;

    preload() {
      this.game.load.image('player', 'assets/sprites/playerGreen.png');
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

    }

    create() {
      this.player = new Player(this.game, this.game.world.centerX, this.game.world.centerY);
    }

  }
}