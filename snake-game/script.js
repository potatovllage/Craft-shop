// 테이블 크기
let tableTileSize = 21;

// 숫자 랜덤 생성
function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

// 테이블 생성 함수
function tableSetUp() {
  let tableCode = "";
  for (let i = 0; i < tableTileSize; i++) {
    tableCode += "<tr>";

    for (let j = 0; j < tableTileSize; j++) {
      tableCode += '<td id="tile' + i + "_" + j + '"></td>';
    }

    tableCode += "</tr>";
  }

  document.getElementById("snakeGamingZone").innerHTML = tableCode;
}

// 사과
let apple = new Array();

//사과 초기화
function appleSetUp() {
  let x;
  let y;

  do {
    x = randomNumber(0, tableTileSize - 1);
    y = randomNumber(0, tableTileSize - 1);
  } while (
    document.getElementById("tile" + x + "_" + y).classList.contains("snake")
  );

  apple = [];
  apple.push([x, y]);
  drawApple();
}

//사과 생성
function drawApple() {
  let apples = document.getElementsByClassName("apple");

  while (apples.length) {
    apples[0].classList.remove("apple");
  }

  for (let i = 0; i < apple.length; i++) {
    document
      .getElementById("tile" + apple[i][0] + "_" + apple[i][1])
      .classList.add("apple");
  }
}

// 뱀 배열
let snake = new Array();

// 뱀 그리기
function createSnake() {
  let score = parseInt(document.getElementById("score").innerHTML);

  let snakes = document.getElementsByClassName("snake");

  while (snakes.length) {
    snakes[0].classList.remove("snake");
  }

  for (let i = 0; i < snake.length; i++) {
    document
      .getElementById("tile" + snake[i][0] + "_" + snake[i][1])
      .classList.add("snake");
    if (
      document
        .getElementById("tile" + snake[i][0] + "_" + snake[i][1])
        .classList.contains("apple")
    ) {
      score = score + 100;
      document.getElementById("score").innerHTML = score;
      apple.pop();
      appleSetUp();
      snake.push(1);
    }
  }
}

// 뱀 초기화 및 그리기 함수
function snakeSetUp() {
  snake = [];
  snake.push([0, 1]);
  createSnake();
}

// 게임 세팅
function gameSetUp() {
  let scoreElement = document.getElementById("score");
  scoreElement.innerHTML = 0;

  tableSetUp();
  snakeSetUp();
  appleSetUp();
}

// 게임 시작
function handleStartButton() {
  document.getElementsByClassName("start")[0].style.display = "none";

  handleKeyPress();

  gameTimeInterval = setInterval(function () {
    moveSnake();
  }, 120);
  gameSetUp();
}

// 게임 종료
function gameOver() {
  clearInterval(gameTimeInterval);
  alert("GAME OVER");
  location.reload();
}

// 키보드 감지
function handleKeyPress() {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
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

// X축 방향
let X_MOVE = 0;

// Y축 방향
let Y_MOVE = 1;

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

// 충돌 여부를 확인하는 함수
function checkCollision(headX, headY) {
  // 뱀의 머리가 벽에 부딪혔을 때
  if (
    headX < 0 ||
    headX >= tableTileSize ||
    headY < 0 ||
    headY >= tableTileSize
  ) {
    return true;
  }

  // 뱀의 머리가 몸통과 충돌했을 때
  for (let i = 1; i < snake.length; i++) {
    if (headX === snake[i][0] && headY === snake[i][1]) {
      return true;
    }
  }

  return false;
}

// 뱀 움직이기
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

  createSnake();
}
