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

  if (gameRunning === false) {
    return;
  }

  // Move right
  if (e.key === "d" || e.key === "ArrowRight") {

    marioX = marioX + 10;

    if (marioX > 750) {
      marioX = 750;
    }

    mario.style.left = marioX + "px";
  }


  // Move left
  if (e.key === "a" || e.key === "ArrowLeft") {

    marioX = marioX - 10;

    if (marioX < 0) {
      marioX = 0;
    }

    mario.style.left = marioX + "px";
  }


  // Jump
  if (
    e.key === " " ||
    e.key === "w" ||
    e.key === "ArrowUp"
  ) {

    jump();

  }

});


// Jump function
function jump() {

  if (isJumping === true) {
    return;
  }

  isJumping = true;

  let jumpUp = setInterval(function () {

    marioY = marioY + 10;

    mario.style.bottom = marioY + "px";


    if (marioY >= 130) {

      clearInterval(jumpUp);

      let jumpDown = setInterval(function () {

        marioY = marioY - 10;

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
let gameLoop = setInterval(function () {

  if (gameRunning === false) {
    return;
  }


  // Move obstacle
  obstacleX = obstacleX - 5;

  obstacle.style.left = obstacleX + "px";


  // Reset obstacle
  if (obstacleX < -40) {

    obstacleX = 800;

    score++;

    scoreText.innerHTML = "Score: " + score;
  }


  // Collision detection
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


// Start Over
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


// Start Over button
button.addEventListener("click", function () {

  startOver();

});
