// selecionar o id e dentro dele as tags span
const boardRegions = document.querySelectorAll('#gameBoard span')
// Criar uma tabuleiro virtual
let vBoard = []
let turnPlayer = ''

// Mostrar o nome do jogador da vez
function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame(){
    vBoard = [['', '',''], ['','',''],['','','']]
    turnPlayer = 'player1'
}