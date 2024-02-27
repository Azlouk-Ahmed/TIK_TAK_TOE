let player = document.querySelectorAll(".indicator span");
let boxes = document.querySelectorAll(".boxes");
let popUp = document.querySelector(".pop-up");
let popUpBtn = document.querySelectorAll(".pop-up span");
var turn = "X";
var gameOver = false;
var round = 1;
let userScore = 0;
let computerScore = 0;

function changeTurn(ch){
    if(ch =="X"){
        ch = "O"
    }else{
        ch = "X"
    }
    return ch;
}

let boxesContent = []

function checkWinner(gameOver){
    for(i=1 ; i < 10 ; i++){
        boxesContent[ i ] = document.getElementById(`num${i}`).textContent;
    }
    if(boxesContent[1] == boxesContent[2] && boxesContent[1] == boxesContent[3] && boxesContent[1] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[3] == boxesContent[5] && boxesContent[3] == boxesContent[7] && boxesContent[3] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[1] == boxesContent[5] && boxesContent[1] == boxesContent[9] && boxesContent[1] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[2] == boxesContent[5] && boxesContent[2] == boxesContent[8] && boxesContent[2] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[4] == boxesContent[5] && boxesContent[4] == boxesContent[6] && boxesContent[4] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[7] == boxesContent[8] && boxesContent[7] == boxesContent[9] && boxesContent[7] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[3] == boxesContent[6] && boxesContent[3] == boxesContent[9] && boxesContent[3] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[1] == boxesContent[4] && boxesContent[1] == boxesContent[7] && boxesContent[1] == "X"){
        gameOver = true; userScore++
    }
    else if(boxesContent[1] == boxesContent[2] && boxesContent[1] == boxesContent[3] && boxesContent[1] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[3] == boxesContent[5] && boxesContent[3] == boxesContent[7] && boxesContent[3] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[1] == boxesContent[5] && boxesContent[1] == boxesContent[9] && boxesContent[1] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[2] == boxesContent[5] && boxesContent[2] == boxesContent[8] && boxesContent[2] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[4] == boxesContent[5] && boxesContent[4] == boxesContent[6] && boxesContent[4] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[7] == boxesContent[8] && boxesContent[7] == boxesContent[9] && boxesContent[7] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[3] == boxesContent[6] && boxesContent[3] == boxesContent[9] && boxesContent[3] == "O"){
        gameOver = true; computerScore++
    }
    else if(boxesContent[1] == boxesContent[4] && boxesContent[1] == boxesContent[7] && boxesContent[1] == "O"){
        gameOver = true; computerScore++
    }
    else if(!boxesContent.includes("")){
        gameOver = true;
    }
    return gameOver;
}

let boxesContent2 = [];

function botsTurn(){
    for(i=1 ; i < 10 ; i++){
        boxesContent2[ i ] = document.getElementById(`num${i}`).textContent;
    }
    if((boxesContent2[1] =="X" ||boxesContent2[2] =="X" ||boxesContent2[3] =="X" || boxesContent2[4] =="X" ||boxesContent2[6] =="X" ||boxesContent2[7] =="X" ||boxesContent2[8] =="X" ||boxesContent2[9] =="X") &&count(boxesContent2)==1 ){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }
    //wadh3 el houjoum
    else if(boxesContent2[1] =="O" && boxesContent2[2] =="O"&& boxesContent2[3] == ""){
        document.getElementById('num3').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[1] =="O" && boxesContent2[7] =="O"&& boxesContent2[4] == ""){
        document.getElementById('num4').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[1] =="O" && boxesContent2[5] =="O"&& boxesContent2[9] == ""){
        document.getElementById('num9').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[1] =="O" && boxesContent2[9] =="O"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="O" && boxesContent2[9] =="O"&& boxesContent2[8] == ""){
        document.getElementById('num8').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[2] =="O" && boxesContent2[3] =="O"&& boxesContent2[1] == ""){
        document.getElementById('num1').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="O" && boxesContent2[9] =="O"&& boxesContent2[6] == ""){
        document.getElementById('num6').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[8] =="O" && boxesContent2[9] =="O"&& boxesContent2[7] == ""){
        document.getElementById('num7').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="O" && boxesContent2[8] =="O"&& boxesContent2[9] == ""){
        document.getElementById('num9').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[9] =="O" && boxesContent2[6] =="O"&& boxesContent2[3] == ""){
        document.getElementById('num3').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[9] =="O" && boxesContent2[5] =="O"&& boxesContent2[1] == ""){
        document.getElementById('num1').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="O" && boxesContent2[5] =="O"&& boxesContent2[7] == ""){
        document.getElementById('num7').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="O" && boxesContent2[6] =="O"&& boxesContent2[9] == ""){
        document.getElementById('num9').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[5] =="O" && boxesContent2[8] =="O"&& boxesContent2[2] == ""){
        document.getElementById('num2').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[2] =="O" && boxesContent2[5] =="O"&& boxesContent2[8] == ""){
        document.getElementById('num8').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[2] =="O" && boxesContent2[8] =="O"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="O" && boxesContent2[5] =="O"&& boxesContent2[6] == ""){
        document.getElementById('num6').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="O" && boxesContent2[6] =="O"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[5] =="O" && boxesContent2[6] =="O"&& boxesContent2[4] == ""){
        document.getElementById('num4').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="O" && boxesContent2[7] =="O"&& boxesContent2[1] == ""){
        document.getElementById('num1').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="O" && boxesContent2[1] =="O"&& boxesContent2[7] == ""){
        document.getElementById('num7').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="O" && boxesContent2[5] =="O"&& boxesContent2[3] == ""){
        document.getElementById('num3').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="O" && boxesContent2[3] =="O"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }
    // wadh3 eddife3
    else if(boxesContent2[1] =="X" && boxesContent2[2] =="X"&& boxesContent2[3] == ""){
        document.getElementById('num3').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="X" && boxesContent2[7] =="X"&& boxesContent2[8] == ""){
        document.getElementById('num8').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[1] =="X" && boxesContent2[7] =="X"&& boxesContent2[4] == ""){
        document.getElementById('num4').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[1] =="X" && boxesContent2[5] =="X"&& boxesContent2[9] == ""){
        document.getElementById('num9').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[1] =="X" && boxesContent2[9] =="X"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="X" && boxesContent2[9] =="X"&& boxesContent2[8] == ""){
        document.getElementById('num8').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[2] =="X" && boxesContent2[3] =="X"&& boxesContent2[1] == ""){
        document.getElementById('num1').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="X" && boxesContent2[9] =="X"&& boxesContent2[6] == ""){
        document.getElementById('num6').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[8] =="X" && boxesContent2[9] =="X"&& boxesContent2[7] == ""){
        document.getElementById('num7').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="X" && boxesContent2[8] =="X"&& boxesContent2[9] == ""){
        document.getElementById('num9').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[9] =="X" && boxesContent2[6] =="X"&& boxesContent2[3] == ""){
        document.getElementById('num3').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[9] =="X" && boxesContent2[5] =="X"&& boxesContent2[1] == ""){
        document.getElementById('num1').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="X" && boxesContent2[5] =="X"&& boxesContent2[7] == ""){
        document.getElementById('num7').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[3] =="X" && boxesContent2[6] =="X"&& boxesContent2[9] == ""){
        document.getElementById('num9').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[5] =="X" && boxesContent2[8] =="X"&& boxesContent2[2] == ""){
        document.getElementById('num2').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[2] =="X" && boxesContent2[5] =="X"&& boxesContent2[8] == ""){
        document.getElementById('num8').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[2] =="X" && boxesContent2[8] =="X"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="X" && boxesContent2[5] =="X"&& boxesContent2[6] == ""){
        document.getElementById('num6').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="X" && boxesContent2[6] =="X"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[5] =="X" && boxesContent2[6] =="X"&& boxesContent2[4] == ""){
        document.getElementById('num4').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="X" && boxesContent2[7] =="X"&& boxesContent2[1] == ""){
        document.getElementById('num1').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[4] =="X" && boxesContent2[1] =="X"&& boxesContent2[7] == ""){
        document.getElementById('num7').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="X" && boxesContent2[5] =="X"&& boxesContent2[3] == ""){
        document.getElementById('num3').appendChild(document.createTextNode("O"));
    }else if(boxesContent2[7] =="X" && boxesContent2[3] =="X"&& boxesContent2[5] == ""){
        document.getElementById('num5').appendChild(document.createTextNode("O"));
    }else if(boxesContent2.includes("")){
        document.getElementById(`num${boxesContent2.indexOf("")}`).appendChild(document.createTextNode("O"));
    }
}

function count(arr){
    return(arr.filter(i=>i=="X").length)
}

boxes.forEach(box=>{
    box.addEventListener("click",(e)=>{
        if(e.target.textContent!=""){
            e.target.style.cursor = "no-drop";
        }else{
            e.target.textContent='X';
            turn = changeTurn(turn);
            //turn = "O";
            // if(turn =='X'){
            //     player[0].classList.add("active");
            //     player[1].classList.remove("active");
            // }else{
            //     player[1].classList.add("active");
            //     player[0].classList.remove("active");
                botsTurn();
                turn = changeTurn(turn);
                //turn="X";
            //}
            gameOver = checkWinner(gameOver);
            
            if(gameOver){
                round++;
                document.querySelector(".round-indicator span").textContent = round;
                document.querySelector(".scoreX").textContent = userScore;
                document.querySelector(".scoreO").textContent = computerScore;
                document.querySelector(".progress-bar div span").style.height = `${userScore*20}%`;
            }
            if(gameOver && round<=5){
                // popUp.classList.remove("off");
                // popUpBtn.forEach(span=>{
                    //     span.addEventListener("click",(e)=>{
                        //         if(e.target.dataset.text =="yes"){
                            //             popUp.classList.add("off");
                            boxes.forEach(box => {box.textContent=""; gameOver = false})
                            //         }
                            //     })
                            // })
                        }else if(gameOver && round > 5){
                            popUp.classList.remove("off");
                            document.querySelector(".round-indicator span").textContent = '5';
                            if(userScore == 5){
                                document.querySelector(".alert-box h2").textContent = 'CONGTRATS ! You Have Won An I PHONE X';
                            }
                            if(userScore == 4){
                                document.querySelector(".alert-box h2").textContent = 'CONGTRATS ! You Have Won A TABLET';
                            }
                            if(userScore == 3){
                                document.querySelector(".alert-box h2").textContent = 'CONGTRATS ! You Have Won A SMART WATCH';
                            }else{
                                document.querySelector(".alert-box h2").textContent = 'MAMMA MIA ! The Computer Won';
                            }
                        }
        }
    })
})