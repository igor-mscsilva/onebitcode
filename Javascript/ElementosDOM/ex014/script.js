const input = document.getElementById('input')
//Adicionando um evento e função no botão
document.getElementById('value').addEventListener('click',function (){
 input.value = input.value === '' ? 'Olá, Mundo !' : ''
})

//Mudar o tipo do botão
document.getElementById('type').addEventListener('click', function(){
     input.type = input.type !== 'date' ? 'date' : 'text'
   // input.setAttribute('type', 'radio')
})

//Mudar o placeholder
document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite Algo...'
})

//Desabilitar o botão
document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled' ,!input.disabled)
})

//Mudar dados

document.getElementById('data').addEventListener('click', function(){
    //dataset referencia todos atributos com data-name
    const data = input.dataset.something
    console.log("O valor do atributo data-something é : " + data)
    input.dataset.something = 'Outro valor'
    console.log("O valor do atributo data-something agora é: " + data)
})