
const gameBoardControl = (function() {
    let board = ["O","O","X","O","O","X","O","O","X"]
    const updatePlayerChoice = (squareNum) => {
       board[squareNum] = Player1.choice
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

    return{
        playerName,
        choice
    }
}

const Player1 = createPlayer("Alex", "x")
const Player2 = createPlayer("zachary", "O")


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

const Game= (function(){

})()


displayController.renderBoard()