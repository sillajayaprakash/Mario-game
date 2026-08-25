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
