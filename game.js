// Phaser ゲームの設定
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87ceeb',
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let score = 0;
let scoreText;
let ball;

const game = new Phaser.Game(config);

function preload() {
    // シンプルな円を生成する代わりに画像をロードすることも可能
}

function create() {
    // クリック対象（ボール）
    ball = this.add.circle(400, 300, 50, 0xff0000).setInteractive();

    // スコア表示
    scoreText = this.add.text(16, 16, 'Score: 0', {
        fontSize: '32px',
        fill: '#000'
    });

    // クリックイベント
    ball.on('pointerdown', () => {
        score++;
        scoreText.setText('Score: ' + score);

        // ボールをランダムな位置に移動
        ball.x = Phaser.Math.Between(50, 750);
        ball.y = Phaser.Math.Between(50, 550);
    });
}

function update() {
    // 毎フレームの更新処理があればここに
}
