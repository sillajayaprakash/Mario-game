let mario = document.querySelector(".mario");

let marioX = 50;

console.log("Mario game started");

let mario = document.querySelector(".mario");

let marioX = 50;

document.addEventListener("keydown", function (e) {

  if (e.key === "d" || e.key === "ArrowRight") {

    marioX = marioX + 10;

    if (marioX > 750) {
      marioX = 750;
    }

    mario.style.left = marioX + "px";
  }

});
if (e.key === "a" || e.key === "ArrowLeft") {

  marioX = marioX - 10;

  if (marioX < 0) {
    marioX = 0;
  }

  mario.style.left = marioX + "px";
}
let marioY = 0;
let isJumping = false;

function jump() {

  if (isJumping === true) {
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
if (
  e.key === " " ||
  e.key === "w" ||
  e.key === "ArrowUp"
) {
  jump();
}
let obstacle = document.querySelector(".obstacle");

let obstacleX = 800;

setInterval(function () {

  obstacleX -= 5;

  obstacle.style.left = obstacleX + "px";

}, 10);
setInterval(function () {

  obstacleX -= 5;

  if (obstacleX < -40) {
    obstacleX = 800;
  }

  obstacle.style.left = obstacleX + "px";

}, 10);
let score = 0;
let scoreText = document.querySelector(".score");
if (obstacleX < -40) {

  obstacleX = 800;

  score++;

  scoreText.innerHTML = "Score: " + score;
}
