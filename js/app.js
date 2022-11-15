
// const gameBoard = (function() =>{
    // let board = ["x","0","x","x","0","x","x","0","x"]
//     function updateBoard(board){
//         for (let i = 0; i > board.length; i++){

//         }
//     } 
//     return{
//         updateBoard,
//         board
//     }
// })();

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
    
    const MakeSquare= (i) => {
        const playerssquare = document.createElement("div")
        playerssquare.classList.add("spot")
        playerssquare.dataset.num = i 
        playerssquare.textContent = board[i]
        gameBoard.appendChild(playerssquare)
    }

    const renderBoard = () => {
        for(let i = 0; i < board.length; i++){
            MakeSquare(i)
        }
    }

    return{
        renderBoard
    }
})()


displayController.renderBoard()