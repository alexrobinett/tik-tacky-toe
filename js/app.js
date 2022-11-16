
const gameBoardControl = (function() {
    let board = ["","","","","","","","",""]

    const updatePlayerChoice = (squareNum) => {
       board[squareNum] = game.playerTurns()
    }
    return{
        board,
        updatePlayerChoice
    }
})();

// gameBoard.updateBoard()

const createPlayer = (name, typeXO) => {
    const playerName = name
    const choice = typeXO.toString().toUpperCase()
    const playerTurn = true

    return{
        playerName,
        choice,
        playerTurn,
        createPlayer
    }
}

const displayController = (function() {

    // DOM Cacheing
    const gameBoard = document.querySelector(".gameboard")
    
    // Makes Square
    const MakeSquare= (i) => {
        const playerssquare = document.createElement("div")
        playerssquare.classList.add("spot")
        playerssquare.dataset.num = i 
        playerssquare.textContent = gameBoardControl.board[i]
        gameBoard.appendChild(playerssquare)
        playerssquare.addEventListener("click", function(event){
           if(gameBoardControl.board[event.target.dataset.num] === ""){
            gameBoardControl.updatePlayerChoice(event.target.dataset.num)
            game.determineWinner()
            renderBoard() 
           }else return
           
        })
    }

    const clearBoard = () => {
        gameBoard.innerHTML = ""
    }
    
    const renderBoard = () => {
        clearBoard()
        for(let i = 0; i < gameBoardControl.board.length; i++){
            MakeSquare(i)
        }
    }

    return{
        renderBoard
    }
})()

const game = (function(){


    const Player1 = createPlayer("Alex", "X")
    const Player2 = createPlayer("zachary", "O")

    // Player turn determiner
    const playerTurns = () => {
        if (Player1.playerTurn === true){
            Player1.playerTurn = false
            Player2.playerTurn = true
            return "X"
        }else if(Player2.playerTurn === true){
            Player1.playerTurn = true
            Player2.playerTurn = false
            return "O"
        }
    }

    const determineWinner = () => {
        // Player 1 / X Win Cases
        if (gameBoardControl.board[0] === "X" && gameBoardControl.board[4] === "X" && gameBoardControl.board[8] === "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[2] === "X" && gameBoardControl.board[4] === "X" && gameBoardControl.board[6] === "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[0] === "X" && gameBoardControl.board[3] == "X" && gameBoardControl.board[6] == "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[1] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[7] == "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[2] === "X" && gameBoardControl.board[5] == "X" && gameBoardControl.board[8] == "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[0] === "X" && gameBoardControl.board[1] == "X" && gameBoardControl.board[2] == "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[3] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[5] == "X"){
            console.log("Player1 Wins!")
        }else if (gameBoardControl.board[6] === "X" && gameBoardControl.board[7] == "X" && gameBoardControl.board[8] == "X"){
            console.log("Player1 Wins!")

            // Player 2 / O's Win Cases
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[4] === "O" && gameBoardControl.board[8] === "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[2] === "O" && gameBoardControl.board[4] === "O" && gameBoardControl.board[6] === "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[3] == "O" && gameBoardControl.board[6] == "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[1] === "O" && gameBoardControl.board[4] =="O" && gameBoardControl.board[7] == "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[2] === "O" && gameBoardControl.board[5] == "O" && gameBoardControl.board[8] == "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[1] == "O" && gameBoardControl.board[2] == "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[3] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[5] == "O"){
            console.log("Player 2 Wins!")
        }else if (gameBoardControl.board[6] === "O" && gameBoardControl.board[7] == "O" && gameBoardControl.board[8] == "O"){
            console.log("Player 2 Wins!")
        
            // Draw Case
        }else if ((gameBoardControl.board[0] === "O" || gameBoardControl.board[0] === "X") && 
                  (gameBoardControl.board[1] === "O" || gameBoardControl.board[1] === "X") && 
                  (gameBoardControl.board[2] === "O" || gameBoardControl.board[2] === "X") && 
                  (gameBoardControl.board[3] === "O" || gameBoardControl.board[3] === "X") && 
                  (gameBoardControl.board[4] === "O" || gameBoardControl.board[4] === "X") && 
                  (gameBoardControl.board[5] === "O" || gameBoardControl.board[5] === "X") && 
                  (gameBoardControl.board[6] === "O" || gameBoardControl.board[6] === "X") && 
                  (gameBoardControl.board[7] === "O" || gameBoardControl.board[7] === "X") && 
                  (gameBoardControl.board[8] === "O" || gameBoardControl.board[8] === "X")){
            console.log("its a DRAW!")
        }else console.log("Turn Taken")
    }

    return{
        Player1,
        Player2,
        playerTurns,
        determineWinner
    }

})()


displayController.renderBoard()
