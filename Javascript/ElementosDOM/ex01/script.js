function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    
    //Chaves em volta das variaveis ira considerar ser um objeto e cada uma das chaves do objeto seria o nome da varivel
    //console.log({position, name, number})
    const confirmation = confirm("Escalar " + name + " como " + position + " ?");

    if (confirmation){
      const teamList = document.getElementById('teamList') 
      const playerItem = document.createElement('li')
      playerItem.id = 'player-' + number
      playerItem.innerText = position + ": " + name + " (" + number + ")"
      teamList.appendChild(playerItem)

        //Limpar o campo após inserir
      document.getElementById('position').value = ''
      document.getElementById('name').value =''
      document.getElementById('number').value = ''

    }

}

function RemovePlayer (){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')

    if( confirmation) {
        //remover o elemento direto
        //playerToRemove.remove()

        //Remover da lista não ordenada o filho
        document.getElementById('teamList').removeChild(playerToRemove)
        //Remover do input numero
        document.getElementById('numberToRemove').value = ''
    }

}