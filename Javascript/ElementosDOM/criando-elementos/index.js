function addInput(){
    const ul = document.getElementById('inputs')
    //Criando uma tag
    const newLi = document.createElement('li')
    //Atributos da li
    newLi.className = 'list-item'
    //Texto dentro do li "lista"
    newLi.innerText = 'Novo input '
    
    //Criar um input vazio
    const newInput = document.createElement('input')
    //Tipo do input
    newInput.type = 'text'
    //Atributo do input
    newInput.name = 'input'

    //adicionar o newIput no newLi
    newLi.appendChild(newInput)
    //Adicionar a lista 'newLi' a ul
    ul.appendChild(newLi)

}