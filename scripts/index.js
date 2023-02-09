function init (){
    let player1 = "X"
    let player2 = "O"
    let Turn = player2
    let player1List=[]
    let player2List=[]
    const available =[1,2,3,4,5,6,7,8,9]
    const cells = document.querySelectorAll('.cell')
    const resetBtn = document.querySelector('#reset')
    let showMessage = document.querySelector('.message')
    let emptyCells = Array(9).fill(null)
    const winningCondition =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
    ]
    function playTurn (event) {
        if (Turn == player1) {
            event.target.style.pointerEvents = "none"
            player1List.push(parseInt(event.target.dataset.id))
            Turn = player2}
        else if (Turn == player2) {
            event.target.style.pointerEvents = "none"
            Turn = player1
            player2List.push(parseInt(event.target.dataset.id))
        }
        event.target.innerHTML = Turn
        console.log(player1List)
        console.log(player2List)

        let isWinningConditionMet = false
         winningCondition.forEach(condition => {
         let count = 0
         condition.forEach(cell => {
        if (player1List.includes(cell)) count++
    })
       if (count === 3) {
        console.log('Player 2 wins!')
        isWinningConditionMet = true
        showMessage.textContent = 'player 2 wins ✌🏻😁'
        
    }
    count = 0
    condition.forEach(cell => {
        if (player2List.includes(cell)) count++;
    })
    if (count === 3) {
        console.log('Player 1 wins!')
        isWinningConditionMet = true
        showMessage.textContent = 'player 1 wins ✌🏻😁'
    }
    if (player1List.length + player2List.length === 9 && isWinningConditionMet === false){
        console.log('TIE!')
        showMessage.textContent = 'TIE 😕'

     }
 })
 if (isWinningConditionMet) {
   console.log('The game has ended, there is a winner!')
   cells.forEach(cell => {
    cell.removeEventListener('click', playTurn)
 })
 
    
 }
 function resetGame(){
    count = 0
    player1List = []
    player2List = []
    Turn = player2
    cells.forEach((cell) => {

        cell.textContent = " "
        cell.style.pointerEvents = 'auto'
        showMessage.textContent = ' '
        cell.addEventListener('click', playTurn)
    })   
    }
    resetBtn.addEventListener('click', resetGame)  
    }
    cells.forEach(cell => {
        cell.addEventListener('click', playTurn)
    })
}
window.addEventListener('DOMContentLoaded', init)