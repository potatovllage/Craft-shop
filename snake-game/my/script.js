let snakes = document.getElementsByClassName("snake");
let apples = document.getElementsByClassName("apple");
let scoreElement = document.getElementById("score");

let tableSize = 21;
let apple = [];
let snake = [];
let X_MOVE = 0;
let Y_MOVE = 1;

function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

function createTable() {
  let tableCode = "";
  for (let i = 0; i < tableSize; i++) {
    tableCode += "<tr>";

    for (let j = 0; j < tableSize; j++) {
      tableCode += `<td id="tile${i}_${j}"></td>`;
    }

    tableCode += "</tr>";
  }

  document.getElementById("snakeGamingZone").innerHTML = tableCode;
}

function initApple() {
  let x;
  let y;

  do {
    x = randomNumber(0, tableSize - 1);
    y = randomNumber(0, tableSize - 1);
  } while (
    document.getElementById(`tile${x}_${y}`).classList.contains("snake")
  );

  apple = [[x, y]];
  renderApple();
}

function renderApple() {
  while (apples.length) {
    apples[0].classList.remove("apple");
  }

  for (let i = 0; i < apple.length; i++) {
    document
      .getElementById(`tile${apple[i][0]}_${apple[i][1]}`)
      .classList.add("apple");
  }
}

function renderSnake() {
  let score = Number.parseInt(document.getElementById("score").innerHTML);

  while (snakes.length) {
    snakes[0].classList.remove("snake");
  }

  for (let i = 0; i < snake.length; i++) {
    document
      .getElementById(`tile${snake[i][0]}_${snake[i][1]}`)
      .classList.add("snake");
    if (
      document
        .getElementById(`tile${snake[i][0]}_${snake[i][1]}`)
        .classList.contains("apple")
    ) {
      score = score + 100;
      document.getElementById("score").innerHTML = score;
      initApple();
      snake.push([i][0]);
    }
  }
}

function initSnake() {
  snake = [[0, 1]];
  renderSnake();
}

function gameSetup() {
  scoreElement.innerHTML = "0";

  createTable();
  initSnake();
  initApple();
}

function gameStart() {
  document.getElementsByClassName("start")[0].style.display = "none";
  gameSetup();
  handleKeyPress();
  gameTimeInterval = setInterval(function () {
    moveSnake();
  }, 120);
}

function gameOver() {
  clearInterval(gameTimeInterval);
  alert("GAME OVER");
  location.reload();
}

function handleKeyPress() {
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
    }
  });
}

// 위쪽
function moveUp() {
  if (X_MOVE == 0) {
    X_MOVE = -1;
    Y_MOVE = 0;
  }
}

// 아래쪽
function moveDown() {
  if (X_MOVE == 0) {
    X_MOVE = 1;
    Y_MOVE = 0;
  }
}

// 왼쪽
function moveLeft() {
  if (Y_MOVE == 0) {
    X_MOVE = 0;
    Y_MOVE = -1;
  }
}

// 오른쪽
function moveRight() {
  if (Y_MOVE == 0) {
    X_MOVE = 0;
    Y_MOVE = 1;
  }
}

function checkCollision(headX, headY) {
  if (headX < 0 || headX >= tableSize || headY < 0 || headY >= tableSize) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    snake.some((segment) => segment[0] === headX && segment[1] === headY);
  }

  return false;
}

function moveSnake() {
  let headX = snake[0][0];
  let headY = snake[0][1];

  let newHeadX = headX + X_MOVE;
  let newHeadY = headY + Y_MOVE;

  snake.unshift([newHeadX, newHeadY]);

  snake.pop();

  if (checkCollision(newHeadX, newHeadY)) {
    gameOver();
    return;
  }

  renderSnake();
}
