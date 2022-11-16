
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
           gameBoardControl.updatePlayerChoice(event.target.dataset.num)
           renderBoard()
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

    const Player1 = createPlayer("Alex", "x")
    const Player2 = createPlayer("zachary", "O")

    const playerTurns = () => {
        if (Player1.playerTurn === true){
            Player1.playerTurn = false
            Player2.playerTurn = true
            return "X"
        }else if(Player2.playerTurn === true){
            Player1.playerTurn = true
            Player2.playerTurn = false
            return "0"
        }
    }


    return{
        Player1,
        Player2,
        playerTurns
    }

})()


displayController.renderBoard()