let mario = document.querySelector(".mario");
let obstacle = document.querySelector(".obstacle");
let gameOverBox = document.querySelector(".game-over");
let button = document.querySelector("button");
let scoreText = document.querySelector(".score");

let marioX = 50;
let marioY = 0;

let obstacleX = 800;

let isJumping = false;
let gameRunning = true;

let score = 0;


// Keyboard controls
document.addEventListener("keydown", function (e) {

  if (!gameRunning) {
    return;
  }

  if (e.key === "d" || e.key === "ArrowRight") {

    marioX += 10;

    if (marioX > 750) {
      marioX = 750;
    }

    mario.style.left = marioX + "px";
  }


  if (e.key === "a" || e.key === "ArrowLeft") {

    marioX -= 10;

    if (marioX < 0) {
      marioX = 0;
    }

    mario.style.left = marioX + "px";
  }


  if (
    e.key === " " ||
    e.key === "w" ||
    e.key === "ArrowUp"
  ) {

    jump();

  }

});


// Jump
function jump() {

  if (isJumping) {
    return;
  }

  isJumping = true;

  let jumpUp = setInterval(function () {

    marioY += 10;

    mario.style.bottom = marioY + "px";

    if (marioY >= 130) {

      clearInterval(jumpUp);

      let jumpDown = setInterval(function () {

        marioY -= 10;

        mario.style.bottom = marioY + "px";

        if (marioY <= 0) {

          marioY = 0;

          mario.style.bottom = "0px";

          clearInterval(jumpDown);

          isJumping = false;
        }

      }, 20);
    }

  }, 20);
}


// Game loop
setInterval(function () {

  if (!gameRunning) {
    return;
  }

  obstacleX -= 5;

  if (obstacleX < -40) {

    obstacleX = 800;

    score++;

    scoreText.innerHTML = "Score: " + score;
  }

  obstacle.style.left = obstacleX + "px";


  // Collision
  let marioBox = mario.getBoundingClientRect();
  let obstacleBox = obstacle.getBoundingClientRect();

  if (
    marioBox.right > obstacleBox.left &&
    marioBox.left < obstacleBox.right &&
    marioBox.bottom > obstacleBox.top &&
    marioBox.top < obstacleBox.bottom
  ) {

    gameOver();

  }

}, 10);


// Game Over
function gameOver() {

  gameRunning = false;

  gameOverBox.style.display = "flex";
}


// Restart
function startOver() {

  gameRunning = true;

  score = 0;

  marioX = 50;
  marioY = 0;

  obstacleX = 800;

  mario.style.left = "50px";
  mario.style.bottom = "0px";

  obstacle.style.left = "800px";

  scoreText.innerHTML = "Score: 0";

  gameOverBox.style.display = "none";
}


button.addEventListener("click", function () {

  startOver();

});
