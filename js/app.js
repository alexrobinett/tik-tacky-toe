
const gameBoardControl = (function() {
    let Anotherboard = ["X","O","X","O","O","X","O","O","X"]
    return{
        Anotherboard
    }
})();

// gameBoard.updateBoard()

const createPlayer = (name) => {
    const playerName = name
    return{
        playerName
    }
}

const displayController = (function() {
    let board = ["x","0","x","x","0","x","x","0","x"]

    // DOM Cacheing
    const gameBoard = document.querySelector(".gameboard")
    
    // Makes Square
    const MakeSquare= (i) => {
        const playerssquare = document.createElement("div")
        playerssquare.classList.add("spot")
        playerssquare.dataset.num = i 
        playerssquare.textContent = gameBoardControl.Anotherboard[i]
        gameBoard.appendChild(playerssquare)
    }
    
    const renderBoard = () => {
        for(let i = 0; i < gameBoardControl.Anotherboard.length; i++){
            MakeSquare(i)
        }
    }

    return{
        renderBoard
    }
})()


displayController.renderBoard()