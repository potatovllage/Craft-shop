//X축 방향
let X_MOVE = 0;

//Y축 방향
let Y_MOVE = 1;

// 테이블 크기
let tableTileSize = 21;

//뱀
let snake = new Array();

//사과
let apple = new Array();

// 테이블 생성 함수
function tableSetUp() {
  let tableCode = "";
  for (let i = 0; i < tableTileSize; i++) {
    tableCode += "<tr>";

    let rowCode = "";
    for (let j = 0; j < tableTileSize; j++) {
      rowCode += '<td id="tile' + i + "_" + j + '"></td>';
    }

    tableCode += rowCode + "</tr>";
  }

  document.getElementById("snakeGamingZone").innerHTML = tableCode;
}

//뱀 그리기
function drawSnake() {
  let score = parseInt(document.getElementById("score").innerHTML);

  let state = "";
  let snakes = document.getElementsByClassName("snake");

  while (snakes.length) {
    snakes[0].classList.remove("snake");
  }

  let snakeLength = snake.length;

  for (let i = 0; i < snakeLength; i++) {
    document
      .getElementById("tile" + snake[i][0] + "_" + snake[i][1])
      .classList.add("snake");
    if (
      document
        .getElementById("tile" + snake[i][0] + "_" + snake[i][1])
        .classList.contains("apple")
    ) {
      score = score + 100;
      document.getElementById("score").innerHTML = score; //점수 반영
      apple.pop();
      initApple();

      state = "eat";
    }
  }
  return state;
}

// 뱀 초기화 및 그리기 함수
function snakeSetUp() {
  snake = [];
  snake.push([0, 1]);
  drawSnake();
}

// 게임 세팅
function gameSetUp() {
  let scoreElement = document.getElementById("score");
  scoreElement.innerHTML = 0;

  tableSetUp();
  snakeSetUp();
}

// 게임 시작
function handleStartButton() {
  document.getElementsByClassName("startButton")[0].style.display = "none";
  document.getElementsByClassName("start")[0].style.display = "none";

  gameSetUp();
}
