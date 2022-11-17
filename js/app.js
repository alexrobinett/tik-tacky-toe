
const gameBoardControl = (function() {
    // DOM Cacheing
    const startBtn = document.querySelector(".start")
    const resetBtn = document.querySelector(".reset")

    // Game board Defualt
    let board = ["","","","","","","","",""]

    const updatePlayerChoice = (squareNum) => {
       board[squareNum] = game.playerTurns()
    }

    const resetGame = () => {
        for(let i = 0; i < board.length; i++){
            board[i] = ""
        }
        displayController.renderBoard()

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

    // DOM Cacheing
    const gameBoard = document.querySelector(".gameboard")
    const displayBox = document.querySelector(".displaybox")
    
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

    const displayWinner = (winner) => {
        // Dom
        const Player1Wins = document.createElement("span")
        Player1Wins.classList.add("winner")
        Player1Wins.textContent = `${game.Player1.playerName} Wins!`

        const Player2Wins = document.createElement("span")
        Player2Wins.classList.add("winner")
        Player2Wins.textContent = `${game.Player2.playerName} Wins!`

        const Draw = document.createElement("span")
        Draw.classList.add("draw")
        Draw.textContent = `it's A Draw Play Again!`

        if(winner === "Player1"){
            displayBox.appendChild(Player1Wins)
        }else if (winner === "Player2"){
            displayBox.appendChild(Player2Wins)
        }else if (winner === "draw"){
            displayBox.appendChild(Draw)
        }
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
        renderBoard,
        clearBoard,
        displayWinner,
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
        }
    }

    const determineWinner = () => {

        
        // Player 1 / X Win Cases
        if (gameBoardControl.board[0] === "X" && gameBoardControl.board[4] === "X" && gameBoardControl.board[8] === "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[2] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[6] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[0] === "X" && gameBoardControl.board[3] == "X" && gameBoardControl.board[6] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[1] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[7] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[2] === "X" && gameBoardControl.board[5] == "X" && gameBoardControl.board[8] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[0] === "X" && gameBoardControl.board[1] == "X" && gameBoardControl.board[2] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[3] === "X" && gameBoardControl.board[4] == "X" && gameBoardControl.board[5] == "X"){
            displayController.displayWinner("Player1")
        }else if (gameBoardControl.board[6] === "X" && gameBoardControl.board[7] == "X" && gameBoardControl.board[8] == "X"){
            displayController.displayWinner("Player1")

            // Player 2 / O's Win Cases
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[8] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[2] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[6] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[3] == "O" && gameBoardControl.board[6] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[1] === "O" && gameBoardControl.board[4] =="O"  && gameBoardControl.board[7] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[2] === "O" && gameBoardControl.board[5] == "O" && gameBoardControl.board[8] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[0] === "O" && gameBoardControl.board[1] == "O" && gameBoardControl.board[2] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[3] === "O" && gameBoardControl.board[4] == "O" && gameBoardControl.board[5] == "O"){
            displayController.displayWinner("Player2")
        }else if (gameBoardControl.board[6] === "O" && gameBoardControl.board[7] == "O" && gameBoardControl.board[8] == "O"){
            displayController.displayWinner("Player2")
        
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
