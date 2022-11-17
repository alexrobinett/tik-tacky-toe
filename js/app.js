
const gameBoardControl = (function() {
    // DOM Cache
    const startBtn = document.querySelector(".start")
    const resetBtn = document.querySelector(".reset")

    // Game board Default
    let board = ["","","","","","","","",""]

    const updatePlayerChoice = (squareNum) => {
       board[squareNum] = game.playerTurns()
    }

    const resetGame = () => {
        for(let i = 0; i < 9; i++){
            board[i] = ""
        }
        displayController.clearDisplay()
        displayController.clearBoard()
        displayController.renderBoard()
        game.Player1.playerTurn = true
        game.Player1.playerTurn = true

    }

    resetBtn.addEventListener("click", resetGame)

    return{
        board,
        updatePlayerChoice,
        resetGame,
    }
})();



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

    // DOM Cache
    const gameBoard = document.querySelector(".gameboard")
    const displayBox = document.querySelector(".displaybox")
    const WinnerDisplay = document.querySelector(".winner")
    
    // Makes Square
    const MakeSquare= (i) => {
        const playerssquare = document.createElement("div")
        playerssquare.classList.add("spot")
        playerssquare.dataset.num = i 
        playerssquare.textContent = gameBoardControl.board[i]
        gameBoard.appendChild(playerssquare)
        playerssquare.addEventListener("click", SquareEventListener)
    }

    const SquareEventListener = (e) => {
        if(gameBoardControl.board[e.target.dataset.num] === ""){
            gameBoardControl.updatePlayerChoice(e.target.dataset.num)
            game.determineWinner()
            renderBoard() 
           }
    }

    const displayWinner = (winner) => {
    

        if(winner === "Player1"){
            WinnerDisplay.innerHTML =  `${game.Player1.playerName} Wins!`
            displayController.renderBoard()
            displayBox.appendChild(WinnerDisplay)
        }else if (winner === "Player2"){
            WinnerDisplay.innerHTML =  `${game.Player2.playerName} Wins!`
            displayController.renderBoard()
            displayBox.appendChild(WinnerDisplay)
        }else if (winner === "draw"){
            WinnerDisplay.innerHTML= `It's A Draw Play Again!`
            displayBox.appendChild(WinnerDisplay)
        }
    }

    const clearBoard = () => {
        gameBoard.innerHTML = ""
    }

    const clearDisplay = () => {
        WinnerDisplay.innerHTML = ""
    }
    
    const renderBoard = () => {
        clearBoard()
        for(let i = 0; i < gameBoardControl.board.length; i++){
            MakeSquare(i)
        }
    }
    const EndGame = () => {
        game.Player2.playerTurn = false
        game.Player1.playerTurn = false

        }





    return{
        renderBoard,
        clearBoard,
        clearDisplay,
        displayWinner,
        EndGame,
    }
})()

const game = (function(){
      // DOM Cacheing

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
        }else if  (Player1.playerTurn === false && Player2.playerTurn === false){
            return ""
        }
    }

    const determineWinner = () => {

        
        // Player 1 / X Win Cases
        if (gameBoardControl.board[0] === "X" && gameBoardControl.board[4] === "X" && gameBoardControl.board[8] === "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()
        }else if (gameBoardControl.board[2] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[6] == "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()
        }else if (gameBoardControl.board[0] === "X" && gameBoardControl.board[3] == "X" && gameBoardControl.board[6] == "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()
        }else if (gameBoardControl.board[1] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[7] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[2] === "X" && gameBoardControl.board[5] == "X" && gameBoardControl.board[8] == "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()
            displayController.displayWinner("")
        }else if (gameBoardControl.board[0] === "X" && gameBoardControl.board[1] == "X" && gameBoardControl.board[2] == "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()
        }else if (gameBoardControl.board[3] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[5] == "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()
        }else if (gameBoardControl.board[6] === "X" && gameBoardControl.board[7] == "X" && gameBoardControl.board[8] == "X"){
            displayController.displayWinner("Player1")
            displayController.EndGame()

            // Player 2 / O's Win Cases
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[8] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[2] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[6] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[3] == "O" && gameBoardControl.board[6] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[1] === "O" && gameBoardControl.board[4] =="O"  && gameBoardControl.board[7] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[2] === "O" && gameBoardControl.board[5] == "O" && gameBoardControl.board[8] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[1] == "O" && gameBoardControl.board[2] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[3] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[5] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        }else if (gameBoardControl.board[6] === "O" && gameBoardControl.board[7] == "O" && gameBoardControl.board[8] == "O"){
            displayController.displayWinner("Player2")
            displayController.EndGame()
        
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
                    console.log("it shoudl be a draw!")
            displayController.displayWinner("draw")
            displayController.EndGame()
        }else console.log("Turn Taken")
    }

    return{
        Player1,
        Player2,
        playerTurns,
        determineWinner,

    }

})()


displayController.renderBoard()
