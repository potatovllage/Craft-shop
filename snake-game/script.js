// 테이블 크기
let tableTileSize = 21;

//뱀
var snake = new Array();

//사과
var apple = new Array();

function tableSetUp(){
    let tableCode = '';
    for(let i=0; i<tableTileSize; i++) {
        tableCode += '<tr>';

        let rowCode = '';
        for(let j=0; j<tableTileSize; j++) {
            rowCode += '<td id="tile'+i+'_'+j+'"></td>';
        }

        tableCode += rowCode + '</tr>';
        document.getElementById("snakeGamingZone").innerHTML = tableCode;
    }
}

// 게임 세팅
function gameSetUp(){
    let scoreElement = document.getElementById("score");
    scoreElement.innerHTML=0;
    
    tableSetUp();
}

// 시작
function handleStartButton(){ 
    document.getElementsByClassName("startButton")[0].style.display = "none";
    document.getElementsByClassName("start")[0].style.display = "none";

    gameSetUp();
}